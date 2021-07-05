import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import IconReUndo from '../../../../../_icons_svg/icon_re_undo/IconReUndo';
//
import Select from '../../../../input/select/Select';
//
import './CanvasDraw.scss';

//
const w_canvas = 250;
const h_canvas = 250;

//
class CanvasDraw extends Component {
    state = {
        stroke_width: 1,
        color: '#000000',
        bg: '#ffffff',
    };

    //
    refCanvas = (elm) => {
        if (elm !== null) {
            this.ref_canvas = elm;
        }
    };

    refLinkDownload = (elm) => {
        if (elm !== null) {
            this.ref_link_download = elm;
        }
    };

    //
    componentDidMount() {
        this.startReadyCanvas();
    }

    //
    startReadyCanvas = () => {
        const { list_canvas, c_step, bg, stroke_width, color } =
            this.props.canvas_draws;

        this.ctx = this.ref_canvas.getContext('2d');
        this.run = false;
        this.list_canvas = [...list_canvas];
        this.c_step = c_step;
        this.just_move = false;

        setTimeout(() => {
            this.drawImageToCanvas(this.c_step);
            this.setState({
                bg: bg,
                stroke_width: stroke_width,
                color: color,
            });
        }, 0);
    };

    /* ------------------ COMMON ------------------- */

    //
    onMouseDownTouch = (client_x, client_y) => {
        this.run = true;
        this.x_offset = this.ref_canvas.getBoundingClientRect().left;
        this.y_offset = this.ref_canvas.getBoundingClientRect().top;
        const move_to_x = client_x - this.x_offset;
        const move_to_y = client_y - this.y_offset;
        //
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.state.color;
        this.ctx.lineWidth = this.state.stroke_width;
        this.ctx.moveTo(move_to_x, move_to_y);
    };

    //
    onMoveToDraw = (client_x, client_y) => {
        if (this.run) {
            if (!this.just_move) {
                this.just_move = true;
            }
            const line_to_x = client_x - this.x_offset;
            const line_to_y = client_y - this.y_offset;
            this.ctx.lineTo(line_to_x, line_to_y);
            this.ctx.stroke();
        }
    };

    //
    onMouseUpTouchEnd = () => {
        this.run = false;

        if (!this.just_move) {
            return;
        }

        this.list_canvas.splice(
            this.c_step + 1,
            this.list_canvas.length,
            this.ctx.getImageData(0, 0, w_canvas, h_canvas)
        );
        this.c_step += 1;
        this.just_move = false;
    };

    //
    drawImageToCanvas = (index) => {
        this.ctx.clearRect(0, 0, w_canvas, h_canvas);

        if (this.list_canvas[this.c_step]) {
            this.ctx.putImageData(this.list_canvas[index], 0, 0);
        }
    };

    //
    fillBgCanvas = () => {
        const img_src = this.ref_canvas.toDataURL();
        this.ctx.clearRect(0, 0, w_canvas, h_canvas);
        this.ctx.fillStyle = this.state.bg;
        this.ctx.fillRect(0, 0, w_canvas, h_canvas);

        const img_canvas = new Image();
        img_canvas.src = img_src;
        img_canvas.onload = () => {
            this.ctx.drawImage(img_canvas, 0, 0);
        };
    };

    /* --------------------------------- */

    //
    onMouseDown = (event) => {
        this.onMouseDownTouch(event.clientX, event.clientY);
    };

    //
    onMouseMove = (event) => {
        this.onMoveToDraw(event.clientX, event.clientY);
    };
    //
    onMouseUp = () => {
        this.onMouseUpTouchEnd();
    };

    //
    onTouchStart = (event) => {
        event.stopPropagation();
        this.onMouseDownTouch(
            event.touches[0].clientX,
            event.touches[0].clientY
        );
    };

    //
    onTouchMove = (event) => {
        event.stopPropagation();
        this.onMoveToDraw(event.touches[0].clientX, event.touches[0].clientY);
    };

    //
    onTouchEnd = () => {
        this.onMouseUpTouchEnd();
    };

    //
    onMouseLeave = () => {
        this.run = false;
    };

    //
    clearCanvas = () => {
        if (this.run) {
            return;
        }

        if (!this.list_canvas[this.c_step]) {
            return;
        }

        this.ctx.clearRect(0, 0, w_canvas, h_canvas);
        this.list_canvas.splice(this.c_step + 1, this.list_canvas.length, '');

        this.c_step += 1;
    };

    //
    undo = () => {
        if (this.c_step == 0) {
            return;
        }

        this.c_step -= 1;
        this.drawImageToCanvas(this.c_step);
    };

    //
    redo = () => {
        if (this.list_canvas.length <= this.c_step + 1) {
            return;
        }

        this.c_step += 1;
        this.drawImageToCanvas(this.c_step);
    };

    //
    onChangeColor = (e) => {
        this.setState({
            color: e.target.value,
        });
    };

    //
    onChangeBg = (e) => {
        this.setState({
            bg: e.target.value,
        });
    };

    //
    onChangeWidth = (e) => {
        this.setState({
            stroke_width: +e.target.value,
        });
    };

    //
    completeCanvas = () => {
        this.fillBgCanvas();

        setTimeout(() => {
            this.props.completeCanvas({
                current_canvas: this.ref_canvas.toDataURL(),
                list_canvas: this.list_canvas,
                c_step: this.c_step,
                bg: this.state.bg,
                color: this.state.color,
                stroke_width: this.state.stroke_width,
            });
        }, 0);
    };

    //
    handleDownload = (e) => {
        e.preventDefault();
        this.fillBgCanvas();

        setTimeout(() => {
            this.ref_link_download.href = this.ref_canvas.toDataURL();
            this.ref_link_download.click();

            setTimeout(() => {
                this.drawImageToCanvas(this.c_step);
            }, 0);
        }, 0);
    };

    //
    render() {
        const { bg, color, stroke_width } = this.state;

        //
        return (
            <div className="CanvasDraw bg-vid-pic">
                <div className="CanvasDraw_contain brs-5px App_box_shadow">
                    <canvas
                        ref={this.refCanvas}
                        className="CanvasDraw_canvas"
                        width={w_canvas + 'px'}
                        height={h_canvas + 'px'}
                        style={{ backgroundColor: bg }}
                        onMouseLeave={this.onMouseLeave}
                        //
                        onMouseDown={this.onMouseDown}
                        onMouseMove={this.onMouseMove}
                        onMouseUp={this.onMouseUp}
                        //
                        onTouchStart={this.onTouchStart}
                        onTouchMove={this.onTouchMove}
                        onTouchEnd={this.onTouchEnd}
                    ></canvas>

                    <div className="CanvasDraw_bg">
                        <div>
                            <input
                                type="color"
                                value={bg}
                                onChange={this.onChangeBg}
                            />
                        </div>
                    </div>
                </div>

                <div className="CanvasDraw_actions">
                    <div className="CanvasDraw_actions-row">
                        <div>
                            <Select
                                options={Array.from(
                                    { length: 15 },
                                    (_, k) => k
                                )}
                                current_option={stroke_width}
                                onSelectOption={this.onChangeWidth}
                            />
                        </div>

                        <div>
                            <input
                                type="color"
                                value={color}
                                onChange={this.onChangeColor}
                            />
                        </div>

                        <div onClick={this.undo} title="Undo">
                            <IconReUndo />
                        </div>

                        <div onClick={this.redo} title="Redo">
                            <IconReUndo is_redo={true} />
                        </div>

                        <div onClick={this.clearCanvas}>Clear</div>

                        <div onClick={this.completeCanvas}>Complete</div>
                    </div>
                </div>

                <a
                    ref={this.refLinkDownload}
                    className="display-none"
                    href=""
                    download
                />
            </div>
        );
    }
}

CanvasDraw.propTypes = {
    canvas_draws: PropTypes.object,
    completeCanvas: PropTypes.func,
};

export default CanvasDraw;

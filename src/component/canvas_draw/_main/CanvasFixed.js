import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import CanvasDraw from '../canvas/CanvasDraw';
import ScreenFixed from '../../_screen_fixed/_main/ScreenFixed';

//
class CanvasFixed extends Component {
    state = {
        show_canvas: false,
    };

    //
    refCanvasDraw = (elm) => {
        if (elm !== null) {
            this.ref_canvas_draw = elm;
        }
    };

    //
    toggleCanvasFixed = (data) => {
        this.openCanvasFixed(data.completeCanvas, data.canvas_draws);
    };

    // open canvas fixed
    openCanvasFixed = (completeCanvas, canvas_draws) => {
        document
            .getElementsByTagName('BODY')[0]
            .style.setProperty('overflow-y', 'hidden');
        //
        this.completeCanvasDraw = completeCanvas;
        this.setState({
            show_canvas: true,
        });
        //
        setTimeout(() => {
            this.ref_canvas_draw.startReadyCanvas(canvas_draws);
        }, 0);
    };

    //
    onDownload = (e) => {
        this.ref_canvas_draw.onDownload(e);
    };

    //
    completeCanvas = (canvas_draws) => {
        this.completeCanvasDraw(canvas_draws);
        this.completeCanvasDraw = null;
        setTimeout(() => {
            this.setState({
                show_canvas: false,
            });
        }, 0);
        //
        document
            .getElementsByTagName('BODY')[0]
            .style.setProperty('overflow-y', 'auto');
    };

    //
    closeCanvasFixed = () => {
        if (confirm('Your changes will not be saved!')) {
            this.deleteCanvas();
            document
                .getElementsByTagName('BODY')[0]
                .style.setProperty('overflow-y', 'auto');
        }
    };

    // delete canvas
    deleteCanvas = () => {
        this.setState({
            show_canvas: false,
        });
        this.completeCanvasDraw = null;
        this.ref_canvas_draw.clearCompleteCanvas();
    };

    //
    render() {
        const { show_canvas, url } = this.state;

        return (
            <div className="CanvasFixed">
                {show_canvas && (
                    <ScreenFixed
                        url={url}
                        closeScreenFixed={this.closeCanvasFixed}
                        onDownload={this.onDownload}
                    >
                        <CanvasDraw
                            ref={this.refCanvasDraw}
                            completeCanvas={this.completeCanvas}
                        />
                    </ScreenFixed>
                )}
            </div>
        );
    }
}

CanvasFixed.propTypes = {};

export default CanvasFixed;

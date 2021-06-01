import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 
import { context_api } from '../../../_context/ContextAPI';
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

    // 
    openCanvasFixed = (completeCanvas, canvas_draws) => {
        this.completeCanvasDraw = completeCanvas;

        this.setState({
            show_canvas: true,
        });
        
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
    };

    // 
    deleteCanvas = () => {
        this.setState({
            show_canvas: false,
        });
        this.completeCanvasDraw = null;
        this.ref_canvas_draw.clearCompleteCanvas();
    };

    //
    closeCanvasFixed = () => {
        this.deleteCanvas();
    };

    //
    openCloseCanvasFixed = () => {
        this.context.openScreenConfirm(
            'Canvas not saved',
            'Your changes will not be saved!',
            this.closeCanvasFixed
        );
    };

    //
    render() {
        const { show_canvas, url } = this.state;

        return (
            <div className="CanvasFixed">
                {show_canvas && (
                    <ScreenFixed
                        url={url}
                        closeScreenFixed={this.openCloseCanvasFixed}
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

CanvasFixed.contextType = context_api;

export default CanvasFixed;

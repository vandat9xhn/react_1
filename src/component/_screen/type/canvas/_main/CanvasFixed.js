import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import {
    requestFullscreen,
    exitFullscreen,
} from '../../../../../_some_function/handelFullScreen';
//
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';
//
import ScreenFixed from '../../../components/frame/has_title/_main/ScreenFixed';
//
import CanvasDraw from '../canvas/CanvasDraw';

//
export function openScreenCanvas({
    openScreenFloor,
    completeCanvas,
    canvas_draws,
    ...other_props,
}) {
    openScreenFloor({
        FloorComponent: CanvasFixed,
        completeCanvas: completeCanvas,
        canvas_draws: canvas_draws,
        ...other_props
    });
}

//
CanvasFixed.propTypes = {
    closeScreen: PropTypes.func,
    completeCanvas: PropTypes.func,
    canvas_draws: PropTypes.shape({
        list_canvas: PropTypes.array,
        c_step: PropTypes.number,
        bg: PropTypes.string,
        stroke_width: PropTypes.number,
        color: PropTypes.string,
    }),
};

//
function CanvasFixed({ closeScreen, completeCanvas, canvas_draws }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const ref_canvas = useRef(null);

    //
    useEffect(() => {
        requestFullscreen();
    }, []);

    //
    function handleCompleteCanvas(canvas_draws) {
        completeCanvas(canvas_draws);

        setTimeout(() => {
            exitFullscreen();
            closeScreen();
        }, 0);
    }

    //
    function closeCanvasFixed() {
        exitFullscreen();
        closeScreen();
    }

    //
    function onDownload(e) {
        ref_canvas.current.handleDownload(e);
    }

    //
    function showCloseCanvasFixed() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Canvas not saved',
            notification: 'Your changes will not be saved!',
            handleConfirm: closeCanvasFixed,
        });
    }

    //
    return (
        <ScreenFixed
            url={canvas_draws.list_canvas[canvas_draws.c_step]}
            closeScreenFixed={showCloseCanvasFixed}
            handleDownload={onDownload}
        >
            <CanvasDraw
                ref={ref_canvas}
                canvas_draws={canvas_draws}
                completeCanvas={handleCompleteCanvas}
            />
        </ScreenFixed>
    );
}

export default CanvasFixed;

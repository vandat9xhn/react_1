import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
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
    ...other_props
}) {
    openScreenFloor({
        FloorComponent: CanvasFixed,
        completeCanvas: completeCanvas,
        canvas_draws: canvas_draws,
        ...other_props,
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
    const ref_has_change = useRef(false);

    //
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    // ------

    //
    function handleKeydown(e) {
        if (e.key == 'Escape') {
            showCloseCanvasFixed();
        }
    }

    // ------

    //
    function handleCompleteCanvas(canvas_draws) {
        completeCanvas(canvas_draws);

        setTimeout(() => {
            closeScreen();
        }, 0);
    }

    //
    function closeCanvasFixed() {
        closeScreen();
    }

    //
    function onDownload(e) {
        ref_canvas.current.handleDownload(e);
    }

    //
    function showCloseCanvasFixed() {
        if (!ref_has_change.current) {
            closeCanvasFixed();

            return;
        }

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
            show_screen_title={true}
            tooltipCloseElm={'Press Esc to close'}
            body_hidden_params={{
                use_z_index: true,
                screen_z_index: 999,
            }}
            closeScreenFixed={showCloseCanvasFixed}
            handleDownload={onDownload}
        >
            <CanvasDraw
                ref={ref_canvas}
                ref_has_change={ref_has_change}
                canvas_draws={canvas_draws}
                completeCanvas={handleCompleteCanvas}
            />
        </ScreenFixed>
    );
}

export default CanvasFixed;

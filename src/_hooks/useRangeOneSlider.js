import { useRef } from 'react';
//
import { getClientXY } from '../_some_function/getClientXY';
import { getSliderPercent } from '../_some_function/getSliderValue';
//
import { useForceUpdate } from './UseForceUpdate';
import { useMouseDownToWindowUp } from './useMouseDownToWindowUp';

//
export function useRangeOneSlider({
    ref_range_elm = { current: null },
    ref_has_change_range = { current: false },

    getRangeAngel = () => 0,
    handleChange = () => {},

    afterMouseDown = () => {},
    afterMousemove = () => {},
    afterMouseUp = () => {},
}) {
    //
    const ref_is_run = useRef(false);

    const ref_range_obj = useRef({
        range_angel: 0,
        x_range_start: 0,
        y_range_start: 0,
        x_range_end: 0,
        y_range_end: 0,
    });

    //
    const forceUpdate = useForceUpdate();

    //
    const { onDown } = useMouseDownToWindowUp({
        handleDown: onMouseDown,
        handleMove: onMouseMove,
        handleEnd: onMouseEnd,
    });

    // -----

    //
    function changeRangeObj() {
        if (ref_has_change_range.current) {
            return;
        }

        ref_has_change_range.current = true;

        const { top, left, right, bottom } =
            ref_range_elm.current.getBoundingClientRect();

        const new_range_angel = getRangeAngel();

        if (new_range_angel == 0) {
            ref_range_obj.current = {
                ...ref_range_obj.current,
                range_angel: 0,
                x_range_start: left,
                x_range_end: right,
            };
        }
        //
        else if (new_range_angel == -90) {
            ref_range_obj.current = {
                ...ref_range_obj.current,
                range_angel: 90,
                y_range_start: bottom,
                y_range_end: top,
            };
        }
    }

    //
    function onChange({ clientX, clientY }) {
        const new_percent = getSliderPercent({
            ...ref_range_obj.current,
            clientX: clientX,
            clientY: clientY,
        });

        handleChange(new_percent * 100);
    }

    //
    function onMouseDown(e) {
        if (!ref_has_change_range.current) {
            changeRangeObj();
        }

        const { client_x, client_y } = getClientXY(e);
        onChange({ clientX: client_x, clientY: client_y });
        ref_is_run.current = true;
        forceUpdate();

        afterMouseDown();
    }

    //
    function onMouseMove(e) {
        if (ref_is_run.current) {
            const { client_x, client_y } = getClientXY(e);
            onChange({ clientX: client_x, clientY: client_y });

            afterMousemove();
        }
    }

    //
    function onMouseEnd() {
        ref_is_run.current = false;
        forceUpdate();

        afterMouseUp();
    }

    //
    function handleClick(e) {
        onChange({ clientX: e.clientX, clientY: e.clientY });
    }

    // ----

    return {
        ref_is_run,
        ref_range_obj,

        onDown,
        handleClick,
    };
}

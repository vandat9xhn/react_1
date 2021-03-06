import { useState } from 'react';
import { toggleAppTouchNone } from '../_some_function/AppTouchNoneTemp';
//
import { useMouseMoveX } from './useMouseMoveX';

//
export function useShowHideUnder({ under_width = 0, other_state = {} }) {
    //
    const [state_obj, setStateObj] = useState({
        trans_x: 0,
        ...other_state,
    });

    //
    const { is_run, first_orientation, handleStart } = useMouseMoveX({
        handleMouseMove: handleMouseMove,
        handleMouseEnd: handleMouseEnd,
    });

    //
    function handleMouseMove(client_x_change) {
        if (first_orientation.current != 'x') {
            is_run.current = false;

            return;
        }

        toggleAppTouchNone({ touch_none: true });

        setStateObj((state_obj) => {
            const { trans_x } = state_obj;
            if (
                (client_x_change < 0 && trans_x <= -under_width) ||
                (client_x_change > 0 && trans_x >= 0)
            ) {
                return state_obj;
            }

            return {
                ...state_obj,
                trans_x: trans_x + client_x_change,
            };
        });
    }

    //
    function handleMouseEnd() {
        if (first_orientation.current == 'x') {
            toggleAppTouchNone({ touch_none: false });

            setStateObj((state_obj) => ({
                ...state_obj,
                trans_x:
                    state_obj.trans_x >= -under_width / 2 ? 0 : -under_width,
            }));
        }
    }

    //
    return {
        state_obj,
        is_run,

        handleStart,
    };
}

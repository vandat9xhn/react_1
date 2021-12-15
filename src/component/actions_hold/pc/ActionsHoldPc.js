import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useHold } from '../../../_hooks/useHold';
//
import ActionsPc from '../../actions/pc/_main/ActionsPc';

//
ActionsHoldPc.propTypes = {};

//
function ActionsHoldPc({
    title_action,
    class_action_contain,
    children,

    scroll_elm,

    x_always,
    transform_x_more,
    y_always,
    transform_y_more,

    time_hold = 500,
    time_leave = 800,
    force_close,

    callbackOpen,
    callbackClose,
}) {
    //
    const [show_count, setShowCount] = useState(0);

    //
    const { StartHold: StartHoldEnter, StopHold: StopHoldEnter } = useHold({
        time: time_hold,
    });
    const { StartHold: StartHoldLeave, StopHold: StopHoldLeave } = useHold({
        time: time_leave,
    });

    //
    useEffect(() => {
        StopHoldEnter();
        setShowCount(0);
    }, [force_close]);

    // -----

    //
    function handleChangeShowCount(is_up = true) {
        setShowCount((show_count) => {
            const new_show_count = show_count + (is_up ? 1 : -1);

            return new_show_count <= 0 ? 0 : 1;
        });
    }

    // ------

    //
    function handleMouseEnter() {
        StopHoldLeave();

        StartHoldEnter(() => {
            handleChangeShowCount(true);
        });
    }

    //
    function handleMouseLeave() {
        StopHoldEnter();

        StartHoldLeave(() => {
            handleChangeShowCount(false);
        });
    }

    //
    return (
        <ActionsPc
            title_action={
                <div
                    className="ActionsHoldPc_title display-inherit cursor-pointer hv-underline"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {title_action}
                </div>
            }
            class_action_contain={class_action_contain}
            use_own_title={true}
            is_show={show_count > 0}
            //
            scroll_elm={scroll_elm}
            //
            x_always={x_always}
            transform_x_more={transform_x_more}
            y_always={y_always}
            transform_y_more={transform_y_more}
            //
            // toggleShow={toggleShow}
            callbackOpen={callbackOpen}
            callbackClose={callbackClose}
        >
            <div
                className="ActionsHoldPc_contain"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </ActionsPc>
    );
}

export default ActionsHoldPc;

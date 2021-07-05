import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useHold } from '../../../_hooks/useHold';

//
TestHook.propTypes = {};

//
function TestHook(props) {
    //
    const [hold_success, setHoldSuccess] = useState(false);

    //
    const { StartHold, StopHold } = useHold(500);

    //
    function handleMouseDown() {
        StartHold(() => {
            setHoldSuccess(true);
        });
    }
    //
    function handleMouseUp() {
        StopHold();
    }
    //
    function handleReset() {
        setHoldSuccess(false);
    }

    //
    return (
        <div>
            <div>
                <div
                    className="cursor-pointer"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                >
                    Hold press
                </div>
                <div className={hold_success ? '' : 'display-none'}>
                    Hold success
                </div>

                <br />
                <div onClick={handleReset}>Reset</div>
            </div>
        </div>
    );
}

export default TestHook;

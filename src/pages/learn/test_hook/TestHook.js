import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// 
import { useHoldPress } from '../../../_custom_hooks/useHoldPress';

//
TestHook.propTypes = {
    
};

//
function TestHook(props) {    
    //
    const [hold_success, setHoldSuccess] = useState(false)

    //
    const [StartHoldPress, StopHoldPress] = useHoldPress(6, () => {
        setHoldSuccess(true)
    })

    //
    function handleMouseDown() {
        StartHoldPress()
    }
    //
    function handleMouseUp() {
        StopHoldPress()
    }
    //
    function handleReset() {
        setHoldSuccess(false)
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
                <div className={hold_success ? '' : 'display-none'}>Hold success</div>
                
                <br/>
                <div onClick={handleReset}>
                    Reset
                </div>
            </div>
        </div>
    );
}

export default TestHook;
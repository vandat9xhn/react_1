import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import LearnSwitch2Rect1 from './LearnSwitch2Rect1';
import LearnSwitch2Rect2 from './LearnSwitch2Rect2';
//
import './LearnSwitch2Rect.scss';

//
LearnSwitch2Rect.propTypes = {};

//
function LearnSwitch2Rect(props) {
    //
    const [c_rect_ix, setCRectIx] = useState(0);

    // ---

    //
    function toggleCRectIx() {
        setCRectIx((c_rect_ix) => (c_rect_ix == 0 ? 1 : 0));
    }

    //
    return (
        <div className="LearnSwitch2Rect">
            <div
                className="margin-bottom-20px font-16px font-600 cursor-pointer"
                onClick={toggleCRectIx}
            >
                Switch
            </div>

            <div
                className="LearnSwitch2Rect_contain pos-rel margin-auto bg-primary brs-8px box-shadow-fb overflow-hidden"
                style={{
                    width: c_rect_ix == 0 ? '500px' : '800px',
                    height: c_rect_ix == 0 ? '250px' : '300px',
                }}
            >
                <div
                    className={`LearnSwitch2Rect_rect ${
                        c_rect_ix == 1
                            ? 'trans-x--100per opacity-0 visibility-hidden'
                            : ''
                    }`}
                >
                    <LearnSwitch2Rect1 />
                </div>

                <div
                    className={`LearnSwitch2Rect_rect ${
                        c_rect_ix == 0
                            ? 'trans-x-100per opacity-0 visibility-hidden'
                            : ''
                    }`}
                >
                    {c_rect_ix == 1 ? (
                        <LearnSwitch2Rect2 />
                    ) : (
                        <div style={{ width: '500px' }}></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LearnSwitch2Rect;

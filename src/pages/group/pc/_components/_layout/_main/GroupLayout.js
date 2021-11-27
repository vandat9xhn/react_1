import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import GroupLayoutLeft from '../left/_main/GroupLayoutLeft';

//
GroupLayout.propTypes = {};

//
function GroupLayout({ children }) {
    //
    const ref_scroll = useRef(null);

    //
    return (
        <div className="GroupLayout">
            <div className="display-flex">
                <div className="GroupLayout_left flex-shrink-0 left-bar-sticky">
                    <GroupLayoutLeft ref_scroll={ref_scroll} />
                </div>

                <div className="GroupLayout_right flex-grow-1">{children}</div>
            </div>
        </div>
    );
}

export default GroupLayout;

import React from 'react';
import PropTypes from 'prop-types';
//
import GroupLayoutLeft from '../left/_main/GroupLayoutLeft';

//
GroupLayout.propTypes = {};

//
function GroupLayout({ children }) {
    //
    return (
        <div className="GroupLayout">
            <div className="display-flex">
                <div className="GroupLayout_left flex-shrink-0 left-bar-sticky">
                    <GroupLayoutLeft />
                </div>

                <div className="GroupLayout_right flex-grow-1">{children}</div>
            </div>
        </div>
    );
}

export default GroupLayout;

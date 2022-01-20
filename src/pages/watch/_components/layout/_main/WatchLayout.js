import React from 'react';
import PropTypes from 'prop-types';
//
import WatchLayoutLeft from '../left/_main/WatchLayoutLeft';

//
WatchLayout.propTypes = {};

//
function WatchLayout({ children }) {
    //
    return (
        <div className="WatchLayout">
            <div className="display-flex">
                <div className="WatchLayout_left flex-shrink-0 left-bar-sticky max-w-100per">
                    <WatchLayoutLeft />
                </div>

                <div className="WatchLayout_right flex-grow-1">{children}</div>
            </div>
        </div>
    );
}

export default WatchLayout;

import React from 'react';
import PropTypes from 'prop-types';
//
import './FbSettingsItemLayout.scss';

//
FbSettingsItemLayout.propTypes = {};

//
function FbSettingsItemLayout({ Icon, children, handleClick }) {
    //
    return (
        <div
            className="FbSettingsItemLayout padding-8px brs-6px cursor-pointer hv-bg-fb"
            onClick={handleClick}
        >
            <div className="display-flex align-items-center">
                <div className="flex-shrink-0 btn-icon-36px bg-ccc">{Icon}</div>

                <div className="flex-grow-1 flex-basis-1rem margin-left-12px">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default FbSettingsItemLayout;

import React from 'react';
import PropTypes from 'prop-types';

//
FbSettingsTitle.propTypes = {};

//
function FbSettingsTitle({ title, info }) {
    //
    return (
        <div className="FbSettingsTitle">
            <h2 className="margin-bottom-5px font-17px font-600 line-20px">
                {title}
            </h2>

            <div className="font-13px text-secondary line-16px">{info}</div>
        </div>
    );
}

export default FbSettingsTitle;

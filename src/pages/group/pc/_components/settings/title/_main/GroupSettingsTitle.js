import React from 'react';
import PropTypes from 'prop-types';

//
GroupSettingsTitle.propTypes = {};

//
function GroupSettingsTitle({ title, info }) {
    //
    return (
        <div className="GroupSettingsTitle line-20px">
            <h2 className="font-17px font-600">{title}</h2>

            <div className="font-13px text-secondary">{info}</div>
        </div>
    );
}

export default GroupSettingsTitle;

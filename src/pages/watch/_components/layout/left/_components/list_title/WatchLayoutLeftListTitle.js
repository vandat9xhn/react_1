import React from 'react';
import PropTypes from 'prop-types';

//
WatchLayoutLeftListTitle.propTypes = {};

//
function WatchLayoutLeftListTitle({ title, manage_name, toggleMangeList }) {
    //
    return (
        <div className="WatchLayoutLeftListTitle flex-between-center padding-left-8px">
            <div className="font-17px font-600">{title}</div>

            <div
                className="padding-x-8px padding-y-6px brs-4px text-blue cursor-pointer hv-bg-blur"
                onClick={toggleMangeList}
            >
                {manage_name}
            </div>
        </div>
    );
}

export default WatchLayoutLeftListTitle;

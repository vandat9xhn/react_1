import React from 'react';
import PropTypes from 'prop-types';

//
ActionsPreviewInfo.propTypes = {};

//
function ActionsPreviewInfo({ Icon, title, info }) {
    //
    return (
        <div className="ActionsPreviewInfo display-flex">
            {Icon}

            <div>
                <span>{title}</span> <span className="font-500">{info}</span>
            </div>
        </div>
    );
}

export default ActionsPreviewInfo;

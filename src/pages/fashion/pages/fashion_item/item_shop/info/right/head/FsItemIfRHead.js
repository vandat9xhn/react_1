import React from 'react';
import PropTypes from 'prop-types';
//
import './FsItemIfRHead.scss';

//
FsItemIfRHead.propTypes = {};

//
function FsItemIfRHead({ name, description }) {
    return (
        <div className="FsItemIfRHead">
            <h2 className="margin-0">{name}</h2><br />

            <div>
                <span className="label-field">Description: </span>

                <span>{description}</span>
            </div>
        </div>
    );
}

export default FsItemIfRHead;

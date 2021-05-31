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
            <h3 className="label-field">{name}</h3>

            <div>
                <span className="label-field">Description: </span>

                <span>{description}</span>
            </div>
        </div>
    );
}

export default FsItemIfRHead;

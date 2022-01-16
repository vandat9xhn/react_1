import React from 'react';
import PropTypes from 'prop-types';

//
DotCountNew.propTypes = {};

//
function DotCountNew({ title }) {
    //
    return (
        <span>
            <span className="inline-block padding-4px brs-50 bg-blue"></span>

            <span className="margin-left-5px">{title}</span>
        </span>
    );
}

export default DotCountNew;

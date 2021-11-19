import React from 'react';
import PropTypes from 'prop-types';

//
OverlapPicsItem.propTypes = {};

//
function OverlapPicsItem({ picture }) {
    //
    return (
        <img
            className="OverlapPicsItem wh-100 brs-50 object-fit-cover"
            src={picture}
            alt=""
        />
    );
}

export default OverlapPicsItem;

import React from 'react';
import PropTypes from 'prop-types';

//
GPMemUserPagePic.propTypes = {};

//
function GPMemUserPagePic({ picture }) {
    //
    return (
        <img
            className="brs-50 object-fit-cover"
            src={picture}
            alt=""
            width="60"
            height="60"
        />
    );
}

export default GPMemUserPagePic;

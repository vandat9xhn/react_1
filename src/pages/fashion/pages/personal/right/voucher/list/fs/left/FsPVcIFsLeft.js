import React from 'react';
import PropTypes from 'prop-types';

//
FsPVcIFsLeft.propTypes = {};

//
function FsPVcIFsLeft({ img, img_text }) {
    //
    return (
        <div className="FsPVcIFsLeft display-flex-center flex-col h-100per padding-10px bg-fashion-red text-white">
            <img src={img} alt="" width="56" height="56" />

            <div>{img_text}</div>
        </div>
    );
}

export default FsPVcIFsLeft;

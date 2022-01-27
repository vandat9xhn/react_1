import React from 'react';
import PropTypes from 'prop-types';

//
ZoomPostCommonLeftImg.propTypes = {};

//
function ZoomPostCommonLeftImg({ img }) {
    //
    return (
        <div className="ZoomPostCommonLeftImg display-flex-center wh-100 padding-bottom-15px">
            <img
                className="max-w-100per max-h-100per min-w-50per object-fit-cover"
                src={img}
                alt=""
            />
        </div>
    );
}

export default ZoomPostCommonLeftImg;

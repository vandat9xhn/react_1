import React from 'react';
import PropTypes from 'prop-types';

//
FashionIsLike.propTypes = {};

//
function FashionIsLike({ is_like, class_text }) {
    //
    return is_like ? (
        <div className="bg-fashion-head">
            <span className={`text-white label-field ${class_text}`}>
                Yêu thích
            </span>
        </div>
    ) : null;
}

export default FashionIsLike;

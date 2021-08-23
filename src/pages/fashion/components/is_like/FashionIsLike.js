import React from 'react';
import PropTypes from 'prop-types';

//
FashionIsLike.propTypes = {
    is_like: PropTypes.bool,
    is_plus: PropTypes.bool,
    class_text: PropTypes.string,
};

FashionIsLike.defaultProps = {
    is_like: false,
    is_plus: false,
    class_text: '',
};

//
function FashionIsLike({ is_like, is_plus, class_text }) {
    //
    return is_like ? (
        <div className="padding-x-4px bg-fashion-red text-nowrap">
            <span className={`text-white label-field ${class_text}`}>
                Yêu thích {is_plus ? '+' : ''}
            </span>
        </div>
    ) : null;
}

export default FashionIsLike;

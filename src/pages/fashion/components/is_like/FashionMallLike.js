import React from 'react';
import PropTypes from 'prop-types';
//
import './FashionMallLike.scss';

//
FashionMallLike.propTypes = {
    title_like: PropTypes.string,
    title_mall: PropTypes.string,

    is_like: PropTypes.bool,
    is_mall: PropTypes.bool,
    is_plus: PropTypes.bool,
    use_side: PropTypes.bool,
    class_text: PropTypes.string,
};

FashionMallLike.defaultProps = {
    title_like: 'Yêu thích',
    title_mall: 'Mall',

    is_like: false,
    is_mall: false,
    is_plus: false,
    use_side: true,
    class_text: '',
};

//
function FashionMallLike({
    title_like,
    title_mall,

    is_like,
    is_mall,
    is_plus,
    
    class_text,
    use_side,
}) {
    //
    if (!is_like && !is_mall) {
        return null;
    }

    //
    if (is_mall) {
        return (
            <div className="FashionMallLike pos-rel">
                {use_side ? (
                    <div className="FashionMallLike_side FashionMallLike_side-mall pos-abs top-0 right-100per h-100per bg-fashion-mall"></div>
                ) : null}

                <div
                    className={`pos-rel  padding-x-4px bg-fashion-mall text-nowrap text-white font-500 ${class_text}`}
                >
                    {title_mall}
                </div>
            </div>
        );
    }

    //
    if (is_like) {
        return (
            <div className="FashionMallLike pos-rel">
                {use_side ? (
                    <div className="FashionMallLike_side FashionMallLike_side-like pos-abs top-0 right-100per h-100per bg-fashion-red"></div>
                ) : null}

                <div
                    className={`pos-rel padding-x-4px bg-fashion-red text-nowrap text-white font-500 ${class_text}`}
                >
                    {title_like} {is_plus ? '+' : ''}
                </div>
            </div>
        );
    }
}

export default FashionMallLike;

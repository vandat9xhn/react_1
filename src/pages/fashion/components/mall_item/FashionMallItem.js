import React from 'react';
import PropTypes from 'prop-types';
//
import './FashionMallItem.scss';
import { Link } from 'react-router-dom';
import { IS_MOBILE } from '../../../../_constant/Constant';

//
FashionMallItem.propTypes = {
    link_to: PropTypes.string,
    image: PropTypes.string,
    promo_text: PropTypes.string,
};

//
function FashionMallItem({ link_to, image, promo_text }) {
    //
    return (
        <Link to={link_to}>
            <div className="FashionMallItem wh-100 pos-rel">
                <img className="wh-100 object-fit-cover" src={image} alt="" />

                <div className="FashionMallItem_foot pos-abs left-0 bottom-0 w-100per">
                    <div className="FashionMallItem_foot_contain text-align-center text-nowrap">
                        <span
                            className={`color-fashion-mall ${
                                IS_MOBILE ? 'font-15px' : 'font-18px'
                            }`}
                        >
                            {promo_text}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FashionMallItem;

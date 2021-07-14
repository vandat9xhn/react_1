import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import image_loading from '../../../../../image/image_loading.svg';
//
import './ShopCartBuy.scss';

//
ShopCartBuy.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    picture: PropTypes.string,
};

ShopCartBuy.defaultProps = {
    id: 0,
    name: '',
    picture: image_loading,
};

//
function ShopCartBuy({ id, name, picture }) {
    //
    return (
        <div className="ShopCartBuy">
            <div className="display-flex">
                <Link
                    className="ShopCartBuy_link normal-text label-field hv-cl-blue"
                    to={`/fashion/shop/${id}`}
                >
                    <div className="padding-8px">
                        <div className="display-flex align-items-center">
                            <div className="ShopCartBuy__picture brs-50">
                                <img
                                    src={picture}
                                    alt=""
                                    width="40"
                                    height="40"
                                />
                            </div>

                            <h3 className="margin-0">{name}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ShopCartBuy;

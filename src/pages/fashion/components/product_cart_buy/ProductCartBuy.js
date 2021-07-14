import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { formatNum } from '../../../../_some_function/FormatNum';
//
import image_loading from '../../../../../image/image_loading.svg';
import './ProductCartBuy.scss';
import './ProductCartBuyRes.scss';

//
ProductCartBuy.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string,
        vid_pics: PropTypes.arrayOf(
            PropTypes.shape({
                vid_pic: PropTypes.string,
            })
        ),
        new_price: PropTypes.number,
    }),
    quantity: PropTypes.number,
    children: PropTypes.element,
};

ProductCartBuy.defaultProps = {
    product: {
        id: 0,
        name: '',
        vid_pics: [
            {
                vid_pic: image_loading,
            },
        ],
        new_price: 0,
    },
    quantity: 0,
    children: <div></div>,
};

//
function ProductCartBuy({ product, quantity, children }) {
    //
    const { id, name, vid_pics, new_price } = product;

    //
    return (
        <div className="ProductCartBuy">
            <div className="ProductCartBuy_row display-flex-center">
                <div className="ProductCartBuy_product display-flex">
                    <Link
                        className={id <= 0 ? 'pointer-events-none' : ''}
                        to={`/fashion:${id}`}
                        title={product.name}
                    >
                        <div className="display-flex align-items-center">
                            <div>
                                <img
                                    src={vid_pics[0].vid_pic}
                                    alt=""
                                    width="50"
                                    height="50"
                                />
                            </div>
                            <div className="ProductCartBuy_product-name">
                                {name}
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="ProductCartBuy_calculate">
                    <div className="ProductCartBuy_calculate-row display-flex align-items-center">
                        <div className="ProductCartBuy_price">
                            {formatNum(new_price)}
                        </div>

                        {children}

                        <div className="ProductCartBuy_total label-field">
                            {formatNum(new_price * quantity)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCartBuy;

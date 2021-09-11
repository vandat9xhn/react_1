import React from 'react';
import PropTypes from 'prop-types';
//
import FashionFaceItem from '../../../../../components/face_item/_main/FashionFaceItem';
//
import './FsSProductsListMb.scss';

//
FsSProductsListMb.propTypes = {};

//
function FsSProductsListMb({ product_arr }) {
    //
    return (
        <div className="FsSProductsListMb">
            <ul className="FsSProductsListMb_row display-flex space-between flex-wrap list-none">
                {product_arr.map((item, ix) => (
                    <li key={`${ix}`} className="FsSProductsListMb_item">
                        <FashionFaceItem
                            id={item.id}
                            img={item.img}
                            is_like={item.is_like}
                            is_plus={item.is_plus}
                            is_mall={item.is_mall}
                            flash_img={item.flash_img}
                            discount={item.discount}
                            name={item.name}
                            rate_avg={item.rate_avg}
                            sold={item.sold}
                            //
                            shop_deals={item.shop_deals}
                            shop_discount={item.shop_discount}
                            // address={item.address}
                            //
                            old_price={item.old_price}
                            new_price={item.new_price}
                            old_price_max={item.old_price_max}
                            new_price_max={item.new_price_max}
                            // 
                            show_address={false}
                            use_same={false}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FsSProductsListMb;

import React from 'react';
import PropTypes from 'prop-types';
//
import FashionFaceItem from '../../../../components/face_item/_main/FashionFaceItem';
//
import './ShopProducts.scss';

//
ShopProducts.propTypes = {};

//
function ShopProducts({ products }) {
    //
    return (
        <div className="ShopProducts margin-auto brs-5px-md bg-primary">
            <div className="display-flex justify-content-center flex-wrap">
                {products.map((item, ix) => (
                    <div key={`ShopProducts_${ix}`}>
                        <FashionFaceItem
                            id={item.id}
                            img={item.img}
                            is_like={item.is_like}is_plus={item.is_plus}is_mall={item.is_mall}
                            flash_img={item.flash_img}
                            discount={item.discount}
                            name={item.name}
                            rate_avg={item.rate_avg}
                            sold={item.sold}
                            //
                            shop_deals={item.shop_deals}
                            shop_discount={item.shop_discount}
                            address={item.address}
                            //
                            old_price={item.old_price}
                            new_price={item.new_price}
                            old_price_max={item.old_price_max}
                            new_price_max={item.new_price_max}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopProducts;

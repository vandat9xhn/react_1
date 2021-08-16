import React from 'react';
import PropTypes from 'prop-types';
//
import FashionFaceItem from '../../face_item/_main/FashionFaceItem';

//
RowProductMobile.propTypes = {};

//
function RowProductMobile({ products }) {
    //
    return (
        <div className="max-w-100per overflow-x-auto snap-x-mandatory">
            <ul className="RowProduct_row list-none display-flex">
                {products.map((item, ix) => (
                    <li
                        key={`${item.id || `RowProductMobile_${ix}`}`}
                        className="row-product-item snap-align-end"
                    >
                        <FashionFaceItem
                            use_same={false}
                            id={item.id}
                            img={item.vid_pics[0].vid_pic}
                            mall_like={item.mall_like ? '' : ''}
                            flash_img={item.flash_img}
                            discount={item.discount}
                            name={item.name}
                            shop_discount={item.shop_discount}
                            tag_arr={item.tag_arr}
                            old_price={item.old_price}
                            new_price={item.new_price}
                            rate_avg={item.rate_avg}
                            sold={item.sold}
                            address={item.address}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RowProductMobile;

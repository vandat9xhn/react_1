import React from 'react';
import PropTypes from 'prop-types';
//
import FashionFaceItem from '../../face_item/_main/FashionFaceItem';
import FashionSeeMoreLastRow from '../../see_more/last_row/FashionSeeMoreLastRow';

//
RowProductMobile.propTypes = {};

//
function RowProductMobile({
    products,
    link_to_more,
    title_more,
    class_color_more,
}) {
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

                <li className="row-product-item snap-align-end">
                    <FashionSeeMoreLastRow
                        link_to={link_to_more}
                        title={title_more}
                        class_color={class_color_more}
                    />
                </li>
            </ul>
        </div>
    );
}

export default RowProductMobile;

import React from 'react';
import PropTypes from 'prop-types';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import FashionFaceItem from '../../face_item/_main/FashionFaceItem';
import FashionSeeMoreLastRow from '../../see_more/last_row/FashionSeeMoreLastRow';

//
RowProductMobile.propTypes = {};

//
function RowProductMobile({
    products,
    ref_scroll_elm,
    ref_fake_elm_end,

    has_fetched,
    item_props = {},

    use_more,
    link_to_more,
    title_more,
    class_color_more,
}) {
    //
    return (
        <div
            ref={ref_scroll_elm}
            className="max-w-100per overflow-x-auto snap-x-mandatory"
        >
            <ul className="RowProduct_row list-none display-flex">
                {products.map((item, ix) => (
                    <li
                        key={`${item.id || ix}`}
                        className="row-product-item snap-align-start"
                    >
                        <VirtualScroll ref_root={ref_scroll_elm}>
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
                                address={item.address}
                                //
                                old_price={item.old_price}
                                new_price={item.new_price}
                                old_price_max={item.old_price_max}
                                new_price_max={item.new_price_max}
                                //
                                use_same={false}
                                {...item_props}
                            />
                        </VirtualScroll>
                    </li>
                ))}

                <li ref={ref_fake_elm_end} className="padding-1px"></li>

                {use_more && has_fetched ? (
                    <li className="row-product-item snap-align-end">
                        <FashionSeeMoreLastRow
                            link_to={link_to_more}
                            title={title_more}
                            class_color={class_color_more}
                        />
                    </li>
                ) : null}
            </ul>
        </div>
    );
}

export default RowProductMobile;

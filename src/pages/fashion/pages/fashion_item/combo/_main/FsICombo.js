import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { handle_API_Product_L } from '../../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
//
import FashionFaceItem from '../../../../components/face_item/_main/FashionFaceItem';
import FsShopDealLabel from '../../../../components/shop_deal_label/FsShopDealLabel';
import FashionSeeMoreOnTitle from '../../../../components/see_more/on_title/FashionSeeMoreOnTitle';

//
FsICombo.propTypes = {};

//
function FsICombo(props) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Product_L(c_count, 'shop_deal', {
                product_id: item_info.id,
            }),
    });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    return (
        <div className="FsICombo">
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <h2 className="font-18px text-secondary">
                        Combo khuyến mãi
                    </h2>

                    <div className="margin-left-5px">
                        <FsShopDealLabel
                            label={item_info.bundle_deal_info.label}
                        />
                    </div>
                </div>

                <div>
                    <FashionSeeMoreOnTitle
                        link_to={`/fashion/combo?id=${item_info.bundle_deal_info.id}`}
                        title="Xem thêm"
                    />
                </div>
            </div>

            <div className="FsICombo_contain">
                <ul className="FsIShopSelling_row display-flex list-none">
                    {data_arr.slice(0, 6).map((item) => (
                        <li key={item.id} className="FsICombo_item">
                            <FashionFaceItem
                                id={item.id}
                                mall_like={item.mall_like ? '' : ''}
                                img={item.img}
                                flash_img={item.flash_img}
                                discount={item.discount}
                                name={item.name}
                                // rate_avg={item.rate_avg}
                                // sold={item.sold}
                                //
                                shop_deals={[]}
                                // shop_discount={item.shop_discount}
                                // address={item.address}
                                //
                                old_price={item.old_price}
                                new_price={item.new_price}
                                old_price_max={item.old_price_max}
                                new_price_max={item.new_price_max}
                                //
                                use_same={false}
                                show_address={false}
                                show_heart_rate={false}
                                show_sold={false}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FsICombo;

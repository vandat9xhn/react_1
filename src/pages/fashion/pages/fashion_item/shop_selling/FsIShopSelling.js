import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../_context/fashion/item/context_fashion_item';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import FashionFaceItem from '../../../components/face_item/_main/FashionFaceItem';

//
FsIShopSelling.propTypes = {};

//
function FsIShopSelling(props) {
    //
    const { shop_info } = useContext(context_fashion_item);

    //
    const { data_state } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Product_L(c_count, 'shop_selling', {
                shop_id: shop_info.id,
            }),
    });

    const { data_arr } = data_state;

    //
    return (
        <div className="FsIShopSelling">
            <h2 className="font-14px text-third">Top Sản Phẩm Bán Chạy</h2>

            <div className="FsIShopSelling_contain">
                <ul className="FsIShopSelling_row list-none">
                    {data_arr.map((item) => (
                        <li key={item.id} className="FsIShopSelling_item">
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

export default FsIShopSelling;

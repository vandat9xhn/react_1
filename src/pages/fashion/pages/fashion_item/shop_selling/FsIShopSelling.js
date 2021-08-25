import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../_context/fashion/item/context_fashion_item';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import FashionFaceItem from '../../../components/face_item/_main/FashionFaceItem';
//
import './FsIShopSelling.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsIShopSelling.propTypes = {};

//
function FsIShopSelling(props) {
    //
    const { shop_info } = useContext(context_fashion_item);

    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Product_L(c_count, 'shop_selling', {
                shop_id: shop_info.id,
            }),
    });

    const { data_arr } = data_state;

    //
    const ref_main_el = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_el.current,
            callback: getData_API,
        });
    }, []);

    //
    return (
        <div
            ref={ref_main_el}
            className="FsIShopSelling padding-y-8px bg-primary"
        >
            <h2 className="text-upper font-14px label-field text-third padding-8px">
                Top Sản Phẩm Bán Chạy
            </h2>

            <div
                className={`FsIShopSelling_contain ${
                    IS_MOBILE ? 'overflow-x-auto' : ''
                }`}
            >
                <ul
                    className={`FsIShopSelling_row list-none ${
                        IS_MOBILE ? 'display-flex' : ''
                    }`}
                >
                    {data_arr.slice(0, 5).map((item) => (
                        <li
                            key={item.id}
                            className="FsIShopSelling_item flex-shrink-0"
                        >
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
                                old_price={
                                    IS_MOBILE ? undefined : item.old_price
                                }
                                new_price={item.new_price}
                                // old_price_max={item.old_price_max}
                                // new_price_max={item.new_price_max}
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

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_Product_L } from '../../../../../_handle_api/fashion/FashionHandleAPI';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
//
import FashionFaceItem from '../../../components/face_item/_main/FashionFaceItem';
//
import './FashionItemMayLike.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FashionItemMayLike.propTypes = {};

//
function FashionItemMayLike({ id }) {
    //
    const ref_main_elm = useRef(true);
    const ref_fake_elm_end = useRef(true);

    //
    const { data_state, observerShowMore } = useObserverShowMore({
        handle_API_L: (c_count) => handle_API_Product_L(c_count, 'may_like'),
    });

    //
    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            rootMargin: '0px 0px 500px 0px',
            way_scroll: 'to_bottom',
            margin: 500,
        });
    }, []);

    //
    return (
        <div ref={ref_main_elm}>
            <h2
                className={`label-field padding-8px text-secondary ${
                    IS_MOBILE ? 'font-14px' : 'font-16px'
                }`}
            >
                CÓ THỂ BẠN CŨNG THÍCH
            </h2>

            <div>
                <ul className="display-flex justify-content-center flex-wrap margin-auto list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={`${item.id}`}
                            className="FashionItemMayLike_item padding-5px"
                        >
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
                                // old_price={item.old_price}
                                new_price={item.new_price}
                                // old_price_max={item.old_price_max}
                                new_price_max={item.new_price_max}
                            />
                        </li>
                    ))}
                </ul>

                <div ref={ref_fake_elm_end} className="padding-1px"></div>
            </div>

            {has_fetched ? null : <div className="h-100vh"></div>}
        </div>
    );
}

export default FashionItemMayLike;

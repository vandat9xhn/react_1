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
            <h2 className="font-16px label-field padding-8px text-secondary">
                CÓ THỂ BẠN CŨNG THÍCH
            </h2>

            <div>
                <ul className="display-flex justify-content-center flex-wrap margin-auto  list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={`${item.id}`}
                            className="FashionItemMayLike_item padding-5px"
                        >
                            <FashionFaceItem
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

                <div ref={ref_fake_elm_end} className="padding-1px"></div>
            </div>

            {has_fetched ? null : <div className="h-100vh"></div>}
        </div>
    );
}

export default FashionItemMayLike;

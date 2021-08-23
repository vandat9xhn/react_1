import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { initial_fs_item_gift_obj } from '../../../../../../_initial/fashion/FashionInitial';
//
import FashionSeeMoreOnTitle from '../../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FsIGiftItem from '../item/FsIGiftItem';
//
import './FsIGift.scss';

//
FsIGift.propTypes = {};

//
function FsIGift(props) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    const [state_obj, setStateObj] = useState({
        gift_obj: initial_fs_item_gift_obj(),
        has_fetched: false,
    });

    const { gift_obj, has_fetched } = state_obj;

    const {
        id: shop_gift_id,
        min_spend,
        mains,
        gifts,
        gift_count,
        main_count,
    } = gift_obj;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo({ elm: ref_main_elm.current, callback: getData_API });
    }, []);

    //
    async function getData_API() {
        const data = await handle_API_FsItemGift_R({
            product_id: item_info.id,
        });

        setStateObj({
            gift_obj: data,
            has_fetched: true,
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="FsIGift">
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="FsIGift_row">
                    <div className="flex-between-center">
                        <h2 className="font-18px text-secondary">
                            Mua ₫{min_spend} để nhận {gift_count} quà tặng
                        </h2>

                        <div>
                            <FashionSeeMoreOnTitle
                                link_to={`/fashion/gift?id=${shop_gift_id}`}
                                title="Xem Tất Cả"
                            />
                        </div>
                    </div>

                    <div className="FsIGift_foot">
                        <div className="display-flex align-items-center">
                            {mains
                                .slice(0, main_count >= 3 ? 1 : 2)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="FsIGift_foot_item"
                                    >
                                        <FsIGiftItem
                                            img={item.image}
                                            name={item.name}
                                        />
                                    </div>
                                ))}

                            {main_count >= 3 ? (
                                <div
                                    className="FsIGift_foot_item"
                                    data-count={main_count - 1}
                                >
                                    <img
                                        src={mains[1].image}
                                        alt=""
                                        width="160"
                                        height="160"
                                    />
                                </div>
                            ) : null}

                            <div>+</div>

                            {gifts
                                .slice(0, main_count >= 5 ? 3 : 4)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="FsIGift_foot_item"
                                    >
                                        <FsIGiftItem
                                            img={item.image}
                                            name={item.name}
                                            is_gift={true}
                                        />
                                    </div>
                                ))}

                            {gift_count >= 5 ? (
                                <div
                                    className="FsIGift_foot_item"
                                    data-count={gift_count - 1}
                                >
                                    <img
                                        src={gifts[1].image}
                                        alt=""
                                        width="160"
                                        height="160"
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            {has_fetched ? null : <div className="FsIGift_not_fetched"></div>}
        </div>
    );
}

export default FsIGift;

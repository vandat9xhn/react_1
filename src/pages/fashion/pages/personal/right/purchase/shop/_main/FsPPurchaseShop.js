import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import FsPPurShopHead from '../head/_main/FsPPurShopHead';
import FsPPurShopTotal from '../total/FsPPurShopTotal';
import FsPPurHotDeal from '../group/hot_deal/FsPPurHotDeal';
import FsPPurGift from '../group/gift/FsPPurGift';
import FsPPurCombo from '../group/combo/FsPPurCombo';
import FsPPurItemSingle from '../group/item_single/FsPPurItemSingle';
//
import './FsPPurchaseShop.scss';

//
FsPPurchaseShop.propTypes = {};

//
function FsPPurchaseShop({
    order_id,
    shop_info,
    group_arr,
    transport_obj,
    total_price,
}) {
    //
    const { id, name, is_like, is_mall, is_plus } = shop_info;
    const { transport_info, transport_status } = transport_obj;

    //
    return (
        <div className="FsPPurchaseShop bg-primary">
            <div className="FsPPurchaseShop_head">
                <FsPPurShopHead
                    shop_id={id}
                    shop_name={name}
                    is_like={is_like}
                    is_mall={is_mall}
                    is_plus={is_plus}
                    transport_info={transport_info}
                    transport_status={transport_status}
                />
            </div>

            <div>
                <Link
                    className="text-primary-08"
                    to={`/fashion/user/purchase/order/${order_id}`}
                >
                    {group_arr.map((group_obj, group_ix) => (
                        <div
                            key={group_ix}
                            className={`FsPPurchaseShop_group_item ${
                                !group_obj.type ? '' : 'border-bottom-blur'
                            }`}
                        >
                            {group_obj.type == 'hot_deal' ? (
                                <FsPPurHotDeal
                                    item_info_arr={group_obj.item_info_arr}
                                />
                            ) : group_obj.type == 'gift' ? (
                                <FsPPurGift
                                    main_items={group_obj.main_items}
                                    gift_items={group_obj.gift_items}
                                />
                            ) : group_obj.type == 'combo' ? (
                                <FsPPurCombo
                                    min_count={group_obj.min_count}
                                    saved_price={group_obj.saved_price}
                                    total_price={group_obj.total_price}
                                    item_info_arr={group_obj.item_info_arr}
                                />
                            ) : (
                                group_obj.item_info_arr.map((item_info, ix) => (
                                    <div
                                        key={item_info.id}
                                        className="padding-y-12px border-bottom-blur"
                                    >
                                        <FsPPurItemSingle
                                            name={item_info.name}
                                            img={item_info.img}
                                            model_name={item_info.model_name}
                                            quantity={item_info.quantity}
                                            old_price={item_info.old_price}
                                            new_price={item_info.new_price}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </Link>
            </div>

            <div className="FsPPurchaseShop_total">
                <FsPPurShopTotal total_price={total_price} />
            </div>
        </div>
    );
}

export default FsPPurchaseShop;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import FsPPurHotDeal from '../../../purchase/shop/group/hot_deal/FsPPurHotDeal';
import FsPPurCombo from '../../../purchase/shop/group/combo/FsPPurCombo';
import FsPPurItemSingle from '../../../purchase/shop/group/item_single/FsPPurItemSingle';
import FsPPurGift from '../../../purchase/shop/group/gift/FsPPurGift';
//
import FsPPOrderShopHead from '../head/FsPPOrderShopHead';
//
import './FsPPurOrderShop.scss';
import { Link } from 'react-router-dom';

//
FsPPurOrderShop.propTypes = {};

//
function FsPPurOrderShop({ shop_info, group_arr }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    const { id, name, is_like, is_mall, is_plus } = shop_info;

    //
    function openChat() {
        openRoomChat(id);
    }

    //
    return (
        <div className="FsPPurOrderShop bg-fa">
            <div className="padding-bottom-10px border-bottom-blur">
                <FsPPOrderShopHead
                    shop_id={id}
                    shop_name={name}
                    is_like={is_like}
                    is_mall={is_mall}
                    is_plus={is_plus}
                    openChat={openChat}
                />
            </div>

            <div>
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
                                has_link={true}
                            />
                        ) : group_obj.type == 'gift' ? (
                            <FsPPurGift
                                main_items={group_obj.main_items}
                                gift_items={group_obj.gift_items}
                                has_link={true}
                            />
                        ) : group_obj.type == 'combo' ? (
                            <FsPPurCombo
                                min_count={group_obj.min_count}
                                saved_price={group_obj.saved_price}
                                total_price={group_obj.total_price}
                                item_info_arr={group_obj.item_info_arr}
                                has_link={true}
                            />
                        ) : (
                            group_obj.item_info_arr.map((item_info, ix) => (
                                <div
                                    key={item_info.id}
                                    className="padding-y-12px border-bottom-blur"
                                >
                                    <Link
                                        to={`/fashion:${item_info.id}`}
                                        className="color-inherit"
                                    >
                                        <FsPPurItemSingle
                                            name={item_info.name}
                                            img={item_info.img}
                                            model_name={item_info.model_name}
                                            quantity={item_info.quantity}
                                            old_price={item_info.old_price}
                                            new_price={item_info.new_price}
                                        />
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPPurOrderShop;

import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { initial_fs_item_hot_deal_arr } from '../../../../../../_initial/fashion/FashionInitial';
//
import { handle_API_FsProductDetail_L } from '../../../../../../_handle_api/fashion/FashionHandleAPI';
//
import FashionSeeMoreOnTitle from '../../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FsHotDealItem from '../item/_main/FsHotDealItem';
import FsIHotDealCal from '../calculate/FsIHotDealCal';
//
import './FsIHotDeal.scss';

//
FsIHotDeal.propTypes = {};

//
function FsIHotDeal(props) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    const [state_obj, setStateObj] = useState({
        hot_deal_arr: initial_fs_item_hot_deal_arr(),
        has_fetched: false,
        open_model_ix: -1,

        total_price: 0,
        save_price: 0,

        actions: [
            {
                model_ix: 0,
                checked: true,
                total_add: 1,
            },
        ],
    });

    const {
        hot_deal_arr,
        actions,

        total_price,
        save_price,

        open_model_ix,
        has_fetched,
    } = state_obj;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo({ elm: ref_main_elm.current, callback: getData_API });
    }, []);

    /* ------- API ------ */

    //
    async function getData_API() {
        const { data } = await handle_API_FsProductDetail_L({
            type_request: 'hot_deal',
            params: { product_id: item_info.id },
        });

        const new_data = data.slice(0, IS_MOBILE ? 2 : 4);
        const new_actions = [...actions];

        for (let i = 0; i < new_data.length; i++) {
            new_actions.push({
                model_ix: 0,
                checked: true,
                total_add: 1,
            });
        }

        const new_hot_deal_arr = [item_info, ...new_data];
        const [new_total_price, new_save_price] = calculatePrice(
            new_actions,
            new_hot_deal_arr
        );

        setStateObj({
            ...state_obj,
            hot_deal_arr: new_hot_deal_arr,
            actions: new_actions,
            total_price: new_total_price,
            save_price: new_save_price,
            has_fetched: true,
        });
    }

    /* ----------- */

    function calculatePrice(
        new_actions = [...actions],
        new_hot_deal_arr = [...hot_deal_arr]
    ) {
        const new_total_price = new_actions.reduce(
            (a, b, ix) =>
                a +
                (b.checked
                    ? b.total_add *
                      (new_hot_deal_arr[ix].models.length
                          ? new_hot_deal_arr[ix].models[b.model_ix].new_price
                          : new_hot_deal_arr[ix].new_price)
                    : 0),
            0
        );

        const old_total_price = new_actions.reduce(
            (a, b, ix) =>
                a +
                (b.checked
                    ? b.total_add *
                      (new_hot_deal_arr[ix].models.length
                          ? new_hot_deal_arr[ix].models[b.model_ix].old_price
                          : new_hot_deal_arr[ix].old_price)
                    : 0),
            0
        );

        return [new_total_price, old_total_price - new_total_price];
    }

    /* ----------- */

    //
    function handleChecked(ix) {
        if (ix == 0) {
            return;
        }

        const new_actions = [...state_obj.actions];
        new_actions[ix].checked = !new_actions[ix].checked;

        const [new_total_price, new_save_price] = calculatePrice(new_actions);

        setStateObj({
            ...state_obj,
            actions: new_actions,
            total_price: new_total_price,
            save_price: new_save_price,
        });
    }

    //
    function toggleChangeModel(ix) {
        setStateObj({
            ...state_obj,
            open_model_ix: ix == open_model_ix ? -1 : ix,
        });
    }

    //
    function handleChangeModel(ix, new_model_ix, total_add = 1) {
        const new_actions = [...state_obj.actions];

        new_actions[ix].total_add = total_add;
        new_actions[ix].model_ix = new_model_ix;

        const [new_total_price, new_save_price] = calculatePrice(new_actions);

        setStateObj({
            ...state_obj,
            actions: new_actions,
            total_price: new_total_price,
            save_price: new_save_price,
            open_model_ix: -1,
        });
    }

    //
    function handleAddCart() {
        console.log(state_obj);
    }

    //
    return (
        <div ref={ref_main_elm} className="FsIHotDeal bg-primary">
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="FsIHotDeal_head flex-between-center">
                    <h2 className="fashion-head-font label-field">
                        Mua thêm deal sốc
                    </h2>

                    <div>
                        <FashionSeeMoreOnTitle
                            link_to={`/fashion/hot_deal?id=${item_info.id}`}
                            title="Xem Thêm"
                        />
                    </div>
                </div>

                <div className={`${IS_MOBILE ? 'overflow-x-auto' : ''}`}>
                    <div className="flex-between-center flex-wrap">
                        <div className="display-flex flex-wrap">
                            {hot_deal_arr.map((item, ix) => {
                                const obj = item.models.length
                                    ? item.models[actions[ix].model_ix]
                                    : item;

                                return (
                                    <div
                                        key={item.id}
                                        className={`FsIHotDeal_item ${
                                            ix == 0
                                                ? 'FsIHotDeal_item-first'
                                                : ''
                                        }`}
                                    >
                                        <FsHotDealItem
                                            ix={ix}
                                            id={item.id}
                                            img={item.vid_pics[0]}
                                            flash_img={item.flash_img}
                                            name={item.name}
                                            models={item.models}
                                            discount={item.discount}
                                            quantity={item.quantity}
                                            tier_variations={
                                                item.tier_variations
                                            }
                                            //
                                            old_price={obj.old_price}
                                            new_price={obj.new_price}
                                            // tier_ix_arr={obj.tier_ix_arr || []}
                                            model_name={obj.name}
                                            //
                                            use_checked={ix != 0}
                                            open_model={ix == open_model_ix}
                                            model_ix={actions[ix].model_ix}
                                            checked={actions[ix].checked}
                                            total_add={actions[ix].total_add}
                                            //
                                            handleChecked={handleChecked}
                                            toggleChangeModel={
                                                toggleChangeModel
                                            }
                                            handleChangeModel={
                                                handleChangeModel
                                            }
                                        />
                                    </div>
                                );
                            })}

                            <div className="FsIHotDeal_item_plus display-flex-center font-20px text-secondary">
                                +
                            </div>
                        </div>

                        <div className="FsIHotDeal_item_cal">
                            <FsIHotDealCal
                                total_price={total_price}
                                save_price={save_price}
                                handleAddCart={handleAddCart}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {has_fetched ? null : (
                <div className="FsIHotDeal_not_fetched"></div>
            )}
        </div>
    );
}

export default FsIHotDeal;

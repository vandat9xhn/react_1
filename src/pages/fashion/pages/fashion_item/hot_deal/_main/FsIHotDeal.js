import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { initial_fs_item_hot_deal_arr } from '../../../../../../_initial/fashion/FashionInitial';
//
import FashionSeeMoreOnTitle from '../../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FsHotDealItem from '../item/_main/FsHotDealItem';
import observeToDo from '../../../../../../_some_function/observerToDo';

//
FsIHotDeal.propTypes = {};

//
function FsIHotDeal(props) {
    //
    const {
        item_info,
        model_ix,
        setStateObj: setStateObjMain,
    } = useContext(context_fashion_item);

    //
    const [state_obj, setStateObj] = useState({
        hot_deal_arr: initial_fs_item_hot_deal_arr(),
        has_fetched: false,
        open_model_main: false,
    });

    const { hot_deal_arr, has_fetched, open_model_main } = state_obj;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo({ elm: ref_main_elm.current, callback: getData_API });
    }, []);

    /* ------- API ------ */

    //
    async function getData_API() {
        const { data } = await handle_API_FsItemHotDeal_L({
            product_id: item_info.id,
        });

        data.forEach((item) => {
            item.checked = true;
            item.model_ix = 0;
            item.open_model = false;
        });

        setStateObj({
            hot_deal_arr: data,
            has_fetched: true,
        });
    }

    /* ----------- */

    //
    function handleChecked(ix) {
        const new_hot_deal_arr = { ...state_obj.hot_deal_arr };
        new_hot_deal_arr[ix].checked = !new_hot_deal_arr[ix].checked;

        setStateObj({
            ...state_obj,
            hot_deal_arr: new_hot_deal_arr,
        });
    }

    //
    function toggleChangeModelMain() {
        setStateObj({
            ...state_obj,
            open_model_main: !open_model_main,
        });
    }

    //
    function toggleChangeModel(ix) {
        const new_hot_deal_arr = { ...state_obj.hot_deal_arr };
        new_hot_deal_arr[ix].open_model = !new_hot_deal_arr[ix].open_model;

        setStateObj({
            ...state_obj,
            hot_deal_arr: new_hot_deal_arr,
        });
    }

    //
    function handleChangeModelMain(new_model_ix) {
        setStateObjMain((state_obj_main) => ({
            ...state_obj_main,
            model_ix: new_model_ix,
        }));
    }

    //
    function handleChangeModel(ix, new_tier_v_ix_arr) {
        const new_hot_deal_arr = { ...state_obj.hot_deal_arr };

        new_hot_deal_arr[ix].open_model = false;
        new_hot_deal_arr[ix].model_ix = new_hot_deal_arr[ix].models.findIndex(
            (item) => item.tier_ix_arr.join(',') == new_tier_v_ix_arr.join(',')
        );

        setStateObj({
            ...state_obj,
            hot_deal_arr: new_hot_deal_arr,
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="FsIHotDeal">
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="FsIHotDeal_head flex-between-center">
                    <h2 className="font-18px text-secondary label-field">
                        Mua thêm deal sốc
                    </h2>

                    <div>
                        <FashionSeeMoreOnTitle
                            link_to={`/fashion/hot_deal?id=${item_info.id}`}
                            title="Xem Thêm"
                        />
                    </div>
                </div>

                <div className="flex-between-center">
                    <div className="display-flex align-items-center">
                        <div>
                            <FsHotDealItem
                                img={item_info.vid_pics[0]}
                                flash_img={item_info.flash_img}
                                name={item_info.name}
                                model_name={
                                    item_info.models.length
                                        ? item_info.models[
                                              model_ix == -1 ? 0 : model_ix
                                          ].name
                                        : item_info.name
                                }
                                discount={item_info.discount}
                                quantity={item_info.quantity}
                                tier_variations={item_info.tier_variations}
                                tier_ix_arr={
                                    item_info.models.length
                                        ? item_info.models[
                                              model_ix == -1 ? 0 : model_ix
                                          ].tier_ix_arr
                                        : []
                                }
                                //
                                checked={true}
                                open_model={open_model_main}
                                use_checked={false}
                                //
                                toggleChangeModel={toggleChangeModelMain}
                                handleChangeModel={handleChangeModelMain}
                            />
                        </div>

                        <div>+</div>

                        {hot_deal_arr.map((item, ix) => (
                            <div key={item.id}>
                                <FsHotDealItem
                                    ix={ix}
                                    img={item.vid_pics[0]}
                                    flash_img={item.flash_img}
                                    name={item.name}
                                    model_name={
                                        item.models.length
                                            ? item.models[item.model_ix].name
                                            : item.name
                                    }
                                    discount={item.discount}
                                    quantity={item.quantity}
                                    tier_variations={item.tier_variations}
                                    tier_ix_arr={
                                        item.models.length
                                            ? item.models[ix].tier_ix_arr
                                            : []
                                    }
                                    //
                                    checked={item.checked}
                                    open_model={item.open_model}
                                    //
                                    handleChecked={handleChecked}
                                    toggleChangeModel={toggleChangeModel}
                                    handleChangeModel={handleChangeModel}
                                />
                            </div>
                        ))}
                    </div>

                    <div></div>
                </div>
            </div>

            {has_fetched ? null : (
                <div className="FsIHotDeal_not_fetched"></div>
            )}
        </div>
    );
}

export default FsIHotDeal;

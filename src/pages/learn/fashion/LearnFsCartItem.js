import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_fashion_item_obj } from '../../../_initial/fashion/FashionInitial';
//
import FsCartItem from '../../fashion/components/cart_item/_main/FsCartItem';
import { handle_API_FashionProduct_R } from '../../../_handle_api/fashion/FashionHandleAPI';
import { useWaitingLastAction } from '../../../_hooks/useWaitingLastAction';
import { handle_API_FashionCart_C } from '../../../_handle_api/fashion/FashionCartHandleAPI';

//
LearnFsCartItem.propTypes = {};

//
function LearnFsCartItem(props) {
    //
    const [state_obj, setStateObj] = useState({
        item_info: initial_fashion_item_obj(),

        has_fetched: false,
        open_model: false,
        model_ix: 0,
        checked: false,
        open_search: false,
    });

    const {
        item_info,
        has_fetched,

        open_model,
        model_ix,
        checked,
        open_search,
    } = state_obj;

    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 300,
        callback: updateFsCart,
    });

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    async function updateFsCart(new_total_add_cart) {
        await handle_API_FashionCart_C({
            product_model: item_info.id,
            quantity: new_total_add_cart,
            model_ix: model_ix,
        });
    }

    //
    async function getData_API() {
        const data = await handle_API_FashionProduct_R(1);

        setStateObj({
            ...state_obj,
            item_info: data,
            has_fetched: true,
            model_ix: data.models.length > 0 ? 0 : -1,
        });
    }

    //
    function handleSetCount(new_count) {
        setStateObj((state_obj) => {
            const new_item_info = { ...state_obj.item_info };

            if (model_ix >= 0) {
                new_item_info.models[model_ix].total_add_cart = new_count;
            } else {
                new_item_info.total_add_cart = new_count;
            }

            return {
                ...state_obj,
                item_info: new_item_info,
            };
        });

        handleWaitingLastAction(new_count);
    }

    //
    function handleChecked() {
        setStateObj((state_obj) => ({
            ...state_obj,
            checked: !state_obj.checked,
        }));
    }

    //
    function handleChangeType(new_model_ix) {
        setStateObj((state_obj) => ({
            ...state_obj,
            model_ix: new_model_ix,
            open_model: false,
        }));
    }

    //
    function toggleOpenType() {
        setStateObj((state_obj) => ({
            ...state_obj,
            open_model: !open_model,
        }));
    }

    //
    function closeChangeType() {
        setStateObj((state_obj) => ({
            ...state_obj,
            open_model: false,
        }));
    }

    //
    function handleDelete() {
        console.log('del');
    }

    //
    function toggleSearchSame() {
        setStateObj((state_obj) => ({
            ...state_obj,
            open_search: !state_obj.open_search,
        }));
    }

    //
    if (!has_fetched) {
        return null;
    }
    //
    return (
        <div>
            <div className="fashion-width pos-rel padding-16px bg-primary">
                <FsCartItem
                    item_info={item_info}
                    //
                    model_ix={model_ix}
                    open_model={open_model}
                    checked={checked}
                    open_search={open_search}
                    //
                    handleSetCount={handleSetCount}
                    handleChecked={handleChecked}
                    //
                    toggleOpenType={toggleOpenType}
                    handleChangeType={handleChangeType}
                    closeChangeType={closeChangeType}
                    //
                    handleDelete={handleDelete}
                    toggleSearchSame={toggleSearchSame}
                />
            </div>

            <div className="h-100vh"></div>
        </div>
    );
}

export default LearnFsCartItem;

import React from 'react';
import PropTypes from 'prop-types';
//
import FsCartItem from '../../../../../components/cart_item/_main/FsCartItem';

//
FsCSGroupItem.propTypes = {
    cart_ix_obj: PropTypes.shape({
        shop_ix: PropTypes.number,
        group_ix: PropTypes.number,
        item_ix: PropTypes.number,
    }),
    ...FsCartItem.propTypes,
};

//
function FsCSGroupItem({
    cart_ix_obj,
    group_type,

    item_info,

    model_ix,
    checked,
    open_model,
    open_search,

    handleSetCount,
    handleChecked,

    toggleOpenType,
    handleChangeType,
    closeChangeType,

    toggleSearchSame,
    handleDelete,
}) {
    // --------

    function handleCartGroupItem({ handleFunc = () => {}, params = {} }) {
        handleFunc({
            type: group_type,
            cart_ix_obj: cart_ix_obj,
            ...params,
        });
    }

    // -------

    //
    function onSetCount(new_count) {
        const new_item_info = { ...item_info };
        new_item_info.models[model_ix].total_add_cart = new_count;

        handleCartGroupItem({
            handleFunc: handleSetCount,
            params: {
                new_item_info: new_item_info,
            },
        });
    }

    //
    function onChecked() {
        // const new_item_info = { ...item_info };
        // new_item_info.checked = !new_item_info.checked;
        // console.log(new_item_info);

        handleCartGroupItem({
            handleFunc: handleChecked,
            // params: {
            //     new_item_info: new_item_info,
            // },
        });
    }

    // ---------- TYPE PRODUCT

    //
    function onToggleOpenType() {
        handleCartGroupItem({
            handleFunc: toggleOpenType,
            params: {
                new_open_model_id: item_info.id,
            },
        });
    }

    //
    function onChangeType(new_model_ix) {
        const new_item_info = { ...item_info };
        new_item_info.model_ix = new_model_ix;

        handleCartGroupItem({
            handleFunc: handleChangeType,
            params: {
                new_item_info: new_item_info,
            },
        });
    }

    //
    function onCloseChangeType() {
        handleCartGroupItem({
            handleFunc: closeChangeType,
            params: {
                new_open_model_id: item_info.id,
            },
        });
    }

    // --------- SAME + DEL

    //
    function onToggleSearchSame() {
        handleCartGroupItem({
            handleFunc: toggleSearchSame,
            params: {
                new_open_search_id: item_info.id,
            },
        });
    }

    //
    function onDelete() {
        handleCartGroupItem({
            handleFunc: handleDelete,
        });
    }

    //
    return (
        <div>
            <FsCartItem
                item_info={item_info}
                //
                model_ix={model_ix}
                checked={checked}
                open_model={open_model}
                open_search={open_search}
                //
                handleSetCount={onSetCount}
                handleChecked={onChecked}
                //
                toggleOpenType={onToggleOpenType}
                handleChangeType={onChangeType}
                closeChangeType={onCloseChangeType}
                //
                handleDelete={onDelete}
                toggleSearchSame={onToggleSearchSame}
            />
        </div>
    );
}

export default FsCSGroupItem;

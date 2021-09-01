import React from 'react';
import PropTypes from 'prop-types';
//
import FsCartItem from '../../../../../../components/cart_item/_main/FsCartItem';

//
FsCSGroupItemPc.propTypes = {
    ...FsCartItem.propTypes,
};

//
function FsCSGroupItemPc({
    item_info,

    model_ix,
    checked,
    use_check,
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
    //
    return (
        <FsCartItem
            item_info={item_info}
            //
            model_ix={model_ix}
            use_check={use_check}
            checked={checked}
            open_model={open_model}
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
    );
}

export default FsCSGroupItemPc;

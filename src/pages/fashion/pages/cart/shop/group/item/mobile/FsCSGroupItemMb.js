import React from 'react';
import PropTypes from 'prop-types';
//
import { FS_SEARCH_DEL_WIDTH } from '../../../../../../../../_constant/Constant';
// 
import { useShowHideUnder } from '../../../../../../../../_hooks/useShowHideUnder';
//
import MainAndUnder from '../../../../../../../../component/main_and_under/MainAndUnder';
//
import FsCartItem from '../../../../../../components/cart_item/_main/FsCartItem';
import FsCIDelSearchMb from '../../../../../../components/cart_item/del_search_mobile/FsCIDelSearchMb';
//
import './FsCSGroupItemMb.scss';

//
FsCSGroupItemMb.propTypes = {
    ...FsCartItem.propTypes,
};

//
function FsCSGroupItemMb({
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
    const { is_run, state_obj, handleStart } = useShowHideUnder({
        under_width: FS_SEARCH_DEL_WIDTH,
    });

    //
    return (
        <MainAndUnder
            main_elm={
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
            }
            under_elm={
                <FsCIDelSearchMb
                    item_id={item_info.id}
                    width={FS_SEARCH_DEL_WIDTH}
                    handleDelete={handleDelete}
                />
            }
            class_main="bg-primary"
            class_under="right-0 top-0"
            //
            use_touch={true}
            trans_x={state_obj.trans_x}
            no_transition={is_run.current}
            handleStart={handleStart}
        />
    );
}

export default FsCSGroupItemMb;

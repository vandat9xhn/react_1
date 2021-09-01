import React from 'react';
import PropTypes from 'prop-types';
//
import FsCartGroupHead from '../../../../../../components/cart_group_head/FsCartGroupHead';
import FsCSGroupItem from '../../item/_main/FsCSGroupItem';
//
import './FsCSGDeal.scss';

//
FsCSGDeal.propTypes = {};

//
function FsCSGDeal({
    shop_ix,
    group_ix,

    main_item_id,
    item_info_arr,

    open_search_id,
    open_model_id,

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
        <div className="FsCSGDeal">
            <div>
                <FsCartGroupHead
                    label_deal="Deal Sốc"
                    title_main="Mua kèm deal độc quyền"
                    title_more="Sửa"
                    link_to={`/fashion/hot_deal?id=${main_item_id}`}
                />
            </div>

            <div>
                {item_info_arr.map((item_info, ix) => (
                    <div
                        key={item_info.id}
                        className={`FsCSGDeal_item ${
                            ix > 0 ? 'FsCSGDeal_item-deal' : ''
                        }`}
                    >
                        <FsCSGroupItem
                            cart_ix_obj={{
                                shop_ix: shop_ix,
                                group_ix: group_ix,
                                item_ix: ix,
                            }}
                            group_type="hot_deal"
                            item_info={item_info}
                            //
                            use_check={ix == 0}
                            model_ix={item_info.model_ix}
                            checked={item_info.checked}
                            open_model={item_info.id == open_model_id}
                            open_search={item_info.id == open_search_id}
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
                        {ix == 0 ? (
                            <div className="fs-item-border-bottom"></div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsCSGDeal;

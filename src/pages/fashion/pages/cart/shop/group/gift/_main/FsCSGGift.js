import React from 'react';
import PropTypes from 'prop-types';
//
import FsCartGroupHead from '../../../../../../components/cart_group_head/FsCartGroupHead';
import FsCartItemGift from '../../../../../../components/cart_item_gift/FsCartItemGift';
import FsCSGroupItem from '../../item/FsCSGroupItem';

//
FsCSGGift.propTypes = {};

//
function FsCSGGift({
    shop_ix,
    group_ix,

    more_spend,
    gift_count,
    gift_chosen_count,
    gift_id,
    main_items,
    gift_items,

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
        <div className="FsCSGGift">
            <div className="FsCSGGift_head">
                <FsCartGroupHead
                    label_deal="Mua Kèm"
                    title_main={
                        more_spend <= 0
                            ? gift_chosen_count == 0
                                ? `Vui lòng chọn ${gift_count} quà tặng`
                                : `Bạn đã chọn ${gift_chosen_count} quà tặng`
                            : `Mua nhiều hơn ₫${more_spend} và nhận được ${gift_count} quà tặng`
                    }
                    title_more={
                        more_spend <= 0 && gift_chosen_count == 0
                            ? `Chọn quà`
                            : `Thêm`
                    }
                    link_to={`/fashion/gift?id=${gift_id}`}
                />
            </div>

            <div>
                <div className="FsCSGGift_main">
                    {main_items.map((item_info, ix) => (
                        <div key={item_info.id}>
                            <FsCSGroupItem
                                cart_ix_obj={{
                                    shop_ix: shop_ix,
                                    group_ix: group_ix,
                                    item_ix: ix,
                                }}
                                group_type="gift"
                                item_info={item_info}
                                //
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

                            <div className="fs-item-border-bottom"></div>
                        </div>
                    ))}
                </div>

                <div className="FsCSGGift_gift">
                    {gift_items.map((item_info, ix) => (
                        <div key={item_info.id}>
                            <FsCartItemGift
                                item_info={item_info}
                                open_search={item_info.id == open_search_id}
                                handleDelete={handleDelete}
                                toggleSearchSame={toggleSearchSame}
                            />

                            {ix != gift_items.length - 1 ? (
                                <div className="fs-item-border-bottom"></div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FsCSGGift;

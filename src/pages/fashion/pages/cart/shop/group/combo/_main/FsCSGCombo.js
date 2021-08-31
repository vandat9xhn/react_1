import React from 'react';
import PropTypes from 'prop-types';
//
import FsCartGroupHead from '../../../../../../components/cart_group_head/FsCartGroupHead';
import FsCSGroupItem from '../../item/FsCSGroupItem';
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';

//
FsCSGCombo.propTypes = {};

//
function FsCSGCombo({
    shop_ix,
    group_ix,

    more_count,
    discount,
    combo_id,
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
        <div className="FsCSGCombo">
            <div className="FsCSGCombo_head">
                <FsCartGroupHead
                    label_deal={`Combo${IS_MOBILE ? '' : ' khuyến mãi'}`}
                    title_main={
                        more_count <= 0
                            ? `chọn 3 sản phẩm (tiết kiệm được ${discount})`
                            : `Mua thêm ${more_count} sản phẩm (sẽ được giảm ${discount})`
                    }
                    title_more="Thêm"
                    link_to={`/fashion/combo?id=${combo_id}`}
                />
            </div>

            <div className="FsCSGCombo_body">
                <div className="FsCSGCombo_row">
                    {item_info_arr.map((item_info, ix) => (
                        <div key={item_info.id} className="FsCSGCombo_item">
                            <FsCSGroupItem
                                cart_ix_obj={{
                                    shop_ix: shop_ix,
                                    group_ix: group_ix,
                                    item_ix: ix,
                                }}
                                group_type="combo"
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

                            {ix != item_info_arr.length - 1 ? (
                                <div className="fs-item-border-bottom"></div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FsCSGCombo;

import React from 'react';
import PropTypes from 'prop-types';
//
import FsCIImgName from '../cart_item/img_name/FsCIImgName';
import FsCIDelSearch from '../cart_item/del_search/_main/FsCIDelSearch';
//
import './FsCartItemGift.scss';

//
FsCartItemGift.propTypes = {};

//
function FsCartItemGift({
    cart_ix_obj,
    item_info,
    open_search,
    toggleSearchSame,
    handleDeleteGift,
}) {
    //
    const { id, name, vid_pics, models } = item_info;

    //
    function onSearchSame() {
        toggleSearchSame({ new_open_search_id: id });
    }

    //
    function onDeleteGift() {
        handleDeleteGift({
            cart_ix_obj: cart_ix_obj,
        });
    }

    //
    return (
        <div className="FsCartItemGift padding-x-16px padding-y-8px">
            <div className="FsCartItemGift_row display-flex align-items-center">
                <div className="FsCartItemGift_product">
                    <FsCIImgName img={vid_pics[0]} name={name} />
                </div>

                <div className="FsCartItemGift_type"></div>

                <div className="FsCartItemGift_count text-align-center text-secondary font-14px">
                    {models[0].total_add_cart}
                </div>

                <div className="FsCartItemGift_del_search text-align-center">
                    <FsCIDelSearch
                        product_id={id}
                        open_search={open_search}
                        toggleSearchSame={onSearchSame}
                        handleDelete={onDeleteGift}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsCartItemGift;

import React from 'react';
import PropTypes from 'prop-types';
//
import FsCIImgName from '../cart_item/img_name/FsCIImgName';
import FsCIDelSearch from '../cart_item/del_search/_main/FsCIDelSearch';

//
FsCartItemGift.propTypes = {};

//
function FsCartItemGift({
    item_info,
    open_search,
    toggleSearchSame,
    handleDelete,
}) {
    //
    const { id, name, vid_pic, gift_quantity } = item_info;

    //
    return (
        <div className="FsCartItemGift">
            <div className="FsCartItemGift_row display-flex align-items-center">
                <div className="FsCartItemGift_check"></div>

                <div className="FsCartItemGift_product">
                    <FsCIImgName img={vid_pic} name={name} />
                </div>

                <div className="FsCartItemGift_type"></div>

                <div className="FsCartItemGift_price"></div>

                <div className="FsCartItemGift_count">{gift_quantity}</div>

                <div className="FsCartItemGift_total"></div>

                <div className="FsCartItemGift_del_search">
                    <FsCIDelSearch
                        product_id={id}
                        open_search={open_search}
                        toggleSearchSame={toggleSearchSame}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsCartItemGift;

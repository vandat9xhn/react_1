import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import FsCIGiftMb from '../mobile/FsCIGiftMb';
import FsCIGiftPc from '../pc/FsCIGiftPc';
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
    return IS_MOBILE ? (
        <FsCIGiftMb
            id={id}
            name={name}
            img={vid_pics[0]}
            total_add_cart={models[0].total_add_cart}
            handleDeleteGift={onDeleteGift}
        />
    ) : (
        <FsCIGiftPc
            id={id}
            name={name}
            img={vid_pics[0]}
            total_add_cart={models[0].total_add_cart}
            //
            open_search={open_search}
            handleSearchSame={onSearchSame}
            handleDeleteGift={onDeleteGift}
        />
    );
}

export default FsCartItemGift;

import React from 'react';
import PropTypes from 'prop-types';
//
import FsCIDelSearch from '../../cart_item/del_search/_main/FsCIDelSearch';
import FsCIImgName from '../../cart_item/img_name/FsCIImgName';
// 
import './FsCIGiftPc.scss';

//
FsCIGiftPc.propTypes = {};

//
function FsCIGiftPc({
    id,
    name,
    img,
    total_add_cart,

    open_search,

    handleSearchSame,
    handleDeleteGift,
}) {
    return (
        <div className="FsCIGiftPc padding-x-16px padding-y-8px">
            <div className="FsCIGiftPc_row display-flex align-items-center">
                <div className="FsCIGiftPc_product">
                    <FsCIImgName img={img} name={name} />
                </div>

                <div className="FsCIGiftPc_type"></div>

                <div className="FsCIGiftPc_count text-align-center text-secondary font-14px">
                    {total_add_cart}
                </div>

                <div className="FsCIGiftPc_del_search text-align-center">
                    <FsCIDelSearch
                        product_id={id}
                        open_search={open_search}
                        toggleSearchSame={handleSearchSame}
                        handleDelete={handleDeleteGift}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsCIGiftPc;

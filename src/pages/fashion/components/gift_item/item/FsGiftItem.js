import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopDealLabel from '../../shop_deal_label/FsShopDealLabel';
//
import './FsGiftItem.scss';

//
FsGiftItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    is_gift: PropTypes.bool,
};

//
function FsGiftItem({ img, name, is_gift }) {
    //
    return (
        <div className="FsGiftItem">
            <div className="pos-rel padding-top-100per">
                <img
                    className="pos-abs-100 wh-100 object-fit-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div className="FsGiftItem_foot margin-top-7px wk-box-vertical line-clamp-2 overflow-hidden">
                {is_gift ? (
                    <div className="FsGiftItem_gift margin-right-5px inline-block">
                        <FsShopDealLabel label="Quà Tặng" />
                    </div>
                ) : null}

                <span className="text-secondary font-14px">{name}</span>
            </div>
        </div>
    );
}

export default FsGiftItem;

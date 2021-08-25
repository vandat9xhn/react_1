import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopDealLabel from '../../../../components/shop_deal_label/FsShopDealLabel';
//
import './FsIGiftItem.scss';

//
FsIGiftItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    is_gift: PropTypes.bool,
};

//
function FsIGiftItem({ img, name, is_gift }) {
    //
    return (
        <div className="FsIGiftItem">
            <div className="pos-rel padding-top-100per">
                <img
                    className="pos-abs-100 wh-100 object-fit-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div className="FsIGiftItem_foot overflow-hidden">
                {is_gift ? (
                    <div className="FsIGiftItem_gift inline-block">
                        <FsShopDealLabel label="Quà Tặng" />
                    </div>
                ) : null}

                <span className="text-secondary font-14px">{name}</span>
            </div>
        </div>
    );
}

export default FsIGiftItem;

import React from 'react';
import PropTypes from 'prop-types';
//
import FsShopDealLabel from '../../../../components/shop_deal_label/FsShopDealLabel';

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
            <div>
                <img src={img} alt="" width="160" height="160" />
            </div>
            
            <div>
                {is_gift ? (
                    <div className="inline-block">
                        <FsShopDealLabel label="Quà Tặng" />
                    </div>
                ) : null}

                <span>{name}</span>
            </div>
        </div>
    );
}

export default FsIGiftItem;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenFsFreeShip } from '../../../../../../../component/_screen/type/fs_free_ship/_main/ScreenFsFreeShip';
//
import './FsCFsVoucher.scss';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
FsCFsVoucher.propTypes = {};

//
function FsCFsVoucher({ id, name, handleChooseFreeShip }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function openFashionVoucher() {
        openScreenFsFreeShip({
            openScreenFloor: openScreenFloor,
            free_ship_id: id,
            handleChooseFreeShip: handleChooseFreeShip,
        });
    }

    //
    return (
        <div className="FsCFsVoucher fs-cart-summary-part">
            <div
                className={`display-flex ${
                    IS_MOBILE
                        ? 'space-between font-14px'
                        : 'justify-content-end font-16px'
                }`}
            >
                <div className="text-secondary text-nowrap">Shopee Voucher</div>

                <div
                    className={`FsCFsVoucher_name ${
                        !name && IS_MOBILE ? 'display-none' : ''
                    }`}
                >
                    {name}
                </div>

                {IS_MOBILE ? (
                    <div
                        className="text-third text-nowrap"
                        onClick={openFashionVoucher}
                    >
                        <span>Chọn hoặc nhập mã</span>{' '}
                        <IconsArrow x={200} size_icon="0.75rem" />
                    </div>
                ) : (
                    <div
                        className="color-fashion cursor-pointer"
                        onClick={openFashionVoucher}
                    >
                        Áp Dụng Mã Giảm Giá Ngay
                    </div>
                )}
            </div>
        </div>
    );
}

export default FsCFsVoucher;

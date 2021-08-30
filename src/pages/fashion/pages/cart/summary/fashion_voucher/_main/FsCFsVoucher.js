import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenFsFreeShip } from '../../../../../../../component/_screen/type/fs_free_ship/ScreenFsFreeShip';
//
import './FsCFsVoucher.scss';

//
FsCFsVoucher.propTypes = {};

//
function FsCFsVoucher({ voucher_name, handleChooseVoucher }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function openFashionVoucher() {
        openScreenFsFreeShip({
            openScreenFloor: openScreenFloor,
            free_ship_id: -1,
            handleChooseFreeShip: handleChooseFreeShip,
        });
    }

    //
    function handleChooseFreeShip(free_ship_obj) {
        console.log(free_ship_obj);
    }

    //
    return (
        <div className="FsCFsVoucher fs-cart-summary-part">
            <div className="display-flex justify-content-end">
                <div className="font-16px text-secondary">Shopee Voucher</div>

                <div className="FsCFsVoucher_name">{voucher_name}</div>

                <div
                    className="color-fashion cursor-pointer"
                    onClick={openFashionVoucher}
                >
                    Áp Dụng Mã Giảm Giá Ngay
                </div>
            </div>
        </div>
    );
}

export default FsCFsVoucher;

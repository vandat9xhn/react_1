import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenFsFreeShip } from '../../../../../../component/_screen/type/fs_free_ship/_main/ScreenFsFreeShip';
// 
import './FsBuyVoucher.scss';

//
FsBuyVoucher.propTypes = {};

//
function FsBuyVoucher({ free_ship_id, handleChooseFreeShip }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function openFashionVoucher() {
        openScreenFsFreeShip({
            openScreenFloor: openScreenFloor,
            free_ship_id: free_ship_id,
            handleChooseFreeShip: handleChooseFreeShip,
        });
    }

    //
    return (
        <div className="FsBuyVoucher bg-primary">
            <div className="FsBuyVoucher_row flex-between-center">
                <div className="font-18px text-cap font-400 text-222">
                    Fashion voucher
                </div>

                <div
                    className="text-blue font-14 font-500 cursor-pointer"
                    onClick={openFashionVoucher}
                >
                    Chọn voucher
                </div>
            </div>
        </div>
    );
}

export default FsBuyVoucher;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import { openScreenWithElm } from '../../../../../../../component/_screen/type/with_elm/ScreenWithElm';
//
import './FsBShopTransport.scss';

//
FsBShopTransport.propTypes = {};

//
function FsBShopTransport({ transport, handleChangeTransport }) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const { price, delay_obj } = transport;

    const { delay_message, str_date_from, str_date_to } = delay_obj;

    //
    function openChange() {
        console.log('open change transport');
        // openScreenWithElm({
        //     openScreenFloor: openScreenFloor,
        //     elm: <div></div>
        // })
    }

    //
    return (
        <div className="FsBShopTransport padding-y-16px">
            <div className="FsBShopTransport_row display-flex">
                <div className="FsBShopTransport_title padding-right-20px text-align-end">
                    Đơn vị vận chuyển:
                </div>

                <div className="FsBShopTransport_detail">
                    <div>
                        <div className="flex-between-center">
                            <div>Nhanh</div>

                            <div
                                className="text-upper text-blue cursor-pointer"
                                onClick={openChange}
                            >
                                Thay đổi
                            </div>

                            <div>₫{formatNum(price)}</div>
                        </div>

                        <div className="text-third font-12px">
                            Nhận hàng vào {str_date_from} - {str_date_to}
                        </div>

                        <div className="text-third">({delay_message})</div>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default FsBShopTransport;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
// 
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import { openScreenWithElm } from '../../../../../../../component/_screen/type/with_elm/ScreenWithElm';
// 
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import FsTransportModalScreen from '../../../../../components/transport_modal/_screen/FsTransportModalScreen';
//
import './FsBShopTransport.scss';

//
FsBShopTransport.propTypes = {};

//
function FsBShopTransport({
    transport_arr,
    trans_ix,
    delivery_time_ix,

    handleChangeTransport,
}) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const { name, price, delay_obj } = transport_arr[trans_ix];

    const { delay_message, str_date_from, str_date_to, by_time } = delay_obj;

    //
    function openChange() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <FsTransportModalScreen
                    transport_arr={transport_arr}
                    trans_ix={trans_ix}
                    delivery_time_ix={delivery_time_ix}
                    closeScreen={closeScreenFloor}
                    handleChangeTransport={handleChangeTransport}
                />
            ),
        });
    }

    //
    return (
        <div
            className="FsBShopTransport padding-y-16px"
            onClick={IS_MOBILE ? openChange : undefined}
        >
            <div className="FsBShopTransport_row display-flex">
                <div className="FsBShopTransport_title padding-right-20px text-align-end">
                    Đơn vị vận chuyển:
                </div>

                <div className="FsBShopTransport_detail">
                    <div>
                        <div className="flex-between-center">
                            <div>{name}</div>

                            <div
                                className="FsBShopTransport_change text-upper text-blue cursor-pointer"
                                onClick={openChange}
                            >
                                Thay đổi
                            </div>

                            <div>
                                <span>₫{formatNum(price)}</span>

                                {IS_MOBILE ? (
                                    <span className="margin-left-5px">
                                        <IconsArrow x={200} size_icon="1rem" />
                                    </span>
                                ) : null}
                            </div>
                        </div>

                        <div className="text-third font-12px">
                            Nhận hàng {by_time ? 'sau' : 'vào'} {str_date_from}{' '}
                            - {str_date_to}
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

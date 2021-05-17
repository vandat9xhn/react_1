import React from 'react';
import PropTypes from 'prop-types';

import RadioCustom from '../../../../../../../component/input/radio_custom/RadioCustom';
import './VoucherChoice.scss';
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
VoucherChoice.propTypes = {
    
};

//
function VoucherChoice(props) {
    const {can_use, voucher, voucher_ix, is_active, handleChangeVoucherTemp} = props;
    const {img, name, cost, expires, link_condition} = voucher;
    //
    function onChangeVoucherTemp() {
        if (can_use) {
            handleChangeVoucherTemp(voucher_ix)
        }
    }

    return (
        <div>
            <div className="VoucherChoice_contain">
                <div className={`VoucherChoice_row ${can_use ? '' : 'opacity-5 pointer-events-none'}`}>
                    <div><img src={img} alt="" width="50px" height="50px"/></div>

                    <div className="VoucherChoice_detail">
                        <div className="label-field">{name}</div>
                        <div>Cost: {formatNum(cost)} vnd</div>
                        <div>Time: {expires} left</div>
                    </div>
                    
                    <div className="VoucherChoice_radio">
                        <div onClick={onChangeVoucherTemp}>
                            <RadioCustom is_active={is_active}/>
                        </div>
                    </div>
                </div>

                <div className="VoucherChoice_condition">
                    <a href={`/fashion/condition?type=${link_condition}`} target="_blank">
                        <div className="font-italic">Condition</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default VoucherChoice;
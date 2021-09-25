import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../_some_function/FormatDate';

//
PLDOfferHead.propTypes = {};

//
function PLDOfferHead({ count_offer, end_time }) {
    //
    return (
        <div className="PLDOfferHead padding-12px bg-f1">
            <b>{count_offer} ưu đãi thêm</b>

            <span className="margin-left-5px">
                Dự kiến áp dụng đến {formatLocalDateTimeString(end_time)}
            </span>
        </div>
    );
}

export default PLDOfferHead;

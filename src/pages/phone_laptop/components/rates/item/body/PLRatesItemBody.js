import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateString } from '../../../../../../_some_function/FormatDate';
// 
import './PLRatesItemBody.scss';

//
PLRatesItemBody.propTypes = {};

//
function PLRatesItemBody({ content, img, service_replied_time }) {
    //
    return (
        <div className="PLRatesItemBody">
            <div>{content}</div>

            {img ? (
                <div className="margin-top-10px">
                    <img
                        className="object-fit-cover"
                        src={img}
                        alt=""
                        width="125"
                        height="125"
                    />
                </div>
            ) : null}

            {service_replied_time ? (
                <div className="PLRatesItemBody_service pos-rel margin-top-10px padding-10px bg-fb-active">
                    Chăm sóc khách hàng đã liên hệ hỗ trợ ngày{' '}
                    {formatLocalDateString(service_replied_time)}
                </div>
            ) : null}
        </div>
    );
}

export default PLRatesItemBody;

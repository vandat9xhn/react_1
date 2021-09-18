import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../../../_some_function/FormatDate';

//
FsPPOrderProcessItem.propTypes = {};

//
function FsPPOrderProcessItem({ is_active, process_time, process_info }) {
    //
    return (
        <div className="FsPPOrderProcessItem padding-y-10px">
            <div className="FsPPOrderProcessItem_row display-flex align-items-center">
                <div
                    className={`FsPPOrderProcessItem_status brs-50 padding-5px ${
                        is_active ? 'bg-green' : 'bg-ccc'
                    }`}
                ></div>

                <div className="margin-left-8px">
                    {formatLocalDateTimeString(process_time)}
                </div>

                <div
                    className={`margin-left-15px ${
                        is_active ? 'text-green' : 'text-third'
                    }`}
                >
                    {process_info}
                </div>
            </div>
        </div>
    );
}

export default FsPPOrderProcessItem;

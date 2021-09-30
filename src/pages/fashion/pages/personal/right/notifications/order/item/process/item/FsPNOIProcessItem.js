import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../../../../_some_function/FormatDate';
//
import './FsPNOIProcessItem.scss';

//
FsPNOIProcessItem.propTypes = {};

//
function FsPNOIProcessItem({ title, info, created_time }) {
    //
    return (
        <div className="FsPNOIProcessItem pos-rel padding-20px font-14px text-del">
            <div className="display-flex">
                <div className="FsPNOIProcessItem_left margin-right-20px"></div>

                <div className="flex-grow-1">
                    <div className="FsPNOIProcessItem_title margin-bottom-10px text-cap font-16px font-400">
                        {title}
                    </div>

                    <div className="FsPNOIProcessItem_info">{info}</div>

                    <div className="FsPNOIProcessItem_time">
                        {formatLocalDateTimeString(created_time)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsPNOIProcessItem;

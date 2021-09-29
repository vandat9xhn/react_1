import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPOrderProcessItem from '../item/FsPPOrderProcessItem';
//
import './FsPPOrderProcess.scss';

//
FsPPOrderProcess.propTypes = {};

//
function FsPPOrderProcess({ order_process_arr }) {
    //
    return (
        <div className="FsPPOrderProcess">
            {order_process_arr.map((item, ix) => (
                <div key={ix} className="pos-rel">
                    <div className="pos-rel z-index-lv1">
                        <FsPPOrderProcessItem
                            is_active={ix == 0}
                            process_time={item.created_time}
                            process_info={item.info}
                        />
                    </div>

                    <div
                        className={`FsPPOrderProcess_item_side pos-abs ${
                            ix == 0
                                ? 'top-50per h-50per'
                                : ix == order_process_arr.length - 1
                                ? 'bottom-50per h-50per'
                                : 'top-0 h-100per'
                        }`}
                    ></div>
                </div>
            ))}
        </div>
    );
}

export default FsPPOrderProcess;

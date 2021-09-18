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

                    {ix == 0 ? null : (
                        <div className="FsPPOrderProcess_item_side pos-abs"></div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FsPPOrderProcess;

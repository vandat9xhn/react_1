import React from 'react';
import PropTypes from 'prop-types';
//
import TMDeliveryTimeItem from '../item/TMDeliveryTimeItem';
// 
import './TMDeliveryTime.scss';

//
TMDeliveryTime.propTypes = {};

//
function TMDeliveryTime({ delivery_time_arr, delivery_time_ix, handleChoose }) {
    //
    return (
        <div className="TMDeliveryTime">
            <div className="TMDeliveryTime_title margin-bottom-15px text-secondary font-14px">
                Thời gian giao hàng mong muốn
            </div>

            <div>
                {delivery_time_arr.map((item, ix) => (
                    <div key={ix}>
                        <TMDeliveryTimeItem
                            name={item.name}
                            description={item.description}
                            ix={ix}
                            is_active={ix == delivery_time_ix}
                            handleChoose={handleChoose}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TMDeliveryTime;

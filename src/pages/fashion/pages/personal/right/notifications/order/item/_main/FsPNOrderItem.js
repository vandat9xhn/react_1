import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../../../_hooks/useBool';
//
import FsPNOrderItemInfo from '../info/_main/FsPNOrderItemInfo';
import FsPNOrderItemProcess from '../process/_main/FsPNOrderItemProcess';

//
FsPNOrderItem.propTypes = {};

//
function FsPNOrderItem({
    order_id,
    img,
    title,
    info,
    created_time,
    process_arr,
}) {
    //
    const { is_true, toggleBool } = useBool();

    //
    return (
        <div className="FsPNOrderItem">
            <div>
                <FsPNOrderItemInfo
                    order_id={order_id}
                    img={img}
                    title={title}
                    info={info}
                    created_time={created_time}
                    is_show={is_true}
                    toggleProcess={toggleBool}
                />
            </div>

            <div className={`bg-screen ${is_true ? '' : 'display-none'}`}>
                <FsPNOrderItemProcess process_arr={process_arr} />
            </div>
        </div>
    );
}

export default FsPNOrderItem;

import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../../../_hooks/useBool';
//
import FsPNOrderItemInfo from '../info/_main/FsPNOrderItemInfo';
import FsPNOrderItemProcess from '../process/_main/FsPNOrderItemProcess';
import HasLinkOrNot from '../../../../../../../../../component/link/has_link_or_not/HasLinkOrNot';
import { IS_MOBILE } from '../../../../../../../../../_constant/Constant';

//
FsPNOrderItem.propTypes = {};

//
function FsPNOrderItem({
    order_id,
    logo,
    name,
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
                <HasLinkOrNot
                    has_link={IS_MOBILE}
                    class_link="color-inherit cursor-default"
                    link_to={`/fashion/user/purchase/order/${order_id}`}
                >
                    <FsPNOrderItemInfo
                        order_id={order_id}
                        logo={logo}
                        name={name}
                        info={info}
                        created_time={created_time}
                        is_show={is_true}
                        toggleProcess={toggleBool}
                    />
                </HasLinkOrNot>
            </div>

            <div className={`bg-screen ${is_true ? '' : 'display-none'}`}>
                <FsPNOrderItemProcess process_arr={process_arr} />
            </div>
        </div>
    );
}

export default FsPNOrderItem;

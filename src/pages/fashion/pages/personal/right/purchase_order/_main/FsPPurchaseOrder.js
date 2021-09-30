import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPurOrderHead from '../head/FsPPurOrderHead';
import FsPPOrderSteps from '../steps/_main/FsPPOrderSteps';
import FsPPOrderActions from '../actions/FsPPOrderActions';
import FsPPOrderAddressProcess from '../address_process/_main/FsPPOrderAddressProcess';
import FsPPurOrderShop from '../shop/_main/FsPPurOrderShop';
import FsPPOrderPayment from '../payment/FsPPOrderPayment';
import FsPPOrderShopTotal from '../total/FsPPOrderShopTotal';
//  
import '../_mobile_css/FsPPurchaseOrderMb.scss';
import '../_mobile_css/FsPPOrderAddressProcessMb.scss';
import '../_mobile_css/FsPPOrderStepsMb.scss';

//
FsPPurchaseOrder.propTypes = {};

//
function FsPPurchaseOrder({
    user_info,
    purchase_obj,

    c_step,
}) {
    //
    const { name, phone, address } = user_info;

    //
    const {
        id,
        order_status,
        order_process_arr,

        shop_info,
        group_arr,
        transport_obj,

        total_price,
        payment_obj,
    } = purchase_obj;

    const {
        id: trans_id,
        name: trans_name,
        price: trans_price,
        discount: trans_discount,
    } = transport_obj;

    //
    return (
        <div className="FsPPurchaseOrder bg-primary font-14px">
            <div>
                <FsPPurOrderHead order_id={id} order_status={order_status} />
            </div>

            <div>
                <FsPPOrderSteps c_step={c_step} />
            </div>

            <div>
                <FsPPOrderActions />
            </div>

            <div>
                <FsPPOrderAddressProcess
                    trans_id={trans_id}
                    trans_name={trans_name}
                    name={name}
                    phone={phone}
                    address={address}
                    order_process_arr={order_process_arr}
                />
            </div>

            <div>
                <FsPPurOrderShop shop_info={shop_info} group_arr={group_arr} />
            </div>

            <div>
                <FsPPOrderShopTotal
                    total_price={total_price}
                    trans_price={trans_price}
                    trans_discount={trans_discount}
                />
            </div>

            <div>
                <FsPPOrderPayment payment_name={payment_obj.name} />
            </div>
        </div>
    );
}

export default FsPPurchaseOrder;

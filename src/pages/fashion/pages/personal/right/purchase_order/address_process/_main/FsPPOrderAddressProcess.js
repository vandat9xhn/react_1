import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPOrderProcessHead from '../head/FsPPOrderProcessHead';
import FsPPOrderAddress from '../address/FsPPOrderAddress';
import FsPPOrderProcess from '../process/_main/FsPPOrderProcess';
//
import './FsPPOrderAddressProcess.scss';

//
FsPPOrderAddressProcess.propTypes = {};

//
function FsPPOrderAddressProcess({
    trans_id,
    trans_name,

    name,
    phone,
    address,

    order_process_arr,
}) {
    //
    return (
        <div className="FsPPOrderAddressProcess">
            <div className="margin-bottom-15px">
                <FsPPOrderProcessHead
                    trans_name={trans_name}
                    trans_id={trans_id}
                />
            </div>

            <div className="FsPPOrderAddressProcess_contain display-flex">
                <div className="FsPPOrderAddressProcess_address">
                    <FsPPOrderAddress
                        name={name}
                        phone={phone}
                        address={address}
                    />
                </div>

                <div className="flex-grow-1 padding-left-20px">
                    <FsPPOrderProcess order_process_arr={order_process_arr} />
                </div>
            </div>
        </div>
    );
}

export default FsPPOrderAddressProcess;

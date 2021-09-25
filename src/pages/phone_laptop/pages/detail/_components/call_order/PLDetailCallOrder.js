import React from 'react';
import PropTypes from 'prop-types';

//
PLDetailCallOrder.propTypes = {};

//
function PLDetailCallOrder({ callToOrder }) {
    //
    return (
        <div className="PLDetailCallOrder text-align-center">
            <span>Gọi đặt mua</span>

            <span
                className="margin-left-5px text-blue cursor-pointer"
                onClick={callToOrder}
            >
                1800.1060
            </span>

            <span className="margin-left-5px">(7:30 - 22:00)</span>
        </div>
    );
}

export default PLDetailCallOrder;

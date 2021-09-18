import React from 'react';
import PropTypes from 'prop-types';

//
FsPPOrderAddress.propTypes = {};

//
function FsPPOrderAddress({ name, phone, address }) {
    //
    return (
        <div className="FsPPOrderAddress">
            <div className="margin-bottom-10px font-14px">{name}</div>

            <div className="margin-bottom-5px text-third font-12px">
                {phone}
            </div>

            <div className="text-third font-12px text-cap">{address}</div>
        </div>
    );
}

export default FsPPOrderAddress;

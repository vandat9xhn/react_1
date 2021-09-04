import React from 'react';
import PropTypes from 'prop-types';

//
FsBuyUserInfoCommon.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    type: PropTypes.string,
};

//
function FsBuyUserInfoCommon({ name, phone, address, type }) {
    //
    return (
        <div className="FsBuyUserInfoCommon">
            <div className="display-flex">
                <div className="label-field font-16px">
                    {name} {phone}
                </div>

                <div className="font-16px">{address}</div>

                <div className="text-third">{type}</div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoCommon;

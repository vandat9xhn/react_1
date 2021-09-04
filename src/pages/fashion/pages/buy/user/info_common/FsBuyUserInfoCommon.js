import React from 'react';
import PropTypes from 'prop-types';
//
import './FsBuyUserInfoCommon.scss';

//
FsBuyUserInfoCommon.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    is_default: PropTypes.bool,
};

//
function FsBuyUserInfoCommon({ name, phone, address, is_default }) {
    //
    return (
        <div className="FsBuyUserInfoCommon">
            <div className="display-flex">
                <div className="font-16px font-700">
                    {name} {phone}
                </div>

                <div className="margin-left-20px font-16px">{address}</div>

                <div className="FsBuyUserInfoCommon_default text-third text-cap font-14px">
                    {is_default ? 'Mặc định' : ''}
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoCommon;

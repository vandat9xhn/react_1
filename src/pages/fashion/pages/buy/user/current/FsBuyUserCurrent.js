import React from 'react';
import PropTypes from 'prop-types';
// 
import FsBuyUserInfoCommon from '../info_common/FsBuyUserInfoCommon';
// 
import './FsBuyUserInfoCurrent.scss';

//
FsBuyUserInfoCurrent.propTypes = {
    ...FsBuyUserInfoCommon.propTypes,
    handleOpenFixed: PropTypes.func,
};

//
function FsBuyUserInfoCurrent({ name, phone, address, is_default, handleOpenFixed }) {
    //
    return (
        <div className="FsBuyUserInfoCurrent">
            <div className="display-flex">
                <FsBuyUserInfoCommon
                    name={name}
                    phone={phone}
                    address={address}
                    is_default={is_default}
                />

                <div
                    className="FsBuyUserInfoCurrent_change font-14px font-500 text-blue text-upper cursor-pointer"
                    onClick={handleOpenFixed}
                >
                    Thay đổi
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoCurrent;

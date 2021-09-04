import React from 'react';
import PropTypes from 'prop-types';
// 
import FsBuyUserInfoCommon from '../info_common/FsBuyUserInfoCommon';

//
FsBuyUserInfoCurrent.propTypes = {
    ...FsBuyUserInfoCommon.propTypes,
    handleOpenFixed: PropTypes.func,
};

//
function FsBuyUserInfoCurrent({ name, phone, address, type, handleOpenFixed }) {
    //
    return (
        <div className="FsBuyUserInfoCurrent">
            <div className="display-flex">
                <FsBuyUserInfoCommon
                    name={name}
                    phone={phone}
                    address={address}
                    type={type}
                />

                <div
                    className="text-blue text-upper cursor-pointer"
                    onClick={handleOpenFixed}
                >
                    Thay đổi
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoCurrent;

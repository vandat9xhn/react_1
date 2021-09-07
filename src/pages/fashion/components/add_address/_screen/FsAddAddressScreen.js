import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import FsAddAddress from '../_main/FsAddAddress';
//
import './FsAddAddressScreen.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsAddAddressScreen.propTypes = {
    ...FsAddAddress.propTypes,
};

//
function FsAddAddressScreen({
    title,
    old_user_name,
    old_phone,
    old_specific,
    old_type,
    old_current_address,
    is_default,

    handleBack,
    handleComplete,
}) {
    //
    useMakeBodyHidden();

    //
    return (
        <div
            className={`FsAddAddressScreen ${
                IS_MOBILE
                    ? 'FsAddAddressScreen-mobile'
                    : 'FsAddAddressScreen-pc'
            }`}
        >
            <FsAddAddress
                title={title}
                old_user_name={old_user_name}
                old_phone={old_phone}
                old_specific={old_specific}
                old_type={old_type}
                old_current_address={old_current_address}
                is_default={is_default}
                handleBack={handleBack}
                handleComplete={handleComplete}
            />
        </div>
    );
}

export default FsAddAddressScreen;

import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import FsBuyUserInfoCommon from '../info_common/FsBuyUserInfoCommon';
import RadioCustom from '../../../../../../component/input/radio_custom/RadioCustom';

//
FsBuyUserInfoChoice.propTypes = {
    ...FsBuyUserInfoCommon.propTypes,
    checked: PropTypes.bool,
    handleChecked: PropTypes.func,
};

//
function FsBuyUserInfoChoice({
    ix,

    name,
    phone,
    address,
    is_default,

    checked,
    handleChecked,
    handleChooseInfo,
}) {
    //
    function onChecked() {
        handleChecked(ix);
    }

    // 
    function onChooseInfo() {
        handleChooseInfo(ix)
    }

    //
    return (
        <div
            className="FsBuyUserInfoChoice"
            onClick={IS_MOBILE ? onChooseInfo : undefined}
        >
            <div className="display-flex align-items-center">
                <div
                    className="FsBuyUserInfoChoice_radio margin-right-10px cursor-pointer"
                    onClick={onChecked}
                >
                    <RadioCustom is_active={checked} />
                </div>

                <div>
                    <FsBuyUserInfoCommon
                        name={name}
                        phone={phone}
                        address={address}
                        is_default={is_default}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoChoice;

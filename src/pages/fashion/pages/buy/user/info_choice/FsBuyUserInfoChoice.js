import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBoxCustom from '../../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import FsBuyUserInfoCommon from '../info_common/FsBuyUserInfoCommon';

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
    type,

    checked,
    handleChecked,
}) {
    // 
    function handleChecked() {
        handleChecked(ix)
    }

    //
    return (
        <div className="FsBuyUserInfoChoice">
            <div className="display-flex">
                <div className="margin-right-10px">
                    <CheckBoxCustom
                        checked={checked}
                        title=""
                        handleChangeChecked={handleChecked}
                    />
                </div>

                <div>
                    <FsBuyUserInfoCommon
                        name={name}
                        phone={phone}
                        address={address}
                        type={type}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoChoice;

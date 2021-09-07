import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
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
function FsBuyUserInfoCurrent({
    name,
    phone,
    address,
    is_default,
    handleOpenFixed,
}) {
    //
    return (
        <div
            className="FsBuyUserInfoCurrent"
            onClick={IS_MOBILE ? handleOpenFixed : undefined}
        >
            <div className="FsBuyUserInfoCurrent_row display-flex">
                <FsBuyUserInfoCommon
                    name={name}
                    phone={phone}
                    address={address}
                    is_default={is_default}
                />

                {IS_MOBILE ? (
                    <div className="margin-left-5px">
                        <IconsArrow x={200} size_icon="1rem" />
                    </div>
                ) : (
                    <div
                        className="FsBuyUserInfoCurrent_change font-14px font-500 text-blue text-upper cursor-pointer"
                        onClick={handleOpenFixed}
                    >
                        Thay đổi
                    </div>
                )}
            </div>
        </div>
    );
}

export default FsBuyUserInfoCurrent;

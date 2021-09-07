import React from 'react';
import PropTypes from 'prop-types';
//
import './FsBuyUserInfoCommon.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

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
            <div className="FsBuyUserInfoCommon_row display-flex">
                <div className="FsBuyUserInfoCommon_name_phone display-flex font-16px font-700">
                    <div className="FsBuyUserInfoCommon_name margin-right-5px">
                        {name}

                        {IS_MOBILE ? (
                            <span className="margin-left-5px color-fashion text-cap font-14px">
                                {is_default ? '[Mặc định]' : ''}
                            </span>
                        ) : null}
                    </div>

                    <div className="FsBuyUserInfoCommon_phone">{phone}</div>
                </div>

                <div className="FsBuyUserInfoCommon_address margin-left-20px font-16px">
                    {address}
                </div>

                <div className="FsBuyUserInfoCommon_default text-third text-cap font-14px">
                    {is_default ? 'Mặc định' : ''}
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserInfoCommon;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconFsTruck from '../../../../../../../../../_icons_svg/_icon_fs_truck/IconFsTruck';
//
import './FsPPurShopHeadRight.scss';

//
FsPPurShopHeadRight.propTypes = {};

//
function FsPPurShopHeadRight({ transport_status, order_status }) {
    //
    return (
        <div className="FsPPurShopHeadRight">
            <div className="FsPPurShopHeadRight_row flex-between-center font-14px">
                <div className="inline-flex align-items-center">
                    <IconFsTruck size_icon_ratio={4} />

                    <span className="margin-left-5px">{transport_status}</span>
                </div>

                <div className="FsPPurShopHeadRight_separate margin-left-8px margin-right-8px"></div>

                <div className="color-fashion text-upper">{order_status}</div>
            </div>
        </div>
    );
}

export default FsPPurShopHeadRight;

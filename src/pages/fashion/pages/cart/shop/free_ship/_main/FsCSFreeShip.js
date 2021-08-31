import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import FsCSFreeShipList from '../list/FsCSFreeShipList';
import IconFsTruck from '../../../../../../../_icons_svg/_icon_fs_truck/IconFsTruck';
//
import './FsCSFreeShip.scss';

//
FsCSFreeShip.propTypes = {};

//
function FsCSFreeShip({ ship_text, shop_name, ship_arr }) {
    //

    //
    return (
        <div className={`FsCSFreeShip ${IS_MOBILE ? 'FsCSFreeShip-mb' : ''}`}>
            <div className="display-flex">
                <div className="margin-right-10px">
                    <IconFsTruck size_icon_ratio={4} />
                </div>

                <div
                    className={`FsCSFreeShip_text wk-box-vertical line-clamp-2 overflow-hidden ${
                        IS_MOBILE ? 'font-14px' : ''
                    }`}
                >
                    {ship_text}
                </div>

                <div className="FsCSFreeShip_right pos-rel margin-left-10px">
                    <div className="FsCSFreeShip_right_title text-blue cursor-pointer">
                        Tìm hiểu thêm
                    </div>

                    <div
                        className={`FsCSFreeShip_list display-none ${
                            IS_MOBILE
                                ? 'pos-fixed left-0 bottom-0 w-100per max-h-100vh z-index-lv5 overflow-y-auto box-shadow-fb'
                                : 'pos-abs top-100per right-0 z-index-lv1'
                        }`}
                    >
                        <FsCSFreeShipList
                            ship_arr={ship_arr}
                            shop_name={shop_name}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsCSFreeShip;

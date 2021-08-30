import React from 'react';
import PropTypes from 'prop-types';
//
import FsCSFreeShipList from '../list/FsCSFreeShipList';
//
import './FsCSFreeShip.scss';

//
FsCSFreeShip.propTypes = {};

//
function FsCSFreeShip({ ship_text, shop_name, ship_arr }) {
    //
    return (
        <div className="FsCSFreeShip">
            <div className="display-flex">
                <div></div>

                <div>{ship_text}</div>

                <div className="FsCSFreeShip_right pos-rel margin-left-10px">
                    <div className="text-blue cursor-pointer">
                        Tìm hiểu thêm
                    </div>

                    <div className="FsCSFreeShip_list pos-abs top-100per x-center display-none z-index-lv1">
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

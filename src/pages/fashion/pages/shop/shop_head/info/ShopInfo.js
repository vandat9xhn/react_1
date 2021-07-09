import React from 'react';
import PropTypes from 'prop-types';
//
import './ShopInfo.scss';

//
ShopInfo.propTypes = {
    info: PropTypes.string,
};

//
function ShopInfo({ info }) {
    //
    return (
        <div className="ShopInfo">
            <h2 className="ShopInfo_title margin-0 font-16px">
                SHOP INFORMATION
            </h2>

            <div className="ShopInfo_info">{info}</div>
        </div>
    );
}

export default ShopInfo;

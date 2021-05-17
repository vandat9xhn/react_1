import React from 'react';
import PropTypes from 'prop-types';
// 
import './ShopInfo.scss';

// 
ShopInfo.propTypes = {
    info: PropTypes.string,
};

// 
function ShopInfo(props) {
    const {info} = props;
    // 
    return (
        <div className="ShopInfo">
            <div className="ShopInfo_title label-field">SHOP INFORMATION</div>

            <div className="ShopInfo_info">
                {info}
            </div>
        </div>
    );
}

export default ShopInfo;
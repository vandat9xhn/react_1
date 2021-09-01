import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsCNoticeGoingToBuy.scss';

//
FsCNoticeGoingToBuy.propTypes = {};

//
function FsCNoticeGoingToBuy(props) {
    //
    return (
        <div className="FsCNoticeGoingToBuy display-flex-center padding-16px bg-loader brs-8px text-white label-field">
            Bạn chưa chọn sản phẩm nào để mua
        </div>
    );
}

export default FsCNoticeGoingToBuy;

import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsRateSellerReply.scss';

//
FsRateSellerReply.propTypes = {
    seller_reply: PropTypes.string,
};

//
function FsRateSellerReply({ seller_reply }) {
    //
    return (
        <div className="FsRateSellerReply bg-fb">
            <div className="FsRateSellerReply_title">
                Phản Hồi Của Người Bán
            </div>

            <div>{seller_reply}</div>
        </div>
    );
}

export default FsRateSellerReply;

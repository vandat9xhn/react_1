import React from 'react';
import PropTypes from 'prop-types';
//
import FsPNoticeCommon from '../../common/_main/FsPNoticeCommon';

// 
FsPNoticePromotion.propTypes = {};

// 
function FsPNoticePromotion(props) {
    //
    return (
        <div className="FsPNoticePromotion">
            <FsPNoticeCommon notice_type="promotion" />
        </div>
    );
}

export default FsPNoticePromotion;

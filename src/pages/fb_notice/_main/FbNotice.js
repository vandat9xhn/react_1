import React from 'react';
import PropTypes from 'prop-types';
//
import HeaderNoticeContain from '../../../component/_header_pc/header_right/notice/contain/_main/HeaderNoticeContain';
// 
import './FbNotice.scss'

//
FbNotice.propTypes = {};

//
function FbNotice(props) {
    //
    return (
        <div className="FbNotice">
            <div className="FbNotice_contain w-500px margin-auto brs-8px-pc bg-primary box-shadow-1">
                <HeaderNoticeContain ref_scroll_elm={{ current: null }} />
            </div>
        </div>
    );
}

export default FbNotice;

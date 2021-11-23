import React from 'react';
import PropTypes from 'prop-types';
//
import HeaderMessContain from '../../../../component/_header_pc/header_right/message/contain/_main/HeaderMessContain';
// 
import './FbHeaderChatMb.scss';

//
FbHeaderChatMb.propTypes = {};

//
function FbHeaderChatMb(props) {
    //
    return (
        <div className="FbHeaderChatMb">
            <div className="FbHeaderChatMb_contain bg-primary">
                <HeaderMessContain ref_scroll_elm={{ current: null }} />
            </div>
        </div>
    );
}

export default FbHeaderChatMb;

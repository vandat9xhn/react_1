import React from 'react';
import PropTypes from 'prop-types';

import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
import IconSeen from '../../../../../_icons_svg/icons_status_message/icon_seen/IconSeen';
import NoticeDiv from '../../../../../component/some_div/notice_div/NoticeDiv';
import './FashionCartSuccess.scss';
//
FashionCartSuccess.propTypes = {
    
};

//
function FashionCartSuccess(props) {
    return (
        <NoticeDiv>
            <div className="FashionCartSuccess bg-loader brs-5px">
                <IconDiv Icon={IconSeen} size_icon="2.5rem">
                    Add Cart Success
                </IconDiv>
            </div>
        </NoticeDiv>
    );
}

export default FashionCartSuccess;
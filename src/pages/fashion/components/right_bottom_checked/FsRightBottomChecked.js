import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
// 
import './FsRightBottomChecked.scss';

//
FsRightBottomChecked.propTypes = {
    is_active: PropTypes.bool,
};

//
function FsRightBottomChecked({ is_active }) {
    //
    return (
        <div className={`FsRightBottomChecked ${is_active ? '' : 'display-none'}`}>
            <div className="FsRightBottomChecked_bg pos-abs right-0 bottom-0 bg-fashion-red"></div>

            <div className="FsRightBottomChecked_icon pos-abs right-0 bottom-0">
                <IconSent stroke="white" size_icon="0.75rem" />
            </div>
        </div>
    );
}

export default FsRightBottomChecked;

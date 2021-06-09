import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
import BadgeDiv from '../../../../some_div/badge_div/BadgeDiv';

//
HeaderMessageIcon.propTypes = {
    count_new: PropTypes.number,
    toggleOpenZoom: PropTypes.func,
};

//
function HeaderMessageIcon({ count_new, toggleOpenZoom }) {

    // 
    return (
        <div
            className="RightHeader__icon header_icon"
            onClick={toggleOpenZoom}
            title="message"
        >
            <IconsMenu x={200} y={200} />

            <div
                className='RightHeader__num-notice'
            >
                <BadgeDiv num={count_new} />
            </div>
        </div>
    );
}

export default HeaderMessageIcon;

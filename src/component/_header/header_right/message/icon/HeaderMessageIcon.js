import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';

//
HeaderMessageIcon.propTypes = {
    count_new_zoom: PropTypes.number,
    handleToggleOpenMessage: PropTypes.func,
};

//
function HeaderMessageIcon({ count_new_zoom, handleToggleOpenMessage }) {

    // 
    return (
        <div
            className="RightHeader__icon header_icon"
            onClick={handleToggleOpenMessage}
            title="message"
            num-notice={count_new_zoom || undefined}
        >
            <IconsMenu x={200} y={200} />

            <div
                className={
                    count_new_zoom ? 'RightHeader__num-notice' : 'display-none'
                }
            >
                {count_new_zoom}
            </div>
        </div>
    );
}

export default HeaderMessageIcon;

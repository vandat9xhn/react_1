import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
PageTick.propTypes = {
    size_icon: IconSent.propTypes.size_icon,
};

PageTick.defaultProps = {
    size_icon: '14px',
};

//
function PageTick({ size_icon }) {
    //
    function handleMouseEnter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    //
    return (
        <div className="PageTick pos-rel wh-100 brs-50 bg-blue">
            <div
                className="pos-abs-100 z-index-lv1 display-flex-center"
                onMouseEnter={handleMouseEnter}
                onMouseOver={handleMouseEnter}
            >
                <IconSent size_icon={size_icon} stroke="var(--white)" />
            </div>
        </div>
    );
}

export default PageTick;

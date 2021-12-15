import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
PageTickBtn.propTypes = {
    size_icon: IconSent.propTypes.size_icon,
};

PageTickBtn.defaultProps = {
    size_icon: '10px',
};

//
function PageTickBtn({ size_icon }) {
    //
    return (
        <div className="PageTickBtn pos-rel brs-50 bg-blue">
            <div className="pos-abs-100 z-index-lv1 display-flex-center">
                <IconSent size_icon={size_icon} stroke="var(--white)" />
            </div>
        </div>
    );
}

export default PageTickBtn;

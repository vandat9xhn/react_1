import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FashionSeeMoreOnTitle.scss';

//
FashionSeeMoreOnTitle.propTypes = {
    link_to: PropTypes.string,
    title: PropTypes.string,
    class_color: PropTypes.string,
};

FashionSeeMoreOnTitle.defaultProps = {
    class_color: 'color-fashion',
};

//
function FashionSeeMoreOnTitle({ link_to, title, class_color }) {
    //
    return (
        <Link
            to={link_to}
            className={`FashionSeeMoreOnTitle ${class_color} ${
                IS_MOBILE ? 'font-13px' : 'font-14px'
            }`}
        >
            <div className="FashionSeeMoreOnTitle_contain">
                <span className="FashionSeeMoreOnTitle_text">{title}</span>

                <IconsArrow x={200} size_icon="0.75rem" />
            </div>
        </Link>
    );
}

export default FashionSeeMoreOnTitle;

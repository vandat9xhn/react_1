import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';

//
FashionSeeMoreOnTitle.propTypes = {};

//
function FashionSeeMoreOnTitle({ link_to, title }) {
    //
    return (
        <Link to={link_to} className="FashionSeeMoreOnTitle">
            <div className="FashionSeeMoreOnTitle_contain padding-4px">
                <span className="FashionSeeMoreOnTitle_text text-red">
                    {title}
                </span>

                <IconsArrow x={200} size_icon="0.75rem" />
            </div>
        </Link>
    );
}

export default FashionSeeMoreOnTitle;

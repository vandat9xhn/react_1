import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FashionSeeMoreLastRow.scss';

//
FashionSeeMoreLastRow.propTypes = {
    link_to: PropTypes.string,
    title: PropTypes.string,
    class_color: PropTypes.string,
};

FashionSeeMoreLastRow.defaultProps = {
    class_color: 'color-fashion-mall',
};

//
function FashionSeeMoreLastRow({ link_to, title, class_color }) {
    //
    return (
        <Link to={link_to} className={`FashionSeeMoreLastRow ${class_color}`}>
            <div className="FashionSeeMoreLastRow_contain wh-100 display-flex-center flex-col">
                <div className="FashionSeeMoreLastRow_icon display-flex-center brs-50">
                    <IconsArrow x={200} size_icon="1rem" />
                </div>

                <div class_color="FashionSeeMoreLastRow_text">
                    <span className="font-12px">{title}</span>
                </div>
            </div>
        </Link>
    );
}

export default FashionSeeMoreLastRow;

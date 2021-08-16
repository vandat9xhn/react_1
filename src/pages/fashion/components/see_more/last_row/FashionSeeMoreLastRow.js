import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FashionSeeMoreLastRow.scss';

//
FashionSeeMoreLastRow.propTypes = {};

//
function FashionSeeMoreLastRow({ link_to, title }) {
    //
    return (
        <Link to={link_to} className="FashionSeeMoreLastRow">
            <div className="FashionSeeMoreLastRow_contain h-100per display-flex-center flex-col padding-8px">
                <div>
                    <span className="FashionSeeMoreLastRow_text text-red">
                        {title}
                    </span>
                </div>

                <div>
                    <div className="FashionSeeMoreLastRow_icon display-flex-center brs-50">
                        <IconsArrow x={200} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FashionSeeMoreLastRow;

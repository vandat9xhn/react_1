import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FashionBreadCrumb.scss';

//
FashionBreadCrumb.propTypes = {
    arr: PropTypes.arrayOf(PropTypes.string),
};

//
function FashionBreadCrumb({ arr }) {
    //
    return (
        <div className="FashionBreadCrumb">
            <div className="FashionBreadCrumb_row display-flex flex-wrap">
                <Link to="/fashion">Shopee</Link>

                {arr.map((text, ix) => (
                    <React.Fragment key={ix}>
                        <span className="FashionBreadCrumb_icon margin-x-5px">
                            <IconsArrow x={200} size_icon="0.75rem" />
                        </span>

                        <span className="text-secondary">{text}</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default FashionBreadCrumb;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../_icons_svg/icons_arrow/IconsArrow';
//
// import './BreadCrumb.scss';

//
BreadCrumb.propTypes = {
    link_arr: PropTypes.arrayOf(
        PropTypes.shape({
            link_to: PropTypes.string,
            name: PropTypes.string,
        })
    ),
};

//
function BreadCrumb({ link_arr }) {
    //
    return (
        <div className="BreadCrumb">
            <div className="BreadCrumb_row display-flex">
                <Link className="color-inherit" to={link_arr[0].link_to}>
                    {link_arr[0].name}
                </Link>

                {link_arr.slice(1).map((item, ix) => (
                    <React.Fragment key={ix}>
                        <span className="BreadCrumb_icon margin-x-10px text-third">
                            <IconsArrow x={200} size_icon="0.75rem" />
                        </span>

                        <Link className="color-inherit" to={item.link_to}>
                            {item.name}
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default BreadCrumb;

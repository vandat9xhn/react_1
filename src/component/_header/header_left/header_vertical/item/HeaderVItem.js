import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
//
import './HeaderVItem.scss';

//
HeaderVItem.propTypes = {};

//
function HeaderVItem({ item: { link_to, Icon, x, y, title } }) {
    //
    return (
        <NavLink
            className="normal-text"
            activeClassName="nav-active"
            to={link_to}
        >
            <h2 className="HeaderVItem margin-0 header_item nav-text">
                {Icon ? (
                    <IconDiv Icon={Icon} x={x} y={y}>
                        {title}
                    </IconDiv>
                ) : (
                    title
                )}
            </h2>
        </NavLink>
    );
}

export default HeaderVItem;

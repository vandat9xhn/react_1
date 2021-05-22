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
function HeaderVItem({item}) {
    const {link_to, Icon, x, y, title} = item;

    return (
        <NavLink
            className="normal-text"
            activeClassName="nav-active"
            to={link_to}
        >
            <div className="HeaderVItem header_item nav-bottom nav-text label-field">
                {Icon ? (
                    <IconDiv Icon={Icon} x={x} y={y}>
                        {title}
                    </IconDiv>
                ) : (
                    title
                )}
            </div>
        </NavLink>
    );
}

export default HeaderVItem;

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';

//
HeaderNewFeed.propTypes = {};

//
function HeaderNewFeed() {
    return (
        <div className="header_menu">
            <div>
                <NavLink to="/new-feed" activeClassName="nav-active">
                    <div className="header_icon" title="new feed">
                        <IconsMenu y={200} />
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default HeaderNewFeed;

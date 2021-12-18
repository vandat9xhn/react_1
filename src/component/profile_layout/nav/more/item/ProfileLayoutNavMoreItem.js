import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './ProfileLayoutNavMoreItem.scss';

//
ProfileLayoutNavMoreItem.propTypes = {};

//
function ProfileLayoutNavMoreItem({ title, link_to, isActive }) {
    //
    return (
        <NavLink
            className="ProfileLayoutNavMoreItem flex-between-center padding-8px brs-6px color-inherit hv-bg-fb"
            activeClassName="ProfileLayoutNavMoreItem-active"
            isActive={isActive}
            to={link_to}
        >
            <div>{title}</div>

            <div className="ProfileLayoutNavMoreItem_tick">
                <div className="ProfileLayoutNavMoreItem_tick_contain display-none">
                    <IconSent stroke="var(--blue)" />
                </div>
            </div>
        </NavLink>
    );
}

export default ProfileLayoutNavMoreItem;

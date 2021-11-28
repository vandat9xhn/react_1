import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './GroupPageNavMoreItem.scss';

//
GroupPageNavMoreItem.propTypes = {};

//
function GroupPageNavMoreItem({ title, link_to }) {
    //
    return (
        <NavLink
            className="GroupPageNavMoreItem flex-between-center padding-8px brs-6px color-inherit hv-bg-fb"
            activeClassName="GroupPageNavMoreItem-active"
            to={link_to}
        >
            <div>{title}</div>

            <div className="GroupPageNavMoreItem_tick">
                <div className="GroupPageNavMoreItem_tick_contain display-none">
                    <IconSent stroke="var(--blue)" />
                </div>
            </div>
        </NavLink>
    );
}

export default GroupPageNavMoreItem;

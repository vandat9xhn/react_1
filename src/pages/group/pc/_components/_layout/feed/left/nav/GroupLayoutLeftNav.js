import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
// 
import IconPlusSubtract from '../../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';

//
GroupLayoutLeftNav.propTypes = {};

//
function GroupLayoutLeftNav(props) {
    //
    return (
        <div className="GroupLayoutLeftNav padding-8px">
            {[
                {
                    title: 'Your feed',
                    Icon: null,
                    link_to: '/group/feed',
                },
                {
                    title: 'Discover',
                    Icon: null,
                    link_to: '/group/discover',
                },
                {
                    title: 'Your notifications',
                    Icon: null,
                    link_to: '/group/notifications',
                },
            ].map((item, ix) => (
                <div key={ix}>
                    <NavLink
                        className="display-flex align-items-center padding-x-8px padding-y-8px brs-6px line-20px text-333 font-500 hv-bg-fb"
                        activeClassName="bg-fb"
                        to={item.link_to}
                    >
                        <div className="margin-right-12px">{item.Icon}</div>

                        <div>{item.title}</div>
                    </NavLink>
                </div>
            ))}

            <div className="margin-top-10px margin-x-4px">
                <Link
                    className="display-flex-center padding-x-8px padding-y-8px brs-6px bg-fb-active line-20px font-500"
                    to="/group/create"
                >
                    <IconPlusSubtract size_icon="15px" stroke="currentColor" />

                    <span className="margin-left-5px">Create New Group</span>
                </Link>
            </div>
        </div>
    );
}

export default GroupLayoutLeftNav;

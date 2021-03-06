import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPlusSubtract from '../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
import IconBell from '../../../../../../../_icons_svg/icon_bell/IconBell';
//
import LeftBarNav from '../../../../../../../component/side_bar/left/nav/_main/LeftBarNav';
//
import './GroupLayoutLeftNav.scss';

//
GroupLayoutLeftNav.propTypes = {};

//
function GroupLayoutLeftNav({ ref_scroll_elm }) {
    //
    return (
        <div className="GroupLayoutLeftNav padding-x-8px">
            <div>
                <LeftBarNav
                    nav_arr={[
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
                            Icon: (
                                <IconBell fill="currentColor" stroke="none" />
                            ),
                            link_to: '/group/notifications',
                        },
                    ]}
                />
            </div>

            <div className="margin-top-10px margin-x-4px">
                <Link
                    className="display-flex-center padding-x-8px padding-y-8px brs-6px bg-fb-active line-20px font-500 hv-after-shadow-05"
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

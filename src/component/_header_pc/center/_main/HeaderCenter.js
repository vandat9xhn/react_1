import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';
import IconFriends from '../../../../_icons_svg/icon_friends/IconFriends';
import IconGroup from '../../../../_icons_svg/icon_group/IconGroup';
import IconWatch from '../../../../_icons_svg/watch/IconWatch';
import IconGaming from '../../../../_icons_svg/gaming/IconGaming';
//
import HeaderCenterItem from '../item/HeaderCenterItem';
//
import './HeaderCenter.scss';

//
HeaderCenter.propTypes = {};

//
function HeaderCenter(props) {
    //
    const [nav_arr, setNavArr] = useState([
        {
            Icon: <IconsMenu y={200} />,
            link_to: '/new-feed',
            title: 'New feed',
            count_new: 0,
        },
        {
            Icon: (
                <IconFriends
                    fill="none"
                    stroke_width={10}
                    stroke="currentColor"
                />
            ),
            link_to: '/friends',
            title: 'Friends',
            count_new: 0,
        },
        {
            Icon: <IconWatch />,
            link_to: '/watch',
            title: 'Watch',
            count_new: 0,
        },
        {
            Icon: <IconGroup stroke_width_circle={10} />,
            link_to: '/group/feed',
            title: 'Groups',
            count_new: 0,
        },
        {
            Icon: <IconGaming />,
            link_to: '/gaming',
            title: 'Gaming',
            count_new: 0,
        },
    ]);

    //
    return (
        <div className="HeaderCenter h-100per padding-y-3px">
            <ul className="display-flex-center list-none h-100per">
                {nav_arr.map((item, ix) => (
                    <li
                        key={ix}
                        className="HeaderCenter_item flex-grow-1 h-100per margin-5px"
                    >
                        <HeaderCenterItem
                            Icon={item.Icon}
                            link_to={item.link_to}
                            count_new={item.count_new}
                            title={item.title}
                        />
                    </li>
                ))}
            </ul>

            
        </div>
    );
}

export default HeaderCenter;

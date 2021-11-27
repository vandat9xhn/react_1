import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useHeaderNotFixed } from '../../../_hooks/useHeaderNotFixed';
// 
import IconsMenu from '../../../_icons_svg/icons_menu/IconsMenu';
import IconFriends from '../../../_icons_svg/icon_friends/IconFriends';
import IconWatch from '../../../_icons_svg/watch/IconWatch';
import IconGroup from '../../../_icons_svg/icon_group/IconGroup';
import IconBell from '../../../_icons_svg/icon_bell/IconBell';
//
import HeaderItemMb from '../item/HeaderItemMb';
//
import './HeaderMobile.scss';

//
HeaderMobile.propTypes = {};

//
function HeaderMobile(props) {
    //
    const [state_obj, setStateObj] = useState({
        count_new_feed: 0,
        count_new_notice: 0,
        count_new_chat: 0,

        count_new_friends: 0,
        count_new_group: 0,
        count_new_watch: 0,
    });

    const {
        count_new_feed,
        count_new_notice,
        count_new_chat,

        count_new_friends,
        count_new_group,
        count_new_watch,
    } = state_obj;

    // 
    useHeaderNotFixed()

    // ----

    const link_arr = [
        {
            Icon: <IconsMenu y={200} />,
            link_to: '/new-feed',
            count_new: count_new_feed,
        },
        {
            Icon: <IconFriends />,
            link_to: '/friends',
            count_new: count_new_friends,
        },
        {
            Icon: <IconsMenu x={200} y={200} />,
            link_to: '/fb-chat',
            count_new: count_new_chat,
        },

        {
            Icon: <IconWatch />,
            link_to: '/watch',
            count_new: count_new_watch,
        },
        {
            Icon: <IconBell />,
            link_to: '/fb-notice',
            count_new: count_new_notice,
        },
        {
            Icon: <IconGroup />,
            link_to: '/group',
            count_new: count_new_group,
        },
        {
            Icon: <IconsMenu />,
            link_to: '/fb-menu',
            count_new: 0,
        },
    ];

    //
    return (
        <div className="HeaderMobile bg-primary box-shadow-1">
            <ul className="list-none h-100per flex-between-center">
                {link_arr.map((item, ix) => (
                    <li key={ix} className="HeaderMobile_item">
                        <HeaderItemMb
                            Icon={item.Icon}
                            link_to={item.link_to}
                            count_new={item.count_new}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderMobile;

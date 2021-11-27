import React from 'react';
// 
import { IS_MOBILE } from '../../../_constant/Constant';
//
import IconGaming from '../../../_icons_svg/gaming/IconGaming';
import IconsMenu from '../../../_icons_svg/icons_menu/IconsMenu';
import IconsProfile from '../../../_icons_svg/icons_profile/IconsProfile';
import IconCity from '../../../_icons_svg/icon_city/IconCity';
import IconFriends from '../../../_icons_svg/icon_friends/IconFriends';
import IconGroup from '../../../_icons_svg/icon_group/IconGroup';
import IconLearn from '../../../_icons_svg/icon_learn/IconLearn';
import IconWatch from '../../../_icons_svg/watch/IconWatch';

//
export const DATA_HEADER_MENU = [
    {
        title: 'New Feed',
        link_to: '/new-feed',
        Icon: <IconsMenu y={200} />,
    },
    {
        title: 'Friends',
        link_to: '/friends',
        Icon: <IconFriends />,
    },
    {
        title: 'Group',
        link_to: IS_MOBILE ? '/group' : '/group/feed',
        Icon: <IconGroup />,
    },
    {
        title: 'Watch',
        link_to: '/watch',
        Icon: <IconWatch />,
    },
    {
        title: 'Gaming',
        link_to: '/gaming',
        Icon: <IconGaming />,
    },

    {
        title: 'Home',
        link_to: '/home',
        Icon: <IconsMenu x={200} />,
    },
    {
        title: 'Phone Laptop',
        link_to: '/phone-laptop',
        Icon: <IconsProfile y={200} />,
    },
    {
        title: 'Shopping',
        link_to: '/fashion',
        Icon: <IconsMenu x={400} />,
    },
    {
        title: 'City',
        link_to: '/city-street',
        Icon: <IconCity />,
    },
    {
        title: 'Learn',
        Icon: <IconLearn />,
        link_to: '/learn-html',
    },
];

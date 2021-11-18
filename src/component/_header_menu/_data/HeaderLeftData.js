import React from 'react';
//
import IconsMenu from '../../../_icons_svg/icons_menu/IconsMenu';
import IconsProfile from '../../../_icons_svg/icons_profile/IconsProfile';
import IconCity from '../../../_icons_svg/icon_city/IconCity';
import IconFriends from '../../../_icons_svg/icon_friends/IconFriends';
import IconGroup from '../../../_icons_svg/icon_group/IconGroup';
import IconLearn from '../../../_icons_svg/icon_learn/IconLearn';

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
        link_to: '/group/feed',
        Icon: <IconGroup />,
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
        Icon: <IconsMenu y={400} />,
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

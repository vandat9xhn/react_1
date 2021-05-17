import React from 'react';
// 
import IconLike from '../../../../_icons_svg/icons_like/icon_like/IconLike';
import IconHeart from '../../../../_icons_svg/icons_like/icon_heart/IconHeart';
import IconSad from '../../../../_icons_svg/icons_like/icon_sad/IconSad';
import IconLaugh from '../../../../_icons_svg/icons_like/icon_laugh/IconLaugh';
import IconWow from '../../../../_icons_svg/icons_like/icon_wow/IconWow';
import IconAngry from '../../../../_icons_svg/icons_like/icon_angry/IconAngry';

//
export const type_likes = [
    {
        title: 'like',
        component: <IconLike />,
    },
    {
        title: 'heart',
        component: <IconHeart />,
    },
    {
        title: 'sad',
        component: <IconSad />,
    },
    {
        title: 'laugh',
        component: <IconLaugh />,
    },
    {
        title: 'wow',
        component: <IconWow />,
    },
    {
        title: 'angry',
        component: <IconAngry />,
    },
];

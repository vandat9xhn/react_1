import React from 'react';
//
import IconFriend from '../../_icons_svg/icon_friend/IconFriend';
import IconFriends from '../../_icons_svg/icon_friends/IconFriends';
import IconPrivate from '../../_icons_svg/icon_private/IconPrivate';
import IconPublic from '../../_icons_svg/icon_public/IconPublic';
import IconSetting from '../../_icons_svg/icon_setting/IconSetting';

//
export const IconsPermission = [
    { Icon: <IconPublic />, title: 'Public' },
    { Icon: <IconFriend />, title: 'Friend' },
    { Icon: <IconFriends />, title: 'Friend of friend' },
    { Icon: <IconSetting />, title: 'Setting' },
    { Icon: <IconPrivate />, title: 'Private' },
];

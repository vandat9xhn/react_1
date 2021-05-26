import React from 'react';
// 
import IconsAction from '../../_icons_svg/icons_action/IconsAction';
import IconPrivate from '../../_icons_svg/icon_private/IconPrivate';
import IconPublic from '../../_icons_svg/icon_public/IconPublic';
import IconSetting from '../../_icons_svg/icon_setting/IconSetting';

//
export const IconsPermission = [
    {Icon: <IconPublic />, title: 'Public'},
    {Icon: <IconsAction y={200}/>, title: 'Friend'},
    {Icon: <IconsAction x={400} />, title: 'Friend of friend'},
    {Icon: <IconSetting />, title: 'Setting'},
    {Icon: <IconPrivate />, title: 'Private'},
];

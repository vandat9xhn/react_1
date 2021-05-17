import IconsAction from '../../_icons_svg/icons_action/IconsAction';
import IconPrivate from '../../_icons_svg/icon_private/IconPrivate';
import IconPublic from '../../_icons_svg/icon_public/IconPublic';
import IconSetting from '../../_icons_svg/icon_setting/IconSetting';

//
export const IconsPermission = [
    {Icon: IconPublic, data_icon: {}, title: 'Public'},
    {Icon: IconsAction, data_icon: {y: 200}, title: 'Friend'},
    {Icon: IconsAction, data_icon: {x: 400}, title: 'Friend of friend'},
    {Icon: IconSetting, data_icon: {}, title: 'Setting'},
    {Icon: IconPrivate, data_icon: {}, title: 'Private'},
];

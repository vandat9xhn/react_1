import IconsMenu from "../../../../_icons_svg/icons_menu/IconsMenu";
import IconsProfile from "../../../../_icons_svg/icons_profile/IconsProfile";
import IconCity from "../../../../_icons_svg/icon_city/IconCity";
import IconLearn from "../../../../_icons_svg/icon_learn/IconLearn";

//
export const data_menu_left = [
    {
        link_to: '/home',
        x: 200,
        y: 0,
        title: 'Home',
        Icon: IconsMenu,
    },
    {
        link_to: '/phone-laptop',
        x: 0,
        y: 200,
        title: 'Phone Laptop',
        Icon: IconsProfile,
    },
    {
        link_to: '/fashion',
        x: 400,
        y: 0,
        title: 'Shopping',
        Icon: IconsMenu,
    },
    {
        link_to: '/city-street',
        x: 0,
        y: 0,
        title: 'City',
        Icon: IconCity,
    },
    {
        has_sub: true,
        title: 'Learn',
        Icon: IconLearn,
        x: 0,
        y: 0,
        sub_list: [
            {
                link_to: '/learn-html',
                x: 0,
                y: 0,
                title: 'HTML',
                Icon: undefined,
            },
        ],
    },
];
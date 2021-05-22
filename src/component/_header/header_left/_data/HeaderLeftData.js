import IconsMenu from "../../../../_icons_svg/icons_menu/IconsMenu";
import IconsProfile from "../../../../_icons_svg/icons_profile/IconsProfile";

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
        Icon: undefined,
    },
    {
        has_sub: true,
        title: 'Learn',
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
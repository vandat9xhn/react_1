import React from 'react';
//
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';
import IconsProfile from '../../../../../../_icons_svg/icons_profile/IconsProfile';
import IconBell from '../../../../../../_icons_svg/icon_bell/IconBell';

//
export const link_fs_personal_arr = [
    {
        title: 'Tài khoản của tôi',
        has_sub: true,
        base_link: 'account/',
        link: 'account/profile',
        Icon: <IconsAction y={200} size_icon="20px" />,
        sub_list: [
            {
                title: 'Hồ sơ',
                link: 'account/profile',
            },
            {
                title: 'Ngân hàng',
                link: 'account/bank',
            },
            {
                title: 'Địa chỉ',
                link: 'account/contact',
            },
            {
                title: 'Đổi mật khẩu',
                link: 'account/password',
            },
        ],
    },

    {
        title: 'Đơn mua',
        has_sub: false,
        link: 'purchase',
        Icon: <IconsProfile size_icon="20px" />,
    },

    {
        title: 'Thông báo',
        has_sub: true,
        link: 'notifications/order',
        base_link: 'notifications/',
        Icon: <IconBell size_icon="18px" stroke="var(--primary-08)" />,
        sub_list: [
            {
                title: 'Cập nhật đơn hàng',
                link: 'notifications/order',
            },
            {
                title: 'Khuyến mãi',
                link: 'notifications/promotion',
            },
            {
                title: 'Cập nhật ví',
                link: 'notifications/wallet',
            },
            {
                title: 'Hoạt động',
                link: 'notifications/activity',
            },
            {
                title: 'Cập nhật đánh giá',
                link: 'notifications/rating',
            },
            {
                title: 'Cập nhật chung',
                link: 'notifications/common',
            },
        ],
    },

    {
        title: 'Kho voucher',
        has_sub: false,
        link: 'voucher',
        Icon: <IconsProfile size_icon="20px" />,
    },

    {
        title: 'Xu',
        has_sub: false,
        link: 'coin',
        Icon: <IconsProfile size_icon="20px" />,
    },
];

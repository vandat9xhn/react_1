import React from 'react';

// ------

const PersonalProfile = React.lazy(() =>
    import('../right/profile/_main/FsPersonalProfile')
);

const FsPersonalAddress = React.lazy(() =>
    import('../right/address/_main/FsPersonalAddress')
);

//
const FsPersonalPurchase = React.lazy(() =>
    import('../right/purchase/_main/FsPersonalPurchase')
);

const PromotionFreeShip = React.lazy(() =>
    import('../right/free_ship/PromotionFreeShip')
);

// -------

const Notifications = React.lazy(() =>
    import('../right/notifications/Notifications')
);

// -------

const PromotionVoucher = React.lazy(() =>
    import('../right/voucher/PromotionVoucher')
);

//
export const FashionRoutes = [
    //
    {
        pathname: '/fashion/user/account/profile',
        component: PersonalProfile,
    },
    {
        pathname: '/fashion/user/account/bank',
        component: FsPersonalAddress,
    },
    {
        pathname: '/fashion/user/account/contact',
        component: FsPersonalAddress,
    },
    {
        pathname: '/fashion/user/account/password',
        component: FsPersonalAddress,
    },

    //
    {
        pathname: '/fashion/user/purchase',
        component: FsPersonalPurchase,
    },

    //
    {
        pathname: '/fashion/user/notifications/order',
        component: Notifications,
    },
    {
        pathname: '/fashion/user/notifications/promotion',
        component: Notifications,
    },
    {
        pathname: '/fashion/user/notifications/wallet',
        component: Notifications,
    },
    {
        pathname: '/fashion/user/notifications/activity',
        component: Notifications,
    },
    {
        pathname: '/fashion/user/notifications/rating',
        component: Notifications,
    },
    {
        pathname: '/fashion/user/notifications/common',
        component: Notifications,
    },

    //
    {
        pathname: '/fashion/user/voucher',
        component: PromotionVoucher,
    },
    {
        pathname: '/fashion/user/coin',
        component: PromotionFreeShip,
    },
];

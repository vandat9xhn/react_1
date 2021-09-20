import React from 'react';

// ------

const PersonalProfile = React.lazy(() =>
    import('../right/account/profile/_main/FsPersonalProfile')
);

const FsPersonalBank = React.lazy(() =>
    import('../right/account/bank/_main/FsPersonalBank')
);

const FsPersonalAddress = React.lazy(() =>
    import('../right/account/address/_main/FsPersonalAddress')
);

const FsPersonalChangePass = React.lazy(() =>
    import('../right/account/change_password/_main/FsPersonalChangePass')
);

//
const FsPersonalPurchase = React.lazy(() =>
    import('../right/purchase/_main/FsPersonalPurchase')
);

const FsPersonalCoin = React.lazy(() =>
    import('../right/coin/_main/FsPersonalCoin')
);

// -------

const FsPNoticeActivity = React.lazy(() =>
    import('../right/notifications/activity/_main/FsPNoticeActivity')
);

const FsPNoticeCommon = React.lazy(() =>
    import('../right/notifications/common/_main/FsPNoticeCommon')
);

const FsPNoticeOrder = React.lazy(() =>
    import('../right/notifications/order/_main/FsPNoticeOrder')
);

const FsPNoticePromotion = React.lazy(() =>
    import('../right/notifications/promotion/_main/FsPNoticePromotion')
);

const FsPNoticeRating = React.lazy(() =>
    import('../right/notifications/rating/_main/FsPNoticeRating')
);

const FsPNoticeWallet = React.lazy(() =>
    import('../right/notifications/wallet/_main/FsPNoticeWallet')
);

// -------

const FsPersonalVoucher = React.lazy(() =>
    import('../right/voucher/_main/FsPersonalVoucher')
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
        component: FsPersonalBank,
    },
    {
        pathname: '/fashion/user/account/contact',
        component: FsPersonalAddress,
    },
    {
        pathname: '/fashion/user/account/password',
        component: FsPersonalChangePass,
    },

    //
    {
        pathname: '/fashion/user/purchase',
        component: FsPersonalPurchase,
    },

    {
        pathname: '/fashion/user/purchase/order/:id',
        component: FsPersonalPurchase,
    },

    //
    {
        pathname: '/fashion/user/notifications/order',
        component: FsPNoticeOrder,
    },
    {
        pathname: '/fashion/user/notifications/promotion',
        component: FsPNoticePromotion,
    },
    {
        pathname: '/fashion/user/notifications/wallet',
        component: FsPNoticeWallet,
    },
    {
        pathname: '/fashion/user/notifications/activity',
        component: FsPNoticeActivity,
    },
    {
        pathname: '/fashion/user/notifications/rating',
        component: FsPNoticeRating,
    },
    {
        pathname: '/fashion/user/notifications/common',
        component: FsPNoticeCommon,
    },

    //
    {
        pathname: '/fashion/user/voucher',
        component: FsPersonalVoucher,
    },
    {
        pathname: '/fashion/user/coin',
        component: FsPersonalCoin,
    },
];

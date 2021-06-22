import React from 'react';
//
const BillBuying = React.lazy(() =>
    import('../col_right/buying/_main/BillBuying')
);
const BillCancel = React.lazy(() =>
    import('../col_right/cancel/_main/BillCancel')
);
const PersonalContact = React.lazy(() =>
    import('../col_right/contact/PersonalContact')
);
const PromotionFreeShip = React.lazy(() =>
    import('../col_right/free_ship/PromotionFreeShip')
);
const PersonalInformation = React.lazy(() =>
    import('../col_right/information/PersonalInformation')
);
const Notifications = React.lazy(() =>
    import('../col_right/notifications/Notifications')
);
const PromotionVoucher = React.lazy(() =>
    import('../col_right/voucher/PromotionVoucher')
);

//
export const fashion_path_arr = [
    '/user',
    '/bill',
    '/notifications',
    '/promotion',
];

//
export const FashionRoutes = [
    //
    {
        pathname: '/fashion/personal/user/info',
        component: PersonalInformation,
        is_active: false,
        is_loaded: false,
        props: {},
    },
    {
        pathname: '/fashion/personal/user/contact',
        component: PersonalContact,
        is_active: false,
        is_loaded: false,
        props: {},
    },

    //
    {
        pathname: '/fashion/personal/bill/buying',
        component: BillBuying,
        is_active: false,
        is_loaded: false,
        props: {},
    },
    {
        pathname: '/fashion/personal/bill/cancel',
        component: BillCancel,
        is_active: false,
        is_loaded: false,
        props: {},
    },

    //
    {
        pathname: '/fashion/personal/notifications',
        component: Notifications,
        is_active: false,
        is_loaded: false,
        props: {},
    },

    //
    {
        pathname: '/fashion/personal/promotion/voucher',
        component: PromotionVoucher,
        is_active: false,
        is_loaded: false,
        props: {},
    },
    {
        pathname: '/fashion/personal/promotion/free-ship',
        component: PromotionFreeShip,
        is_active: false,
        is_loaded: false,
        props: {},
    },
];

//
export const fashion_person_pathname_arr = FashionRoutes.reduce(
    (a, b) => a + b.pathname,
    ''
);

import React from 'react';
// 
// import BillBought from '../col_right/bought/BillBought';
// import BillBuying from '../col_right/buying/BillBuying';
// import BillCancel from '../col_right/cancel/BillCancel';
// import PersonalContact from '../col_right/contact/PersonalContact';
// import PromotionFreeShip from '../col_right/free_ship/PromotionFreeShip';
// import PersonalInformation from '../col_right/information/PersonalInformation';
// import Notifications from '../col_right/notifications/Notifications';
// import PromotionVoucher from '../col_right/voucher/PromotionVoucher';


// const BillBought = React.lazy(() => import('../col_right/bought/BillBought'));
const BillBuying = React.lazy(() => import('../col_right/buying/_main/BillBuying'));
const BillCancel = React.lazy(() => import('../col_right/cancel/_main/BillCancel'));
const PersonalContact = React.lazy(() => import('../col_right/contact/PersonalContact'));
const PromotionFreeShip = React.lazy(() => import('../col_right/free_ship/PromotionFreeShip'));
const PersonalInformation = React.lazy(() => import('../col_right/information/PersonalInformation'));
const Notifications = React.lazy(() => import('../col_right/notifications/Notifications'));
const PromotionVoucher = React.lazy(() => import('../col_right/voucher/PromotionVoucher'));

// 
export const fashion_path_arr = ['/user', '/bill', '/notifications', '/promotion']

// 
export const FashionRoutes = [
    //
    {
        path: '/fashion/personal/user/info',
        component: PersonalInformation,
    },
    {
        path: '/fashion/personal/user/contact',
        component: PersonalContact, 
    },

    //
    {
        path: '/fashion/personal/bill/buying',
        component: BillBuying, 
    },
    // {
    //     path: '/fashion/personal/bill/bought',
    //     component: BillBought, 
    // },
    {
        path: '/fashion/personal/bill/cancel',
        component: BillCancel, 
    },

    //
    {
        path: '/fashion/personal/notifications',
        component: Notifications, 
    },

    //
    {
        path: '/fashion/personal/promotion/voucher',
        component: PromotionVoucher, 
    },
    {
        title: 'Free Ship',
        path: '/fashion/personal/promotion/free-ship',
        component: PromotionFreeShip, 
    },
];

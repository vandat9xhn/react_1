import React from 'react';

//
const WatchHome = React.lazy(() => import('../pages/home/_main/WatchHome'));

//
export const watchRoutes = [
    {
        path: '/watch/home',
        component: WatchHome,
    },
];

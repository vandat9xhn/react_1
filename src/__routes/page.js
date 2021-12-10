import React from 'react';

//
const FbPage = React.lazy(() => import('../pages/page/_main/FbPage'));

//
export const fb_page_route_arr = [
    {
        path: '/page/:id',
        component: FbPage,
        exact: false,
        auth: true,
    },
];

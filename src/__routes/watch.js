import React from 'react';

//
const Watch = React.lazy(() => import('../pages/watch/_main/Watch'));

//
export const fb_watch_route_arr = [
    {
        path: '/watch',
        component: Watch,
        exact: false,
        auth: false,

        title: 'Watch',
    },
];

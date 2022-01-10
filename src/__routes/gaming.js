import React from 'react';

//
const Gaming = React.lazy(() =>
    import('../component/working_on_it/WorkingOnIt')
);

//
export const fb_gaming_route_arr = [
    {
        path: '/gaming',
        component: Gaming,
        exact: true,
        auth: false,

        title: 'Gaming'
    },
];

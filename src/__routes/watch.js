import React from 'react';

//
const Watch = React.lazy(() =>
    import('../component/working_on_it/WorkingOnIt')
);

//
export const fb_watch_route_arr = [
    {
        path: '/watch',
        component: Watch,
        exact: true,
        auth: false,
        
        title: 'Watch'
    },
];

import React from 'react';

//
const GroupFeed = React.lazy(() =>
    import('../pages/group/pc/pages/feed/_main/GroupFeed')
);

const GroupDiscover = React.lazy(() =>
    import('../pages/group/pc/pages/discover/_main/GroupDiscover')
);

//
export const fb_group_route_arr = [
    {
        path: '/group/feed',
        component: GroupFeed,
        exact: true,
        auth: true,
    },
    {
        path: '/group/discover',
        component: GroupDiscover,
        exact: true,
        auth: true,
    },
];

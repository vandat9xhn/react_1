import React from 'react';

//
const GroupFeed = React.lazy(() =>
    import('../pages/group/pc/pages/feed/_main/GroupFeed')
);

//
export const fb_group_route_arr = [
    {
        path: '/group/feed',
        component: GroupFeed,
        exact: true,
        auth: true,
    },
];

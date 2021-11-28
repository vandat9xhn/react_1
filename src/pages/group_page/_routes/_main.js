import React from 'react';

//
const GroupPageDiscuss = React.lazy(() =>
    import('../pages/discuss/_main/GroupPageDiscuss')
);

//
export const GroupPageRoutes = [
    {
        component: GroupPageDiscuss,
        path: '/group/:id/discuss',
    },
];

import React from 'react';

//
const GroupPageDiscuss = React.lazy(() =>
    import('../pages/discuss/_main/GroupPageDiscuss')
);

const GroupPageTopics = React.lazy(() =>
    import('../pages/topics/_main/GroupPageTopics')
);

const WorkingOnIt = React.lazy(() =>
    import('../../../component/working_on_it/WorkingOnIt')
);

//
export const GroupPageRoutes = [
    {
        component: WorkingOnIt,
        path: '/group/:id/about',
    },
    {
        component: GroupPageDiscuss,
        path: '/group/:id/discuss',
    },
    {
        component: WorkingOnIt,
        path: '/group/:id/members',
    },
    {
        component: GroupPageTopics,
        path: '/group/:id/topics',
    },

    {
        component: WorkingOnIt,
        path: '/group/:id/media',
    },
    {
        component: WorkingOnIt,
        path: '/group/:id/files',
    },
];

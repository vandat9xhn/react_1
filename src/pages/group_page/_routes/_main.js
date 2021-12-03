import React from 'react';

//
const GroupPageAbout = React.lazy(() =>
    import('../pages/about/_main/GroupPageAbout')
);

const GroupPageDiscuss = React.lazy(() =>
    import('../pages/discuss/_main/GroupPageDiscuss')
);

const GroupPageTopics = React.lazy(() =>
    import('../pages/topics/_main/GroupPageTopics')
);

const GroupPageMembers = React.lazy(() =>
    import('../pages/members/_main/GroupPageMembers')
);

const GroupPageMedia = React.lazy(() =>
    import('../pages/media/_main/GroupPageMedia')
);

const WorkingOnIt = React.lazy(() =>
    import('../../../component/working_on_it/WorkingOnIt')
);

//
export const GroupPageRoutes = [
    {
        component: GroupPageAbout,
        path: '/group/:id/about',
    },
    {
        component: GroupPageDiscuss,
        path: '/group/:id/discuss',
    },
    {
        component: GroupPageMembers,
        path: '/group/:id/members',
    },
    {
        component: GroupPageTopics,
        path: '/group/:id/topics',
    },

    {
        component: GroupPageMedia,
        path: '/group/:id/media',
    },
    {
        component: WorkingOnIt,
        path: '/group/:id/files',
    },
];

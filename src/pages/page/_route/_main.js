import React from 'react';

//
const FbPageHome = React.lazy(() => import('../pages/home/_main/FbPageHome'));
const FbPageAbout = React.lazy(() =>
    import('../pages/about/_main/FbPageAbout')
);

const WorkingOnIt = React.lazy(() =>
    import('../../../component/working_on_it/WorkingOnIt')
);

//
const FbPageRoutes = [
    {
        path: '/page/:id/home',
        component: FbPageHome,
    },
    {
        path: '/page/:id/about',
        component: FbPageAbout,
    },
    {
        path: '/page/:id/videos',
        component: WorkingOnIt,
    },
    {
        path: '/page/:id/photos',
        component: WorkingOnIt,
    },

    {
        path: '/page/:id/events',
        component: WorkingOnIt,
    },
    {
        path: '/page/:id/community',
        component: WorkingOnIt,
    },
    {
        path: '/page/:id/group',
        component: WorkingOnIt,
    },
];

export default FbPageRoutes;

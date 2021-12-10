import React from 'react';

//
const FbPageHome = React.lazy(() => import('../pages/home/_main/FbPageHome'));

//
const FbPageRoutes = [
    {
        path: '/page/:id/home',
        component: FbPageHome,
    },
];

export default FbPageRoutes;

import React from 'react';
//

//
const FbNotice = React.lazy(() => import('../pages/fb_notice/_main/FbNotice'));

const FbHeaderChat = React.lazy(() =>
    import('../pages/fb_header_chat/_main/FbHeaderChat')
);

const FbMenu = React.lazy(() => import('../pages/fb_menu/_main/FbMenu'));

//
export const fb_header_route_arr = [
    {
        path: '/fb-notice',
        component: FbNotice,
        exact: true,
        auth: true,
        
        title: 'Notice',
    },
    {
        path: '/fb-chat',
        component: FbHeaderChat,
        exact: true,
        auth: true,
        
        title: 'Chat',
    },
    {
        path: '/fb-menu',
        component: FbMenu,
        exact: true,
        auth: false,
        
        title: 'Menu',
    },
];

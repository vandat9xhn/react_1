import React from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';

//
const GroupHomeMb = React.lazy(() =>
    import('../pages/group/mobile/pages/home/_main/GroupHomeMb')
);

const GroupFeedMb = React.lazy(() =>
    import('../pages/group/mobile/pages/feed/_main/GroupFeedMb')
);

const GroupDiscoverMb = React.lazy(() =>
    import('../pages/group/mobile/pages/discover/_main/GroupDiscoverMb')
);

const GroupNoticeMb = React.lazy(() =>
    import('../pages/group/mobile/pages/notice/_main/GroupNoticeMb')
);

//
const GroupFeed = React.lazy(() =>
    import('../pages/group/pc/pages/feed/_main/GroupFeed')
);

const GroupDiscover = React.lazy(() =>
    import('../pages/group/pc/pages/discover/_main/GroupDiscover')
);

const GroupNotice = React.lazy(() =>
    import('../pages/group/pc/pages/notice/_main/GroupNotice')
);

const WorkingOnIt = React.lazy(() =>
    import('../component/working_on_it/WorkingOnIt')
);

const GroupPage = React.lazy(() =>
    import('../pages/group_page/_main/GroupPage')
);

//
export const fb_group_route_arr = [
    {
        path: '/group',
        component: GroupHomeMb,
        exact: true,
        auth: true,

        title: 'Group',
    },

    {
        path: '/group/feed',
        component: IS_MOBILE ? GroupFeedMb : GroupFeed,
        exact: true,
        auth: true,

        title: 'Group feed',
    },
    {
        path: '/group/discover',
        component: IS_MOBILE ? GroupDiscoverMb : GroupDiscover,
        exact: true,
        auth: true,

        title: 'Group discover',
    },
    {
        path: '/group/notifications',
        component: IS_MOBILE ? GroupNoticeMb : GroupNotice,
        exact: true,
        auth: true,

        title: 'Group notifications',
    },
    {
        path: '/group/categories',
        component: WorkingOnIt,
        exact: true,
        auth: true,

        title: 'Group categories',
    },
    {
        path: '/group/create',
        component: WorkingOnIt,
        exact: true,
        auth: true,

        title: 'Create Group',
    },

    {
        path: '/group/:id',
        component: GroupPage,
        exact: false,
        auth: true,

        title: 'Group',
    },
];

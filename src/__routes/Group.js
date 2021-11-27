import React from 'react';
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

//
export const fb_group_route_arr = [
    {
        path: '/group',
        component: GroupHomeMb,
        exact: true,
        auth: true,
    },

    {
        path: '/group/feed',
        component: IS_MOBILE ? GroupFeedMb : GroupFeed,
        exact: true,
        auth: true,
    },
    {
        path: '/group/discover',
        component: IS_MOBILE ? GroupDiscoverMb : GroupDiscover,
        exact: true,
        auth: true,
    },
    {
        path: '/group/notifications',
        component: IS_MOBILE ? GroupNoticeMb : GroupNotice,
        exact: true,
        auth: true,
    },

    {
        path: '/group/:id',
        component: WorkingOnIt,
        exact: true,
        auth: true,
    },
    {
        path: '/page/:id',
        component: WorkingOnIt,
        exact: true,
        auth: true,
    },
];

import React from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';

//
const Watch = React.lazy(() => import('../pages/watch/_main/Watch'));

const WatchLayoutLeft = React.lazy(() =>
    import('../pages/watch/_components/layout/left/_main/WatchLayoutLeft')
);
const WatchHome = React.lazy(() =>
    import('../pages/watch/pages/home/_main/WatchHome')
);

//
export const fb_watch_route_arr = [
    ...(IS_MOBILE
        ? [
              {
                  path: '/watch/home',
                  component: WatchHome,
                  exact: true,
                  auth: false,

                  title: 'Watch home',
              },
          ]
        : []),

    {
        path: '/watch',
        component: IS_MOBILE ? WatchLayoutLeft : Watch,
        exact: IS_MOBILE,
        auth: false,

        title: 'Watch',
    },
];

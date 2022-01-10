import React from 'react';
import { IS_MOBILE } from '../_constant/Constant';

//
import { account_route_arr } from './_Account';

import { fb_header_route_arr } from './fb_header';
import { profile_route_arr } from './_ProfilePost';
import { friend_route_arr } from './_Friends';
import { story_route_arr } from './_story';

import { fb_search_route_arr } from './fb_search';
import { fb_group_route_arr } from './Group';
import { fb_page_route_arr } from './page';

import { fb_watch_route_arr } from './watch';
import { fb_gaming_route_arr } from './gaming';

import { fashion_route_arr } from './_Fashion';
import { phone_route_arr } from './_Phone';
import { city_route_arr } from './_City';

//
const Home = React.lazy(() => import('../pages/home/_main/Home'));

const LearnHTML = React.lazy(() => import('../pages/learn/_main/LearnHTML'));
const WorkingOnIt = React.lazy(() =>
    import('../component/working_on_it/WorkingOnIt')
);

const ChatMobile = React.lazy(() =>
    import('../component/_chat/mobile/_main/ChatMobile')
);

//
export const Routes = [
    {
        path: '/home',
        component: Home,
        auth: false,
        exact: true,
        
        title: 'Home',
    },

    ...account_route_arr,

    ...fb_header_route_arr,
    ...profile_route_arr,
    ...friend_route_arr,
    ...story_route_arr,

    ...fb_search_route_arr,
    ...fb_group_route_arr,
    ...fb_page_route_arr,

    ...fb_watch_route_arr,
    ...fb_gaming_route_arr,

    ...phone_route_arr,
    ...city_route_arr,
    ...fashion_route_arr,

    {
        path: '/learn-html',
        component: LearnHTML,
        exact: true,
        auth: false,

        title: 'Learn',
    },
    {
        path: '/working-on-it',
        component: WorkingOnIt,
        exact: false,
        auth: false,

        title: 'Working on it',
    },

    ...(IS_MOBILE
        ? [
              {
                  path: '/chat/:id',
                  component: ChatMobile,
                  auth: true,
                  exact: true,

                  title: 'Chat',
              },
          ]
        : []),
];

import React from 'react';
// 
import { account_route_arr } from './_Account';
import { city_route_arr } from './_City';
import { fashion_route_arr } from './_Fashion';
import { phone_route_arr } from './_Phone';
import { profile_route_arr } from './_ProfilePost';
import { story_route_arr } from './_story';

//
const Home = React.lazy(() => import('../pages/home/_main/Home'));

const LearnHTML = React.lazy(() => import('../pages/learn/_main/LearnHTML'));

//
export const Routes = [
    // {
    //     path: '/home',
    //     component: Home,
    //     export: true,
    //     reset_position: true,
    // },

    // ...account_route_arr,
    // ...profile_route_arr,
    ...phone_route_arr,
    // ...city_route_arr,
    // ...fashion_route_arr,
    // ...story_route_arr,

    // {
    //     path: '/learn-html',
    //     component: LearnHTML,
    //     export: true,
    //     reset_position: true,
    // },
];

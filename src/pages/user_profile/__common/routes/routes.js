import React from 'react';
// 
import { about_search_arr } from '../../user_pages/about/__common/routes/routes';
import { photos_search_arr } from '../../user_pages/photo/__common/routes/routes';

//
const ProfileHome = React.lazy(() =>
    import('../../user_pages/home/_main/ProfileHome')
);
const ProfileAbout = React.lazy(() =>
    import('../../user_pages/about/_main/ProfileAbout')
);
const ProfileFriend = React.lazy(() =>
    import('../../user_pages/friend/_main/ProfileFriend')
);
const ProfilePhoto = React.lazy(() =>
    import('../../user_pages/photo/_main/ProfilePhoto')
);


//
export const ProfileRoutes = [
    {
        component: ProfileHome,
        search: '',
        props: {},
    },

    ...about_search_arr.map(item => ({
        component: ProfileAbout,
        search: item,
        props: {},
    })),

    ...photos_search_arr.map(item => ({
        component: ProfilePhoto,
        search: item,
        props: {},
    })),

    {
        component: ProfileFriend,
        search: '?sk=friend',
        props: {},
    },
];

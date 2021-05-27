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

    {
        component: ProfileAbout,
        search: about_search_arr,
        props: {},
    },

    {
        component: ProfilePhoto,
        search: photos_search_arr,
        props: {},
    },

    {
        component: ProfileFriend,
        search: '?sk=friend',
        props: {},
    },
];

//
export const profile_search_arr = ['', '?sk=friend', ...about_search_arr, ...photos_search_arr]

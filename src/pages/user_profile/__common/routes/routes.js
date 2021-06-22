import React from 'react';
//
import { about_searches_str } from '../../user_pages/about/__common/routes/routes';
import { photos_searches_str } from '../../user_pages/photo/__common/routes/routes';

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
        is_active: false,
        is_loaded: false,
        props: {},
    },

    {
        component: ProfileAbout,
        search: about_searches_str,
        is_active: false,
        is_loaded: false,
        props: {},
    },

    {
        component: ProfilePhoto,
        search: photos_searches_str,
        is_active: false,
        is_loaded: false,
        props: {},
    },

    {
        component: ProfileFriend,
        search: '?sk=friend',
        is_active: false,
        is_loaded: false,
        props: {},
    },
];

//
export const profile_search_arr = ProfileRoutes.reduce(
    (a, b) => a + b.search,
    ''
);

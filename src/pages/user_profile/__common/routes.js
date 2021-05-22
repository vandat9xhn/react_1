import React from 'react';

// 
const ProfileHome = React.lazy(() =>
    import('../user_pages/home/_main/ProfileHome')
);
const ProfileAbout = React.lazy(() =>
    import('../user_pages/about/_main/ProfileAbout')
);
const ProfileFriend = React.lazy(() =>
    import('../user_pages/friend/_main/ProfileFriend')
);
const ProfilePhoto = React.lazy(() =>
    import('../user_pages/photo/_main/ProfilePhoto')
);

// 
export const ProfileRoutes = [
    {
        component: ProfileHome,
        search: '',
    },
    {
        component: ProfileAbout,
        search: '?sk=about',
    },
    {
        component: ProfileFriend,
        search: '?sk=friend',
    },

    {
        component: ProfilePhoto,
        search: '?sk=photos_all',
    },
    {
        component: ProfilePhoto,
        search: '?sk=photos_album',
    },
]
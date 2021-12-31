import React from 'react';

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
const ProfilePhotoAnAlbum = React.lazy(() =>
    import('../../user_pages/photo/an_album/_main/ProfilePhotoAnAlbum')
);

const WorkingOnIt = React.lazy(() =>
    import('../../../../component/working_on_it/WorkingOnIt')
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
        search: '?sk=photo',
    },
    {
        component: ProfilePhotoAnAlbum,
        search: '?sk=album_photo',
    },

    {
        component: WorkingOnIt,
        search: '?sk=like',
    },
    {
        component: WorkingOnIt,
        search: '?sk=group',
    },
    {
        component: WorkingOnIt,
        search: '?sk=film',
    },
    {
        component: WorkingOnIt,
        search: '?sk=music',
    },
];

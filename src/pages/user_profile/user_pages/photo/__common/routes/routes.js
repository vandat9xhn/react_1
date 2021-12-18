import React from 'react';

//
const ProfilePhotoAll = React.lazy(() =>
    import('../../all/_main/ProfilePhotoAll')
);
const ProfilePhotoAlbum = React.lazy(() =>
    import('../../albums/_main/ProfilePhotoAlbum')
);

//
export const PhotosRoutes = [
    {
        component: ProfilePhotoAlbum,
        search: '?sk=photos_album',
    },
    {
        component: ProfilePhotoAll,
        search: '?sk=photos_all',
    },
];

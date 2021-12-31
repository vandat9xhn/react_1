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
        component: ProfilePhotoAll,
        search: '?sk=photos_all',
    },
    {
        component: ProfilePhotoAlbum,
        search: '?sk=photos_albums',
    },
];

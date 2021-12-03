import React from 'react';

//
const GPMediaPhotos = React.lazy(() => import('../photos/_main/GPMediaPhotos'));

const GPMediaVideos = React.lazy(() => import('../videos/_main/GPMediaVideos'));

const GPMediaAlbums = React.lazy(() => import('../albums/_main/GPMediaAlbums'));

//
export const GroupPageMediaRoutes = [
    {
        component: GPMediaPhotos,
        path: '/group/:id/media/photos',
    },
    {
        component: GPMediaVideos,
        path: '/group/:id/media/videos',
    },
    {
        component: GPMediaAlbums,
        path: '/group/:id/media/albums',
    },
];

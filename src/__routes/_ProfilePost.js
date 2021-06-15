import React from 'react';

//
const Profile = React.lazy(() => import('../pages/user_profile/_main/Profile'));

const UserPost = React.lazy(() => import('../pages/user_post/_main/UserPost'));

const NewFeed = React.lazy(() => import('../pages/new_feed/_main/NewFeed'));

const ZoomVidPicItem = React.lazy(() =>
    import('../component/posts/_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem')
);

const AddFriend = React.lazy(() =>
    import('../pages/add_friend/_main/AddFriend')
);

//
export const profile_route_arr = [
    {
        path: '/profile/:id',
        component: Profile,
        export: true,
    },
    {
        path: '/posts/:id',
        component: UserPost,
        export: true,
    },
    {
        path: '/new-feed',
        component: NewFeed,
        export: true,
    },
    {
        path: '/post/photos/:id',
        component: ZoomVidPicItem,
        export: true,
    },
    {
        path: '/add-friend-add',
        component: AddFriend,
        export: true,
    },
];

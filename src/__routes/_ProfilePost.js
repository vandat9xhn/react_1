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
        exact: true,
        auth: true,
    },
    {
        path: '/posts/:id',
        component: UserPost,
        exact: true,
        auth: true,
    },
    {
        path: '/new-feed',
        component: NewFeed,
        exact: true,
        auth: true,
    },
    {
        path: '/post/photos/:id',
        component: ZoomVidPicItem,
        exact: true,
        auth: true,
    },
    {
        path: '/add-friend-add',
        component: AddFriend,
        exact: true,
        auth: true,
    },
];
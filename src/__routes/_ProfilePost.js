import React from 'react';

//
const Profile = React.lazy(() => import('../pages/user_profile/_main/Profile'));

const UserPost = React.lazy(() => import('../pages/user_post/_main/UserPost'));

const NewFeed = React.lazy(() => import('../pages/new_feed/_main/NewFeed'));

const ZoomVidPicItem = React.lazy(() =>
    import('../component/posts/_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem')
);

// -----

const FriendsHome = React.lazy(() =>
    import('../pages/add_friend/home/_main/FriendsHome')
);

const FriendsRequest = React.lazy(() =>
    import('../pages/add_friend/requested/_main/FriendsSuggest')
);

const FriendsSuggest = React.lazy(() =>
    import('../pages/add_friend/suggested/_main/FriendsSuggest')
);

const FriendsAll = React.lazy(() =>
    import('../pages/add_friend/all/_main/FriendsAll')
);


const FriendsBirth = React.lazy(() =>
    import('../pages/add_friend/birthday/_main/FriendsBirth')
);



//
export const profile_route_arr = [
    // {
    //     path: '/profile/:id',
    //     component: Profile,
    //     exact: true,
    //     auth: true,
    // },
    // {
    //     path: '/posts/:id',
    //     component: UserPost,
    //     exact: true,
    //     auth: true,
    // },
    // {
    //     path: '/new-feed',
    //     component: NewFeed,
    //     exact: true,
    //     auth: true,
    //     reset_position: true,
    // },
    // {
    //     path: '/post/photos/:id',
    //     component: ZoomVidPicItem,
    //     exact: true,
    //     auth: true,
    // },

    {
        path: '/friends',
        component: FriendsHome,
        exact: true,
        auth: true,
        reset_position: true,
    },
    {
        path: '/friends/requests',
        component: FriendsRequest,
        exact: true,
        auth: true,
        reset_position: true,
    },
    {
        path: '/friends/suggestions',
        component: FriendsSuggest,
        exact: true,
        auth: true,
        reset_position: true,
    },
    {
        path: '/friends/all',
        component: FriendsAll,
        exact: true,
        auth: true,
        reset_position: true,
    },
    {
        path: '/friends/birthdays',
        component: FriendsBirth,
        exact: true,
        auth: true,
        reset_position: true,
    },
];

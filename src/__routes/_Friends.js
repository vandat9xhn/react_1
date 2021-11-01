import React from 'react';

// 
const FriendsHome = React.lazy(() =>
    import('../pages/add_friend/home/_main/FriendsHome')
);

const FriendsRequest = React.lazy(() =>
    import('../pages/add_friend/requested/_main/FriendsRequest')
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
export const friend_route_arr = [
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

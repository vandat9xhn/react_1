import React from 'react';

//
const StoryMenu = React.lazy(() =>
    import('../component/story_fb/menu/_main/StoryMenu')
);

const StoryCreate = React.lazy(() =>
    import('../component/story_fb/create/_main/StoryCreate')
);

//
export const story_route_arr = [
    {
        path: '/stories',
        component: StoryMenu,
        exact: true,
        auth: true,
    },
    {
        path: '/story/create',
        component: StoryCreate,
        exact: true,
        auth: true,
    },
];

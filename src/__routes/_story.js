import React from 'react';

//
const StoryMobile = React.lazy(() =>
    import('../component/story_fb/_main/mobile/StoryMobile')
);

//
export const story_route_arr = [
    {
        path: '/stories',
        component: StoryMobile,
        exact: true,
        auth: true,
    },
];

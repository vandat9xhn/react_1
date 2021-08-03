import React from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';

//
const StoryMobile = React.lazy(() =>
    import('../component/story_fb/_main/mobile/StoryMobile')
);

const StoryPc = React.lazy(() =>
    import('../component/story_fb/_main/pc/StoryPc')
);

//
export const story_route_arr = [
    {
        path: '/stories',
        component: IS_MOBILE ? StoryMobile : StoryPc,
        exact: true,
        auth: true,
    },
];

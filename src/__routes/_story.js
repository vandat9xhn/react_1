import React from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';

//
const StoryCreatePc = React.lazy(() =>
    import('../component/story_fb/pc/create/_main/StoryCreatePc')
);

//
const ScreenStoryCreateMb = React.lazy(() =>
    import('../component/_screen/type/story/mobile/create/ScreenStoryCreateMb')
);

const StoryHomePc = React.lazy(() =>
    import('../component/story_fb/pc/home/_main/StoryHomePc')
);

const ScreenStoryMenuMobile = React.lazy(() =>
    import('../component/_screen/type/story/mobile/menu/ScreenStoryMenuMobile')
);

//
export const story_route_arr = [
    {
        path: '/stories',
        component: IS_MOBILE ? ScreenStoryMenuMobile : StoryHomePc,
        exact: true,
        auth: true,
    },
    {
        path: '/story/create',
        component: IS_MOBILE ? ScreenStoryCreateMb : StoryCreatePc,
        exact: true,
        auth: true,
    },
];

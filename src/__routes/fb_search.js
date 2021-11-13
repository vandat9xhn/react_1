import React from 'react';

//
const FbSearchPageAll = React.lazy(() =>
    import('../component/fb_search/page/right/all/_main/FbSearchPageAll')
);

const FbSearchPagePeople = React.lazy(() =>
    import('../component/fb_search/page/right/people/_main/FbSearchPagePeople')
);

const FbSearchPagePhotoAll = React.lazy(() =>
    import(
        '../component/fb_search/page/right/photo/all/_main/FbSearchPagePhotoAll'
    )
);

const FbSearchPagePhotoHome = React.lazy(() =>
    import(
        '../component/fb_search/page/right/photo/home/_main/FbSearchPagePhotoHome'
    )
);

const FbSearchPagePost = React.lazy(() =>
    import('../component/fb_search/page/right/post/_main/FbSearchPagePost')
);

//

const FbSearchPageVideo = React.lazy(() =>
    import('../component/fb_search/page/right/video/_main/FbSearchPageVideo')
);

const FbSearchPagePages = React.lazy(() =>
    import('../component/fb_search/page/right/pages/_main/FbSearchPagePages')
);

const FbSearchPageGroups = React.lazy(() =>
    import('../component/fb_search/page/right/groups/_main/FbSearchPageGroups')
);

//
export const fb_search_route_arr = [
    {
        path: '/search',
        component: FbSearchPageAll,
        exact: true,
        auth: true,
    },
    {
        path: '/search/people',
        component: FbSearchPagePeople,
        exact: true,
        auth: true,
    },
    {
        path: '/search/photos/all',
        component: FbSearchPagePhotoAll,
        exact: true,
        auth: true,
    },
    {
        path: '/search/photos',
        component: FbSearchPagePhotoHome,
        exact: true,
        auth: true,
    },
    {
        path: '/search/posts',
        component: FbSearchPagePost,
        exact: true,
        auth: true,
    },

    {
        path: '/search/videos',
        component: FbSearchPageVideo,
        exact: true,
        auth: true,
    },
    {
        path: '/search/pages',
        component: FbSearchPagePages,
        exact: true,
        auth: true,
    },
    {
        path: '/search/groups',
        component: FbSearchPageGroups,
        exact: true,
        auth: true,
    },
];

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
        path: '/fb-search',
        component: FbSearchPageAll,
        exact: true,
        auth: true,

        title: 'Search',
    },
    {
        path: '/fb-search/people',
        component: FbSearchPagePeople,
        exact: true,
        auth: true,

        title: 'Search people',
    },
    {
        path: '/fb-search/photos/all',
        component: FbSearchPagePhotoAll,
        exact: true,
        auth: true,

        title: 'Search All Photos',
    },
    {
        path: '/fb-search/photos',
        component: FbSearchPagePhotoHome,
        exact: true,
        auth: true,

        title: 'Search photos',
    },
    {
        path: '/fb-search/posts',
        component: FbSearchPagePost,
        exact: true,
        auth: true,

        title: 'Search posts',
    },

    {
        path: '/fb-search/videos',
        component: FbSearchPageVideo,
        exact: true,
        auth: true,

        title: 'Search videos',
    },
    {
        path: '/fb-search/pages',
        component: FbSearchPagePages,
        exact: true,
        auth: true,

        title: 'Search pages',
    },
    {
        path: '/fb-search/groups',
        component: FbSearchPageGroups,
        exact: true,
        auth: true,

        title: 'Search groups',
    },
];

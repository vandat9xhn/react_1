import React from 'react';

//
const Fashion = React.lazy(() =>
    import('../pages/fashion/pages/_fashion_list/Fashion')
);
const FashionShop = React.lazy(() =>
    import('../pages/fashion/pages/shop/_main/Shop')
);
const FashionItem = React.lazy(() =>
    import('../pages/fashion/pages/fashion_item/_main/FashionItem')
);
const FashionCart = React.lazy(() =>
    import('../pages/fashion/pages/cart/_main/FashionCart')
);
const FashionBuy = React.lazy(() =>
    import('../pages/fashion/pages/buy/_main/FashionBuy')
);
const FashionSearch = React.lazy(() =>
    import('../pages/fashion/pages/search/_main/FashionSearch')
);
const FashionPersonal = React.lazy(() =>
    import('../pages/fashion/pages/personal/_main/FashionPersonal')
);
const FashionOnWork = React.lazy(() =>
    import('../pages/fashion/pages/on_work/FashionOnWork')
);

//
export const fashion_route_arr = [
    {
        path: '/fashion',
        component: Fashion,
        exact: true,
    },
    {
        path: '/fashion/shop/:id',
        component: FashionShop,
        exact: true,
    },
    {
        path: '/fashion::id',
        component: FashionItem,
        exact: true,
    },
    {
        path: '/fashion/cart',
        component: FashionCart,
        exact: true,
    },
    {
        path: '/fashion/buy',
        component: FashionBuy,
        exact: true,
    },
    {
        path: '/fashion/search',
        component: FashionSearch,
        exact: true,
    },
    {
        path: '/fashion/personal',
        component: FashionPersonal,
        exact: false,
    },

    // on work
    {
        path: '/fashion/mall',
        component: FashionOnWork,
        exact: true,
    },
    {
        path: '/fashion/extra-ship',
        component: FashionOnWork,
        exact: true,
    },
    {
        path: '/fashion/premium',
        component: FashionOnWork,
        exact: true,
    },
    {
        path: '/fashion/brand-discount',
        component: FashionOnWork,
        exact: true,
    },
    {
        path: '/fashion/brand-1',
        component: FashionOnWork,
        exact: true,
    },
    {
        path: '/fashion/condition',
        component: FashionOnWork,
        exact: true,
    },
];

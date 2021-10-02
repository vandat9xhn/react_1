import React from 'react';

//
const PLHome = React.lazy(() =>
    import('../pages/phone_laptop/pages/home/_main/PLHome')
);
const PhoneLaptopDetail = React.lazy(() =>
    import(
        '../pages/phone_laptop/pages/detail/_main/PLDetail'
    )
);
const Laptops = React.lazy(() =>
    import('../pages/phone_laptop/pages/laptops/_main/Laptops')
);
const Phones = React.lazy(() =>
    import('../pages/phone_laptop/pages/phones/_main/Phones')
);

//
export const phone_route_arr = [
    {
        path: '/phone-laptop',
        component: PLHome,
        exact: true,
        auth: false,
        reset_position: true,
    },
    {
        path: '/phone-laptop/:id',
        component: PhoneLaptopDetail,
        exact: true,
        auth: false,
    },
    {
        path: '/phone-laptop-phones',
        component: Phones,
        exact: true,
        auth: false,
        reset_position: true,
    },
    {
        path: '/phone-laptop-laptops',
        component: Laptops,
        exact: true,
        auth: false,
        reset_position: true,
    },
];

import React from 'react';

//
const PhoneLaptop = React.lazy(() =>
    import('../pages/phone_laptop/pages/__home_page/_main/PhoneLaptop')
);
const PhoneLaptopDetail = React.lazy(() =>
    import(
        '../pages/phone_laptop/pages/_product_detail/_main/PhoneLaptopDetail'
    )
);
const Laptops = React.lazy(() =>
    import('../pages/phone_laptop/pages/_laptops/_main/Laptops')
);
const Phones = React.lazy(() =>
    import('../pages/phone_laptop/pages/_phones/_main/Phones')
);

//
export const phone_route_arr = [
    {
        path: '/phone-laptop',
        component: PhoneLaptop,
        export: true,
    },
    {
        path: '/phone-laptop::id',
        component: PhoneLaptopDetail,
        export: true,
    },
    {
        path: '/phone-laptop-phones',
        component: Phones,
        export: true,
    },
    {
        path: '/phone-laptop-laptops',
        component: Laptops,
        export: true,
    },
];

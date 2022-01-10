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
const PLPhones = React.lazy(() =>
    import('../pages/phone_laptop/pages/phones/_main/PLPhones')
);

const WorkingOnIt = React.lazy(() =>
    import('../component/working_on_it/WorkingOnIt')
);

//
export const phone_route_arr = [
    {
        path: '/phone-laptop',
        component: PLHome,
        exact: true,
        auth: false,
        
        title: 'Phone Laptop'
    },
    {
        path: '/phone-laptop/search',
        component: WorkingOnIt,
        exact: true,
        auth: false,
        
        title: 'Tìm kiếm'
    },
    {
        path: '/phone-laptop/:id',
        component: PhoneLaptopDetail,
        exact: true,
        auth: false,
        
        title: 'Sản phẩm'
    },
    {
        path: '/phone-laptop-phones',
        component: PLPhones,
        exact: true,
        auth: false,
        
        title: 'Phones'
    },
    {
        path: '/phone-laptop-laptops',
        component: Laptops,
        exact: true,
        auth: false,
        
        title: 'Laptops'
    },
];

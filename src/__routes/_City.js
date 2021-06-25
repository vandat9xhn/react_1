import React from 'react';

//
const CityStreet = React.lazy(() =>
    import('../pages/city_street/pages/cities/_main/Cities')
);
const NewCity = React.lazy(() =>
    import('../pages/city_street/pages/_add_new_city/_main/AddNewCity')
);

//
export const city_route_arr = [
    {
        path: '/city-street',
        component: CityStreet,
        exact: true,
        auth: false,
    },
    {
        path: '/new-city',
        component: NewCity,
        exact: true,
        auth: true,
    },
];

import React from 'react';

//
const LoginForm = React.lazy(() =>
    import('../pages/login_form/_main/LoginForm')
);

const Registration = React.lazy(() =>
    import('../pages/registration/_main/RegisterCommon')
);

//
export const account_route_arr = [
    {
        path: '/login-form',
        component: LoginForm,
        exact: true,
        auth: false,
    },

    {
        path: '/registration-form',
        component: Registration,
        exact: true,
        auth: false,
    },
];

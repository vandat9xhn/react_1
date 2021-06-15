import React from 'react';

//
const LoginForm = React.lazy(() =>
    import('../pages/login_form/_main/LoginForm')
);

const Registration = React.lazy(() =>
    import('../pages/registration/_main/Registration')
);

//
export const account_route_arr = [
    {
        path: '/login-form',
        component: LoginForm,
        export: true,
    },

    {
        path: '/registration-form',
        component: Registration,
        export: true,
    },
];

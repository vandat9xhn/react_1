import React from "react";
import { IS_MOBILE } from "../_constant/Constant";

//
const LoginForm = React.lazy(() =>
    import("../pages/login_form/_main/LoginForm")
);

const LoginByPics = React.lazy(() => 
    import("../pages/login_by_pics/pc/_main/LoginByPicsPc")
);

const Registration = React.lazy(() =>
    import("../pages/registration/_main/RegisterCommon")
);

//
export const account_route_arr = [
    {
        path: "/login-form",
        component: LoginForm,
        exact: true,
        auth: false,

        title: "Login",
    },
    {
        path: "/login-pic",
        component: LoginByPics,
        exact: true,
        auth: false,

        title: "Register",
    },
    {
        path: "/registration-form",
        component: Registration,
        exact: true,
        auth: false,

        title: "Register",
    },
];

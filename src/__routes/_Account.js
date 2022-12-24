import React from "react";

import { IS_MOBILE } from "../_constant/Constant";

//
const LoginForm = React.lazy(() =>
    import("../pages/login_form/_main/LoginForm")
);

const LoginByPicsPc = React.lazy(() =>
    import("../pages/login_by_pics/pc/_main/LoginByPicsPc")
);
const LoginByPicsMb = React.lazy(() =>
    import("../pages/login_by_pics/mb/_main/LoginByPicsMb")
);

const Registration = React.lazy(() =>
    import("../pages/registration/_main/RegisterCommon")
);

const WorkingOnIt = React.lazy(() =>
    import("../component/working_on_it/WorkingOnIt")
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
        component: IS_MOBILE ? LoginByPicsMb : LoginByPicsPc,
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
    {
        path: "/find-account",
        component: WorkingOnIt,
        exact: true,
        auth: false,

        title: "Find account",
    },
];

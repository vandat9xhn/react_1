import React, { useLayoutEffect, useRef, useState } from "react";
//
import { context_api } from "./ContextAPI";
//
import { initial_user } from "../_initial/user/initialUser";
//
import { DefineUser } from "../api/api_django_no_token/define_user/DefineUser";
import { changeDefaultDefineUser } from "../_default/login/DefaultLogin";

//
const ContextAPI = ({ children, handleRefresh, ...rest_props }) => {
    //
    const [context_state, setContextState] = useState({
        user: initial_user(),
        has_fetched: false,
    });

    const [update_app, setUpdateApp] = useState(false);

    const { user, has_fetched } = context_state;

    //
    const root_floor_url_arr = useRef([]);
    const profile_friends_pathname = useRef("");

    // ----------

    //
    useLayoutEffect(() => {
        getDataUser();
    }, []);

    //
    async function getDataUser() {
        try {
            const res = await DefineUser();
            // console.log(res);

            if (typeof res.data == "object") {
                setContextState({
                    user: res.data,
                    has_fetched: true,
                });

                localStorage.is_login = 1;
            } else {
                setContextState({
                    ...context_state,
                    has_fetched: true,
                });

                localStorage.is_login = 0;
            }

            handleRefresh();
        } catch (e) {
            console.log(e);
        }
    }

    // ----------

    //
    function setDataUser(new_user) {
        // log in or reload + has logged in
        if (new_user.id) {
            localStorage.is_login = 1;
            // fake
            changeDefaultDefineUser(new_user);
            // log out
        } else {
            localStorage.is_login = 0;
            localStorage.access_token = "";
        }

        setContextState({
            user: new_user,
            has_fetched: has_fetched,
        });
    }

    //
    function forceUpdateApp() {
        setUpdateApp((update_app) => !update_app);
    }

    //
    return (
        <context_api.Provider
            value={{
                ...rest_props,
                auth_class: user.id ? "" : "display-none",
                user: user,

                root_floor_url_arr: root_floor_url_arr,
                profile_friends_pathname: profile_friends_pathname,

                setDataUser: setDataUser,
                forceUpdateApp: forceUpdateApp,
            }}
        >
            {has_fetched ? children : null}
        </context_api.Provider>
    );
};

export default ContextAPI;

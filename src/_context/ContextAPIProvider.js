import React, { useLayoutEffect, useRef, useState } from 'react';
//
import { context_api } from './ContextAPI';
//
import { initial_user } from '../_initial/user/initialUser';
//
import { DefineUser } from '../api/api_django_no_token/define_user/DefineUser';

//
const ContextAPI = ({ children, handleRefresh, ...rest_props }) => {
    //

    const [context_state, setContextState] = useState({
        user: initial_user(),
        has_fetched: false,
    });

    const { user, has_fetched } = context_state;

    //
    const root_floor_url_arr = useRef([]);

    /* ---------------------- USER ------------------- */
    //
    useLayoutEffect(() => {
        getDataUser();
    }, []);

    //
    async function getDataUser() {
        try {
            const res = await DefineUser();
            // console.log(res);

            if (typeof res.data == 'object') {
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

    //
    function setDataUser(new_user) {
        // log in or reload + has logged in
        if (new_user.id) {
            localStorage.is_login = 1;
            // log out
        } else {
            localStorage.is_login = 0;
            localStorage.access_token = '';
        }

        setContextState({
            user: new_user,
            has_fetched: has_fetched,
        });
    }

    //
    return (
        <context_api.Provider
            value={{
                ...rest_props,
                auth_class: user.id ? '' : 'display-none',
                user: user,
                setDataUser: setDataUser,
                root_floor_url_arr: root_floor_url_arr,
            }}
        >
            {has_fetched ? children : null}
        </context_api.Provider>
    );
};

export default ContextAPI;

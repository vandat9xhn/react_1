import React, { useEffect, useLayoutEffect, useState } from 'react';
//
import { context_api } from './ContextAPI';
//
import { DefineUser } from '../api/api_django_no_token/define_user/DefineUser';
//
import WaitingBall from '../component/waiting/waiting_ball/WaitingBall';

//
const ContextAPI = ({ children, handleRefresh, ...rest_props }) => {
    //

    const [context_state, setContextState] = useState({
        user: {
            id: 0,
            first_name: '',
            last_name: '',
            picture: '',
        },
        has_fetched: false,
    });

    const { user, has_fetched } = context_state;

    /* ---------------------- USER ------------------- */
    //
    useLayoutEffect(() => {
        getDataUser();
    }, []);

    //
    async function getDataUser() {
        try {
            const res = await DefineUser();

            if (typeof res.data == 'object') {
                setContextState({
                    user: res.data,
                    has_fetched: true,
                });
            } else {
                setContextState({
                    ...context_state,
                    has_fetched: true,
                });
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
            }}
        >
            {has_fetched ? (
                <div>{children}</div>
            ) : (
                <div>
                    <WaitingBall waitingBall_center={true} />
                </div>
            )}
        </context_api.Provider>
    );
};

export default ContextAPI;

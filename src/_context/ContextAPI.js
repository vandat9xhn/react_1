import React, { useEffect, useState } from 'react';
//
import { DefineUser } from '../api/api_django_no_token/define_user/DefineUser';

//
export const context_api = React.createContext();

//
const ContextAPI = ({ children, ...rest_props }) => {
    //
    const [user, setUser] = useState({
        id: 0,
        first_name: '',
        last_name: '',
        picture: '',
    });

    /* ---------------------- USER ------------------- */
    //
    useEffect(() => {
        getDataUser();
    }, []);

    //
    async function getDataUser() {
        try {
            const res = await DefineUser();
            typeof res.data == 'object' && setDataUser(res.data);
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
        setUser(new_user);
    }

    //
    return (
        <context_api.Provider
            value={{
                ...rest_props,
                chat_class: user.id ? '' : 'display-none',
                user: user,
                setDataUser: setDataUser,
            }}
        >
            {children}
        </context_api.Provider>
    );
};

export default ContextAPI;

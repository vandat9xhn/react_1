import { useContext, useEffect, useState } from "react";

import { context_api } from "../../../_context/ContextAPI";
import { useScreenFetching } from "../../../_hooks/UseScreenFetching";

//
import { getRandomUser } from "../../../_default/_common/default_user";
import { getDefaultArr } from "../../../_default/_common/getDefaultArr";

//
const handle_API_SaveUser_L = () =>
    new Promise((res) => {
        setTimeout(() => {
            res({ data: getDefaultArr(() => getRandomUser().user, 0, 4) });
        }, 250);
    });

const handleLoginPic = (data) =>
    new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, 250);
    });

//
export function useLoginRecently() {
    //
    const { setDataUser } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        user_arr: [],
        has_fetched: false,
    });

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        getUserArr();
    }, []);

    // -----

    async function getUserArr() {
        const { data } = await handle_API_SaveUser_L();
        setStateObj({
            user_arr: data,
            has_fetched: true,
        });
    }

    // ---

    async function handleLogin(ix = 0) {
        const data = await handleScreenFetching(() =>
            handleLoginPic(state_obj.user_arr[ix])
        );

        const { access, life_time, ...user_data } = data;
        //
        // localStorage.access_token = access;
        // localStorage.life_time = life_time;
        localStorage.time_set = new Date().getTime();
        setDataUser({
            ...user_data,
        });
    }

    function handleDel(ix = 0) {
        setStateObj((state_obj) => {
            const new_user_arr = [...state_obj.user_arr];
            new_user_arr.splice(ix, 1);

            return {
                ...state_obj,
                user_arr: new_user_arr,
            };
        });
    }

    // ---

    return {
        ...state_obj,
        handleLogin,
        handleDel,
    };
}

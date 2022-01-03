import { useEffect, useState } from 'react';
//
import { useBool } from './useBool';
import { useForceUpdate } from './UseForceUpdate';

//
export function useActionsMultiList({
    handle_API_L = () => new Promise((res) => res()),
    deps_reset_api = [],
}) {
    //
    const [state_obj, setStateObj] = useState({
        list_action_arr: [] || [[]],
        has_fetched: false,
        is_fetching: false,
    });

    const { list_action_arr, has_fetched, is_fetching } = state_obj;

    //
    const { is_true, setIsTrue, toggleBool } = useBool();
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        if (deps_reset_api.length) {
            setStateObj((state_obj) => {
                return {
                    ...state_obj,
                    list_action_arr: [[]],
                    has_fetched: false,
                };
            });
        }
    }, deps_reset_api);

    // ------- API

    //
    async function getData_action() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: true,
            };
        });

        const data = await handle_API_L();

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                list_action_arr: data,
                is_fetching: false,
                has_fetched: true,
            };
        });
    }

    // ------- TOGGLE

    //
    function callbackOpen() {
        !has_fetched ? getData_action() : forceUpdate();
    }

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    function callbackClose() {
        handleClose();
    }

    // ----

    //
    return {
        list_action_arr,
        is_fetching,
        has_fetched,
        is_true,

        setStateObj,

        toggleBool,
        handleClose,
        callbackOpen,
        callbackClose,
    };
}

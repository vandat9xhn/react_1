import { useState } from 'react';

//
export function useMultiPages({
    initial_page = 1,
    handle_API_L,
    other_state = {},
}) {
    //
    const [state_obj, setStateObj] = useState({
        page_obj: {
            [initial_page]: [],
        },
        page: initial_page,
        pages: 1,
        count: 0,

        has_fetched: false,
        is_fetching: false,

        ...other_state,
    });

    const { page_obj, page, has_fetched } = state_obj;

    //
    async function getData_API(new_page = initial_page, start_obj_state = {}) {
        setStateObj((state_obj) => ({
            ...state_obj,
            page: new_page,
            page_obj: {
                ...state_obj.page_obj,
                [new_page]: state_obj.page_obj[new_page] || [],
            },
            is_fetching: true,
            ...start_obj_state,
        }));

        const {
            data,
            count: new_count,
            pages: new_pages,
        } = await handle_API_L(new_page);

        setStateObj((state_obj) => ({
            ...state_obj,
            page_obj: {
                ...state_obj.page_obj,
                [new_page]: data,
            },
            ...(state_obj.has_fetched
                ? {}
                : { count: new_count, pages: new_pages }),

            has_fetched: true,
            is_fetching: false,
        }));
    }

    //
    function handleChangePage(new_page) {
        if (page == new_page) {
            return;
        }

        if (page_obj[new_page]) {
            setStateObj({
                ...state_obj,
                page: new_page,
            });

            return;
        }

        getData_API(new_page);
    }

    //
    function refreshData_API({ new_page, start_obj_state = {} }) {
        getData_API(new_page, {
            has_fetched: false,
            page_obj: { [new_page]: [] },
            pages: 1,
            count: 0,

            ...start_obj_state,
        });
    }

    //
    return {
        state_obj,
        setStateObj,
        getData_API,
        refreshData_API,
        handleChangePage,
    };
}

import { useState } from 'react';

//
export function useMultiPages({ initial_page = 1, handle_API_L }) {
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
    });

    const { page_obj, page, has_fetched } = state_obj;

    //
    async function getData_API(new_page) {
        setStateObj((state_obj) => ({
            ...state_obj,
            page: new_page,
            is_fetching: true,
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
            ...(has_fetched ? {} : { count: new_count, pages: new_pages }),
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

    return { state_obj, setStateObj, getData_API, handleChangePage };
}

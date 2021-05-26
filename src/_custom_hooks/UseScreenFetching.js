import { useContext } from 'react';
import { context_api } from '../_context/ContextAPI';

//
export const useScreenFetching = () => {
    //
    const { openScreenFetching, closeScreenFetching } = useContext(context_api);

    //
    async function handleScreenFetching(
        callback_handle_API = () => new Promise()
    ) {
        openScreenFetching();
        const data = await callback_handle_API();
        closeScreenFetching();

        return data;
    }

    //
    return handleScreenFetching;
};

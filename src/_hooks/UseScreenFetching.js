import { useContext } from 'react';
//
import { context_api } from '../_context/ContextAPI';
//
import { openScreenFetching } from '../component/_screen_once/fetching/ScreenBlurFetching';

//
export const useScreenFetching = () => {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    async function handleScreenFetching(
        callback_handle_API = () => new Promise(),
        FetchingComponent
    ) {
        openScreenFetching({
            openScreenOnce: openScreenOnce,
            FetchingComponent: FetchingComponent,
        });

        const data = await callback_handle_API();

        closeScreenOnce();

        return data;
    }

    //
    return handleScreenFetching;
};

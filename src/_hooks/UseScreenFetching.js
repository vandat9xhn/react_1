import { useContext } from 'react';
//
import { context_api } from '../_context/ContextAPI';
//
import { openScreenFetching } from '../component/_screen/type/fetching/ScreenBlurFetching';

//
export const useScreenFetching = () => {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    async function handleScreenFetching(
        callback_handle_API = () => new Promise(),
        FetchingComponent
    ) {
        openScreenFetching({
            openScreenFloor: openScreenFloor,
            FetchingComponent: FetchingComponent,
        });

        const data = await callback_handle_API();

        closeScreenFloor();

        return data;
    }

    //
    return handleScreenFetching;
};

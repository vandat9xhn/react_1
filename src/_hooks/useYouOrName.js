import { useContext } from 'react';
//
import { context_api } from '../_context/ContextAPI';

//
export function useYouOrName() {
    //
    const { user } = useContext(context_api);

    // ------
    function detectIsUser({ user_id = -1 }) {
        return user.id == user_id;
    }

    //
    function getYouOrName({ user_id = -1, user_name = '' }) {
        if (detectIsUser({ user_id: user_id })) {
            return 'You';
        }

        return user_name;
    }

    //
    return { detectIsUser, getYouOrName };
}

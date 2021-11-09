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
    function getYouOrName({ user = { id: 0, first_name: '', last_name: '' } }) {
        if (detectIsUser({ user_id: user.id })) {
            return 'You';
        }

        return `${user.first_name} ${user.last_name}`;
    }

    //
    return { detectIsUser, getYouOrName };
}

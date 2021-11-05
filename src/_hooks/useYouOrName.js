import { useContext } from 'react';
//
import { context_api } from '../_context/ContextAPI';

//
export function useYouOrName() {
    //
    const { user } = useContext(context_api);

    //
    function getYouOrName({ user_id = -1, user_name = '' }) {
        if (user.id == user_id) {
            return 'You';
        }

        return user_name;
    }

    //
    return { getYouOrName };
}

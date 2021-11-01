import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//
import { context_api } from '../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../_constant/Constant';

//
export function useFriendsShowProfile({ friends_pathname }) {
    //
    const use_history = useHistory();

    //
    const { profile_friends_pathname } = useContext(context_api);

    //
    useEffect(() => {
        if (!IS_MOBILE) {
            const new_profile_id = history.state.state
                ? history.state.state['profile_id']
                : -1;

            showProfile(new_profile_id);
        }
    }, []);

    // -----

    //
    function showProfile(new_profile_id = -1) {
        if (IS_MOBILE) {
            use_history.push(`/profile/${new_profile_id}`);

            return;
        }

        if (new_profile_id > 0) {
            profile_friends_pathname.current = friends_pathname;
            use_history.push(`/profile/${new_profile_id}`);
        }
    }

    //
    return {
        showProfile,
    };
}

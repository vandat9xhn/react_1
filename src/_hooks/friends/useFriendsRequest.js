import { useFriendsList } from './useFriendsList';

//
export function useFriendsRequest({ rootMargin, margin }) {
    //
    const {
        ref_root,
        ref_fake_elm,

        data_state,
        setDataState,
    } = useFriendsList({
        friend_type_api: 'request',
        key_request: 'accepted',
        rootMargin: rootMargin,
        margin: margin,
    });

    // -----

    //
    function confirmFriendRequest(request_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[request_ix].accepted = true;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    function deleteFriendRequest(request_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr.splice(request_ix, 1);

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    return {
        ref_root,
        ref_fake_elm,
        data_state,

        confirmFriendRequest,
        deleteFriendRequest,
    };
}

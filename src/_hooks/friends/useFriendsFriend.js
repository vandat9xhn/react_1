import { useContext } from 'react';
//
import { context_api } from '../../_context/ContextAPI';
//
import { useFriendsList } from './useFriendsList';

//
export function useFriendsFriend({}) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    const {
        ref_root,
        ref_fake_elm,
        ref_params_api,

        data_state,
        setDataState,

        refreshData_API,
    } = useFriendsList({
        friend_type_api: 'friend',
        key_request: '',
        rootMargin: '200px 0px',
        margin: 200,
    });

    const { data_arr } = data_state;

    // -----

    //
    function openMess(friend_ix = -1) {
        openRoomChat(data_arr[friend_ix].id);
    }

    //
    function unFollowFriend(friend_ix = -1) {}

    //
    function blockFriend(friend_ix = -1) {}

    //
    function deleteFriend(friend_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr.splice(friend_ix, 1);

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    return {
        ref_root,
        ref_fake_elm,
        ref_params_api,

        data_state,
        setDataState,

        refreshData_API,

        openMess,
        unFollowFriend,
        blockFriend,
        deleteFriend,
    };
}

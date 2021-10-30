import { useFriendsList } from './useFriendsList';

//
export function useFriendsSuggest({ value_request }) {
    //
    const {
        ref_root,
        ref_fake_elm,

        data_state,
        setDataState,

        getData_API,
    } = useFriendsList({
        friend_type_api: 'suggest',
        key_request: 'sent',
        value_request: value_request,
        margin: 200,
        rootMargin: '200px 0px',
    });

    // -----

    //
    function addFriendRequest(suggest_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[suggest_ix].sent = true;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    function removeFriendRequest(suggest_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];

            if (new_data_arr[suggest_ix].sent) {
                new_data_arr[suggest_ix].sent = false;
            } else {
                new_data_arr.splice(suggest_ix, 1);
            }

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    return {
        ref_fake_elm,
        ref_root,
        data_state,

        getData_API,

        addFriendRequest,
        removeFriendRequest,
    };
}

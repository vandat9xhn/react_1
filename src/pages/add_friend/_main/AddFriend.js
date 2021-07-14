import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../_hooks/useMounted';
//
import {
    handle_API_AddFriend_L,
    handle_API_FriendRequest,
} from '../../../_handle_api/add_friend/AddFriendHandleAPI';
//
import AddFriendBody from '../body/_main/AddFriendBody';
import AddFriendHead from '../head/_main/AddFriendHead';
//
import './AddFriend.scss';
import './AddFriendRes.scss';

//
AddFriend.propTypes = {};

//
function AddFriend(props) {
    //
    const [add_friend_obj, setAddFriendObj] = useState({
        may_know_obj: {
            arr: [],
            has_fetched: false,
            count: 0,
        },
        requested_obj: {
            arr: [],
            has_fetched: false,
            count: 0,
        },
        sent_obj: {
            arr: [],
            has_fetched: false,
            count: 0,
        },

        c_request: 'requested_obj',
        is_fetching: false,
    });

    const { c_request, is_fetching } = add_friend_obj;

    const { arr, has_fetched, count } = add_friend_obj[c_request];

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        document.title = 'Friends';
        getData_AddFriend(c_request);
    }, []);

    /* ------------------ GET API ------------------- */

    //
    async function getData_Friend(
        new_request,
        new_obj_start = {},
        new_obj_end = {}
    ) {
        setAddFriendObj((add_friend_obj) => ({
            ...add_friend_obj,
            ...new_obj_start,
            c_request: new_request,
            is_fetching: true,
        }));

        const [new_data, new_count] = await handle_API_AddFriend_L(
            new_request.split('_')[0],
            add_friend_obj[new_request].count
        );

        const data = new_data.map((item) =>
            new_request == 'sent_obj'
                ? {
                      ...item.friend,
                      status_requested: 'cancel',
                  }
                : item.friend
        );

        if (!mounted) {
            return;
        }

        setAddFriendObj((add_friend_obj) => ({
            ...add_friend_obj,
            ...new_obj_end,
            [new_request]: add_friend_obj[new_request].has_fetched
                ? {
                      arr: [...add_friend_obj[new_request].arr, ...data],
                      count: add_friend_obj[new_request].count,
                      has_fetched: true,
                  }
                : {
                      arr: data,
                      count: new_count,
                      has_fetched: true,
                  },
            is_fetching: false,
        }));
    }

    //
    function getData_AddFriend(new_request) {
        getData_Friend(new_request);
    }

    //
    function getMore_Friend() {
        getData_Friend(c_request);
    }

    //
    function changeCurrentList(new_request) {
        if (add_friend_obj[new_request].has_fetched) {
            setAddFriendObj({
                ...add_friend_obj,
                c_request: new_request,
            });
        } else {
            getData_Friend(new_request);
        }
    }

    /* ------------- SEND + DELETE ------------- */

    // send
    async function handleRequesting(ix, new_status_requested) {
        const new_add_friend_obj = { ...add_friend_obj };
        const friend_obj = new_add_friend_obj[c_request].arr[ix];
        const friend_id = friend_obj.id;

        await handle_API_FriendRequest(friend_id);

        friend_obj.status_requested = new_status_requested;
        setAddFriendObj(new_add_friend_obj);
    }

    // delete
    async function handleRemoving(ix) {
        const new_add_friend_obj = { ...add_friend_obj };
        const friend_obj = new_add_friend_obj[c_request].arr[ix];
        const friend_id = friend_obj.id;

        await handle_API_FriendRequest(friend_id, true);

        friend_obj.is_del = true;
        new_add_friend_obj[c_request].count -= 1;
        setAddFriendObj(new_add_friend_obj);
    }

    //
    return (
        <div className="AddFriend">
            <div className="AddFriend_contain padding-8px">
                <div className="AddFriend_head">
                    <AddFriendHead
                        c_request={c_request}
                        changeCurrentList={changeCurrentList}
                    />
                </div>

                <hr className="App_hr-bg" />

                <div className="AddFriend_body">
                    <AddFriendBody
                        arr={arr}
                        c_request={c_request}
                        count={count}
                        is_fetching={is_fetching}
                        getMore_Friend={getMore_Friend}
                        handleRequesting={handleRequesting}
                        handleRemoving={handleRemoving}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddFriend;

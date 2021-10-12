import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../_some_function/waitingToDoLast';
//
import { initial_user } from '../../../../../../_initial/user/initialUser';
//
import { handle_API_Friend_L } from '../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import CUPostFixHead from '../../_components/fix_head/CUPostFixHead';
import CUPTagged from '../tagged/_main/CUPTagged';
import CUPTagSugested from '../suggested/_main/CUPTagSugested';
import CUPTagSearch from '../search/CUPTagSearch';
//
import './CUPostTagUsers.scss';

//
CUPostTagUsers.propTypes = {};

//
function CUPostTagUsers({ user_tag_arr, handleChangeTag, handleBackHome }) {
    //
    const [value, setValue] = useState('');
    const [friend_arr, setFriendArr] = useState(
        [] || [{ ...initial_user(), checked: false }]
    );

    //
    const ref_interval = useRef(null);

    //
    useEffect(() => {
        getData_Friends();
    }, []);

    // ----- API

    //
    async function getData_Friends(search_name = '') {
        const { data } = await handle_API_Friend_L({
            params: {
                tag_user: 1,
                user_name: search_name,
                page: 1,
                size: 20,
            },
        });

        const new_friend_arr = data.map((item) => {
            return {
                ...item,
                checked: false,
            };
        });

        setFriendArr(new_friend_arr);
    }

    // -----

    //
    function changeSearch(e) {
        const new_value = e.target.value;

        setValue(new_value);

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => {
                getData_Friends(new_value);
            },
        });
    }

    //
    function handleDelTag(tag_ix) {
        const new_user_tag_arr = [...user_tag_arr];
        const user_tag_del = new_user_tag_arr.splice(tag_ix, 1)[0];

        handleChangeTag({ user_tag_arr: new_user_tag_arr, back_home: false });

        setFriendArr([...friend_arr, user_tag_del]);
    }

    //
    function chooseTagFriend(friend_ix) {
        const new_friend_arr = [...friend_arr];
        const friend_obj = new_friend_arr.splice(friend_ix, 1)[0];

        handleChangeTag({
            user_tag_arr: [...user_tag_arr, friend_obj],
            back_home: false,
        });

        setFriendArr(new_friend_arr);
    }

    //
    return (
        <div className="CUPostTagUsers cu-post-part">
            <div>
                <CUPostFixHead title="Tag friend" handleBack={handleBackHome} />
            </div>

            <div>
                <CUPTagSearch
                    value={value}
                    changeSearch={changeSearch}
                    handleConfirmTag={handleBackHome}
                />
            </div>

            <div className="CUPostTagUsers_contain overflow-y-auto scroll-thin">
                {user_tag_arr.length ? (
                    <div>
                        <CUPTagged
                            user_tag_arr={user_tag_arr}
                            handleDelTag={handleDelTag}
                        />
                    </div>
                ) : null}

                <div>
                    <CUPTagSugested
                        friend_arr={friend_arr}
                        chooseTagFriend={chooseTagFriend}
                    />
                </div>
            </div>
        </div>
    );
}

export default CUPostTagUsers;

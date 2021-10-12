import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../_some_function/waitingToDoLast';
//
import { initial_user } from '../../../../../../_initial/user/initialUser';
//
import { handle_API_Friend_L } from '../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CUPTagSearchMb from '../search/CUPTagSearchMb';
import CUPTagSelectedMb from '../selected/CUPTagSelectedMb';
import CUPTagFriendsMb from '../friends/CUPTagFriendsMb';
//
import './CUPostTagUsersMb.scss';

//
CUPostTagUsersMb.propTypes = {};

//
function CUPostTagUsersMb({ user_tag_arr, handleChangeTag, handleBackHome }) {
    //
    const [value, setValue] = useState('');
    const [selected_arr, setSelectedArr] = useState(
        user_tag_arr.map((item) => {
            return {
                ...item,
                checked: true,
            };
        })
    );
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
    function handleChange(e) {
        const new_value = e.target.value;

        setValue(new_value);

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => {
                handleSaveSelected();
                getData_Friends(new_value);
            },
        });
    }

    //
    function handleSaveSelected() {
        setSelectedArr([
            ...selected_arr,
            ...friend_arr.filter((item) => item.checked),
        ]);
    }

    //
    function handleCheckedSelected(ix) {
        setSelectedArr((selected_arr) => {
            const new_selected_arr = [...selected_arr];
            new_selected_arr[ix].checked = !new_selected_arr[ix].checked;

            return new_selected_arr;
        });
    }

    //
    function handleCheckedFriend(ix) {
        setFriendArr((friend_arr) => {
            const new_friend_arr = [...friend_arr];
            new_friend_arr[ix].checked = !new_friend_arr[ix].checked;

            return new_friend_arr;
        });
    }

    function clearTagUser() {
        setSelectedArr([]);
    }

    // ----

    //
    function onConfirmTag() {
        handleChangeTag({
            user_tag_arr: [...selected_arr, ...friend_arr].filter(
                (item) => item.checked
            ),
        });
    }

    //
    return (
        <div className="CUPostTagUsersMb pos-rel">
            <div className="CUPostTagUsersMb_head display-flex align-items-center padding-y-10px padding-x-15px border-bottom-blur font-600 font-16px">
                <div className="padding-right-10px" onClick={handleBackHome}>
                    <IconsArrow x={200} y={200} />
                </div>

                <div>Tag User</div>
            </div>

            <div className="border-bottom-blur">
                <CUPTagSearchMb value={value} handleChange={handleChange} />
            </div>

            {selected_arr.length ? (
                <div>
                    <CUPTagSelectedMb
                        selected_arr={selected_arr}
                        handleCheckedUser={handleCheckedSelected}
                        clearTagUser={clearTagUser}
                    />
                </div>
            ) : null}

            <div>
                <CUPTagFriendsMb
                    friend_arr={friend_arr}
                    handleCheckedUser={handleCheckedFriend}
                />
            </div>

            <div
                className={`bg-fb font-13px padding-10px text-third ${
                    friend_arr.length == 0 ? 'display-none' : ''
                }`}
            >
                Search for other friends
            </div>

            <div className="pos-fixed bottom-0 left-0 w-100per padding-10px bg-primary">
                <button
                    className="btn w-100per padding-y-8px brs-4px bg-blue text-white font-600"
                    type="button"
                    onClick={onConfirmTag}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CUPostTagUsersMb;

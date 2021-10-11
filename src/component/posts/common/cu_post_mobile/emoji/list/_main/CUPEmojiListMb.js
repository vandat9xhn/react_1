import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../../_some_function/waitingToDoLast';
//
import { handle_API_FbEmoji_L } from '../../../../../../../_handle_api/post/cu_emoji';
//
import PostInputSearch from '../../../../input_search/PostInputSearch';
import CUPostEmojiItemMb from '../item/CUPostEmojiItemMb';

//
CUPostEmojiListMb.propTypes = {};

//
function CUPostEmojiListMb({ emoji_id, emoji_type, changeEmoji }) {
    //
    const [state_obj, setStateObj] = useState({
        value_search: '',
        emoji_arr: [] || [
            {
                id: 0,
                type: '',
                title: '',
                name: '',
                icon: null,
            },
        ],
    });

    const { value_search, emoji_arr } = state_obj;

    //
    const ref_interval = useRef(null);

    //
    useEffect(() => {
        getData_Emoji({});
    }, []);

    // ------

    //
    async function getData_Emoji({ search = value_search }) {
        const { data } = await handle_API_FbEmoji_L({
            params: { type: emoji_type, search: search },
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                value_search: value_search,
                emoji_arr: data,
            };
        });
    }

    // ------

    //
    function changeSearch(e) {
        const new_value_search = e.target.value;

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => getData_Emoji({ search: new_value_search }),
        });
    }

    //
    return (
        <div className="CUPostEmojiListMb">
            <div className="padding-10px border-bottom-blur">
                <PostInputSearch
                    value={value_search}
                    placeholder={`Search for ${emoji_type}`}
                    changeSearch={changeSearch}
                />
            </div>

            <div>
                {emoji_arr.map((emoji_obj) => (
                    <div key={emoji_obj.id} className="border-bottom-blur">
                        <CUPostEmojiItemMb
                            emoji_obj={emoji_obj}
                            is_active={emoji_obj.id == emoji_id}
                            changeEmoji={changeEmoji}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPostEmojiListMb;

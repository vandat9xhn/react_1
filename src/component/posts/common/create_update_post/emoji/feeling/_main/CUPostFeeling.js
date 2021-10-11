import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../../_some_function/waitingToDoLast';
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_FbEmoji_L } from '../../../../../../../_handle_api/post/cu_emoji';
//
import PostInputSearch from '../../../../input_search/PostInputSearch';
import CUPostEmojiItem from '../../item/CUPostEmojiItem';

//
CUPostFeeling.propTypes = {};

//
function CUPostFeeling({ emoji_id, type_ix, changeFeeling }) {
    //
    const [value_search, setValueSearch] = useState('');
    const [feeling_arr, setFeelingArr] = useState(
        [] || [
            {
                id: 0,
                type: 'feeling',
                name: 'feeling',
                icon: null,
            },
        ]
    );

    //
    const ref_main_elm = useRef(null);
    const ref_interval = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: getData_Feeling,
        });
    }, []);

    // ---- API

    //
    async function getData_Feeling(search = '') {
        const { data } = await handle_API_FbEmoji_L({
            params: {
                type: 'feeling',
                search: search,
            },
        });

        setFeelingArr(data);
    }

    // -----

    //
    function changeSearch(e) {
        const new_value_search = e.target.value;
        setValueSearch(new_value_search);

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => getData_Feeling(new_value_search),
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="CUPostFeeling">
            <div className="padding-x-20px padding-y-12px">
                <PostInputSearch
                    value={value_search}
                    placeholder="Search for feelings"
                    changeSearch={changeSearch}
                />
            </div>

            <div className="display-flex flex-wrap padding-8px">
                {feeling_arr.map((feeling_obj, ix) => (
                    <div key={ix} className="w-50per">
                        <CUPostEmojiItem
                            emoji_obj={feeling_obj}
                            is_active={
                                type_ix == 0 && feeling_obj.id == emoji_id
                            }
                            changeEmoji={changeFeeling}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPostFeeling;

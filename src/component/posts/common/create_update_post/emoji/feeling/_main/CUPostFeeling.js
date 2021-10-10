import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../../_some_function/waitingToDoLast';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import PostInputSearch from '../../../../input_search/PostInputSearch';
import CUPostEmojiItem from '../../item/CUPostEmojiItem';

//
const FEELING_ARR = [
    {
        id: 1,
        type: 'feeling',
        name: 'happy',
        icon: null,
    },
    {
        id: 2,
        type: 'feeling',
        name: 'love',
        icon: null,
    },
    {
        id: 3,
        type: 'feeling',
        name: 'sad',
        icon: null,
    },
    {
        id: 4,
        type: 'feeling',
        name: 'crazy',
        icon: null,
    },
];

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

    // ----

    //
    function getData_Feeling(search = '') {
        setFeelingArr(FEELING_ARR);
    }

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

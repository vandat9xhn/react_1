import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../../_some_function/waitingToDoLast';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PostInputSearch from '../../../../input_search/PostInputSearch';
import CUPActivityTitleItem from '../title_item/CUPActivityTitleItem';
import CUPostEmojiItem from '../../item/CUPostEmojiItem';
//
import './CUPostActivity.scss';

//
const ACTIVITY_ARR = [
    {
        id: 101,
        type: 'celebrating',
        name: 'a birthday',
        icon: null,
    },
    {
        id: 102,
        type: 'celebrating',
        name: 'friendship',
        icon: null,
    },
    {
        id: 103,
        type: 'celebrating',
        name: 'victory',
        icon: null,
    },
    {
        id: 104,
        type: 'celebrating',
        name: 'Christmas',
        icon: null,
    },

    {
        id: 201,
        type: 'eating',
        name: 'break first',
        icon: null,
    },
    {
        id: 202,
        type: 'eating',
        name: 'lunch',
        icon: null,
    },
    {
        id: 203,
        type: 'eating',
        name: 'chicken',
        icon: null,
    },

    {
        id: 301,
        type: 'watching',
        name: 'tv',
        icon: null,
    },
    {
        id: 302,
        type: 'watching',
        name: 'film',
        icon: null,
    },
    {
        id: 303,
        type: 'watching',
        name: 'football',
        icon: null,
    },
];

const ACTIVITY_TYPE_ARR = [
    {
        type: 'celebrating',
        title: 'Celebrating...',
        icon: null,
    },
    {
        type: 'watching',
        title: 'Watching...',
        icon: null,
    },
    {
        type: 'eating',
        title: 'Eating...',
        icon: null,
    },
];

//
CUPostActivity.propTypes = {};

//
function CUPostActivity({ emoji_id, emoji_type, changeActivity }) {
    //
    const [state_obj, setStateObj] = useState({
        value_search: '',
        activity_type: emoji_type,
        activity_arr: [] || [
            {
                id: 0,
                type: '',
                name: '',
                icon: null,
            },
        ],
        activity_type_arr: [] || [
            {
                type: '',
                icon: null,
            },
        ],
    });

    const { value_search, activity_type, activity_type_arr, activity_arr } =
        state_obj;

    //
    const ref_main_elm = useRef(null);
    const ref_interval = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => getData_Activity({}),
        });
    }, []);

    // ----

    //
    function getData_Activity({ search = value_search, type = activity_type }) {
        setStateObj((state_obj) => {
            let new_activity_arr = [...state_obj.activity_arr];
            let new_activity_type_arr = [...state_obj.activity_type_arr];

            if (type != '') {
                new_activity_arr = ACTIVITY_ARR.filter(
                    (item) => item.type == type
                );
            } else {
                new_activity_type_arr = ACTIVITY_TYPE_ARR;
            }

            return {
                ...state_obj,
                value_search: value_search,
                activity_type: type,

                activity_arr: new_activity_arr,
                activity_type_arr: new_activity_type_arr,
            };
        });
    }

    // -----

    //
    function changeActivityTitle(new_type_ix = -1) {
        getData_Activity({
            type: new_type_ix == -1 ? '' : activity_type_arr[new_type_ix].type,
        });
    }

    //
    function clearActivityName() {
        changeActivityTitle();
    }

    //
    function changeSearch(e) {
        const new_value_search = e.target.value;

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => getData_Activity({ search: new_value_search }),
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="CUPostActivity">
            <div className="display-flex align-items-center margin-bottom-10px padding-x-20px padding-y-12px">
                {activity_type ? (
                    <div className="CUPostActivity_title display-flex-center padding-x-10px padding-y-5px brs-4px bg-fb-active text-blue font-600">
                        <div className="margin-right-10px">
                            {
                                ACTIVITY_TYPE_ARR.find(
                                    (item) => item.type == activity_type
                                ).title
                            }
                        </div>

                        <div
                            className="display-flex-center cursor-pointer"
                            onClick={clearActivityName}
                        >
                            <IconsArrow y={400} size_icon="14px" />
                        </div>
                    </div>
                ) : null}

                <div className="flex-grow-1 margin-left-15px">
                    <PostInputSearch
                        value={value_search}
                        changeSearch={changeSearch}
                    />
                </div>
            </div>

            <div className="padding-8px">
                {activity_type == '' ? (
                    <div>
                        {activity_type_arr.map((activity_title_obj, ix) => (
                            <div key={ix}>
                                <CUPActivityTitleItem
                                    activity_title_obj={activity_title_obj}
                                    ix={ix}
                                    changeActivityTitle={changeActivityTitle}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="display-flex flex-wrap">
                        {activity_arr.map((activity_obj, ix) => (
                            <div key={ix} className="w-50per">
                                <CUPostEmojiItem
                                    emoji_obj={activity_obj}
                                    is_active={activity_obj.id == emoji_id}
                                    changeEmoji={changeActivity}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CUPostActivity;

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../../_some_function/waitingToDoLast';
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import {
    handle_API_FbEmojiType_L,
    handle_API_FbEmoji_L,
} from '../../../../../../../_handle_api/post/cu_emoji';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PostInputSearch from '../../../../input_search/PostInputSearch';
import CUPActivityTypeItem from '../title_item/CUPActivityTypeItem';
import CUPostEmojiItem from '../../item/CUPostEmojiItem';
//
import './CUPostActivity.scss';

//
CUPostActivity.propTypes = {};

//
function CUPostActivity({ emoji_obj, changeActivity }) {
    //
    const [value_search, setValueSearch] = useState('');

    const [state_obj, setStateObj] = useState({
        activity_type: emoji_obj.type == 'feeling' ? '' : emoji_obj.type || '',
        activity_title: emoji_obj.title,
        activity_arr: [] || [
            {
                id: 0,
                type: '',
                title: '',
                name: '',
                icon: null,
            },
        ],
        activity_type_arr: [] || [
            {
                type: '',
                title: '',
                icon: null,
            },
        ],
    });

    const {
        activity_type,
        activity_title,

        activity_type_arr,
        activity_arr,
    } = state_obj;

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

    // ---- API

    //
    async function getData_ActivityType({ search = value_search }) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                activity_arr: [],
                activity_type: '',
                activity_title: '',
            };
        });

        const { data } = await handle_API_FbEmojiType_L({
            params: {
                search: search,
            },
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                activity_type_arr: data,
            };
        });
    }

    //
    async function getData_ActivityList({
        search = value_search,
        type = activity_type,
    }) {
        const new_activity_title = activity_type_arr.length
            ? activity_type_arr.find((item) => item.type == type).title
            : '';

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                activity_type: type,
                activity_title: new_activity_title,
            };
        });

        const { data } = await handle_API_FbEmoji_L({
            params: {
                type: type,
                search: search,
            },
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                activity_arr: data,
                activity_title:
                    new_activity_title ||
                    data.find((item) => item.type == type).title,
            };
        });
    }

    //
    function getData_Activity({ search = value_search, type = activity_type }) {
        if (type) {
            getData_ActivityList({ search: search, type: type });
        } else {
            getData_ActivityType({ search: search });
        }
    }

    // -----

    //
    function changeActivityType(new_type_ix = -1) {
        getData_Activity({
            type: new_type_ix == -1 ? '' : activity_type_arr[new_type_ix].type,
        });
    }

    //
    function clearActivityName() {
        if (activity_type_arr.length) {
            setStateObj({
                ...state_obj,
                activity_type: '',
                activity_title: '',
                activity_arr: [],
            });

            return;
        }

        changeActivityType();
    }

    //
    function changeSearch(e) {
        const new_value_search = e.target.value;
        setValueSearch(new_value_search);

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
                <div
                    className={`CUPostActivity_title margin-right-15px padding-x-10px padding-y-5px brs-4px bg-fb-active text-blue font-600 ${
                        activity_title ? 'display-flex-center' : 'display-none'
                    }`}
                >
                    <div className="margin-right-10px">{activity_title}</div>

                    <div
                        className="display-flex-center cursor-pointer"
                        onClick={clearActivityName}
                    >
                        <IconsArrow y={400} size_icon="14px" />
                    </div>
                </div>

                <div className="flex-grow-1">
                    <PostInputSearch
                        value={value_search}
                        placeholder={`Search for ${
                            activity_type || 'activities'
                        }`}
                        changeSearch={changeSearch}
                    />
                </div>
            </div>

            <div className="padding-8px">
                {activity_type == '' ? (
                    <div>
                        {activity_type_arr.map((activity_type_obj, ix) => (
                            <div key={ix}>
                                <CUPActivityTypeItem
                                    activity_type_obj={activity_type_obj}
                                    ix={ix}
                                    changeActivityType={changeActivityType}
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
                                    is_active={activity_obj.id == emoji_obj.id}
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

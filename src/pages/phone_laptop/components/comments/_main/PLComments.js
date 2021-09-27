import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { useMultiPages } from '../../../../../_hooks/useMultiPages';
//
import Pagination from '../../../../../component/pagination/_main/Pagination';
//
import PLCommentsInput from '../input/_main/PLCommentsInput';
import PLCmtTotal from '../total/PLCmtTotal';
import PLCmtSearch from '../search/PLCmtSearch';
import PLCmtSort from '../sort/_main/PLCmtSort';
import PLCmtItem from '../cmt/_main/PLCmtItem';
import PLReplies from '../replies/_main/PLReplies';
//
import './PLComments.scss';

//
const SORT_ARR = ['Độ chính xác', 'Mới nhất'];
const SORT_KEY_ARR = ['exact', '-created_time'];

//
PLComments.propTypes = {};

//
function PLComments({ handle_API_L }) {
    //
    const ref_main_elm = useRef(null);

    const ref_tech_checked = useRef(false);
    const ref_search_value = useRef('');
    const ref_sort_key = useRef('');

    //
    const {
        state_obj,
        setStateObj,

        getData_API,
        handleChangePage,
        refreshData_API,
    } = useMultiPages({
        initial_page: 1,
        handle_API_L: (new_page) =>
            handle_API_L({
                page: new_page,
                tech_checked: ref_tech_checked.current,
                search: ref_search_value.current,
                sort_by: ref_sort_key.current,
            }),

        other_state: {
            tech_checked: false,
            sort_ix: -1,
            files: [],
            img_preview_arr: [] || [
                {
                    url: '',
                    type: '',
                },
            ],
        },
    });

    const {
        page_obj,
        page,
        pages,
        count,

        files,
        img_preview_arr,

        tech_checked,
        sort_ix,

        is_fetching,
        has_fetched,
    } = state_obj;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_API(1);
            },
        });
    }, []);

    // ------

    //
    function handelLikeAndNotLike({ is_like = true, cmt_ix, reply_ix }) {
        setStateObj((state_obj) => {
            const { page } = state_obj;
            const new_page_obj = { ...state_obj.page_obj };

            if (reply_ix != null) {
                new_page_obj[page][cmt_ix].reply_arr[reply_ix][
                    is_like ? 'user_liked' : 'user_not_liked'
                ] = true;
            } else {
                new_page_obj[page][cmt_ix][
                    is_like ? 'user_liked' : 'user_not_liked'
                ] = true;
            }

            return {
                ...state_obj,
                page_obj: new_page_obj,
            };
        });
    }

    // ------

    //
    function chooseImages({ files: new_files, vid_pics }) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                files: [...state_obj.files, ...new_files],
                img_preview_arr: [...state_obj.img_preview_arr, ...vid_pics],
            };
        });
    }

    //
    function deleteImg(ix) {
        setStateObj((state_obj) => {
            const new_files = [...state_obj.files];
            const new_img_preview_arr = [...state_obj.img_preview_arr];

            new_files.splice(ix, 1);
            new_img_preview_arr.splice(ix, 1);

            return {
                ...state_obj,
                files: new_files,
                img_preview_arr: new_img_preview_arr,
            };
        });
    }

    //
    function sendComment(content) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                files: [],
                img_preview_arr: [],
            };
        });
    }

    //
    function handleCheckedTech() {
        const new_tech_checked = !ref_tech_checked.current;
        ref_tech_checked.current = new_tech_checked;

        refreshData_API({
            new_page: 1,
            start_obj_state: {
                tech_checked: new_tech_checked,
            },
        });
    }

    //
    function handleSearch(new_search_value) {
        if (new_search_value.trim() == ref_search_value.current.trim()) {
            return;
        }

        ref_search_value.current = new_search_value;

        refreshData_API({
            new_page: 1,
        });
    }

    //
    function handleSort(new_sort_ix) {
        ref_sort_key.current = SORT_KEY_ARR[new_sort_ix];

        refreshData_API({
            new_page: 1,
            start_obj_state: {
                sort_ix: new_sort_ix,
            },
        });
    }

    //
    function onChangePage(new_page) {
        ref_main_elm.current.scrollIntoView();
        handleChangePage(new_page);
    }

    // -----

    //
    function goToReply({ cmt_ix, reply_ix }) {
        setStateObj((state_obj) => {
            const { page } = state_obj;
            const new_page_obj = { ...state_obj.page_obj };

            new_page_obj[page][cmt_ix].open_reply = true;

            return {
                ...state_obj,
                page_obj: new_page_obj,
            };
        });

        setTimeout(() => {
            const textarea = ref_main_elm.current
                .getElementsByClassName('PLComments_cmt_item')
                [cmt_ix].getElementsByTagName('textarea')[0];

            const reply_user_name =
                reply_ix != null
                    ? page_obj[page][cmt_ix].reply_arr[reply_ix].user_name
                    : page_obj[page][cmt_ix].user_name;

            textarea.value = `@${reply_user_name}: `;
            textarea.focus();
        }, 0);
    }

    //
    function handleLike({ cmt_ix, reply_ix }) {
        handelLikeAndNotLike({
            is_like: true,
            cmt_ix: cmt_ix,
            reply_ix: reply_ix,
        });
    }

    //
    function handleNotLike({ cmt_ix, reply_ix }) {
        handelLikeAndNotLike({
            is_like: false,
            cmt_ix: cmt_ix,
            reply_ix: reply_ix,
        });
    }

    // ------

    //
    function chooseReplyImages({ cmt_ix, files: new_files, vid_pics }) {
        setStateObj((state_obj) => {
            const { page } = state_obj;
            const new_page_obj = { ...state_obj.page_obj };

            new_page_obj[page][cmt_ix].files.push(...new_files);
            new_page_obj[page][cmt_ix].img_preview_arr.push(...vid_pics);

            return {
                ...state_obj,
                page_obj: new_page_obj,
            };
        });
    }

    //
    function deleteReplyImg({ cmt_ix, del_ix }) {
        setStateObj((state_obj) => {
            const { page } = state_obj;
            const new_page_obj = { ...state_obj.page_obj };

            new_page_obj[page][cmt_ix].files.splice(del_ix, 1);
            new_page_obj[page][cmt_ix].img_preview_arr.splice(del_ix, 1);

            return {
                ...state_obj,
                page_obj: new_page_obj,
            };
        });
    }

    //
    function sendReply({ cmt_ix, content }) {
        setStateObj((state_obj) => {
            const { page } = state_obj;
            const new_page_obj = { ...state_obj.page_obj };

            new_page_obj[page][cmt_ix].files = [];
            new_page_obj[page][cmt_ix].img_preview_arr = [];

            return {
                ...state_obj,
                page_obj: new_page_obj,
            };
        });
    }

    //
    return (
        <div ref={ref_main_elm} className="PLComments">
            <div className="margin-bottom-15px">
                <PLCommentsInput
                    img_preview_arr={img_preview_arr}
                    chooseImages={chooseImages}
                    deleteImg={deleteImg}
                    sendComment={sendComment}
                />
            </div>

            <div className="margin-bottom-15px">
                <div className="display-flex space-between margin-bottom-15px padding-y-10px">
                    <div>
                        <PLCmtTotal
                            count={count}
                            tech_checked={tech_checked}
                            handleCheckedTech={handleCheckedTech}
                        />
                    </div>

                    <div>
                        <PLCmtSearch handleSearch={handleSearch} />
                    </div>
                </div>

                <div>
                    <PLCmtSort
                        sort_arr={SORT_ARR}
                        sort_ix={sort_ix}
                        handleSort={handleSort}
                    />
                </div>
            </div>

            <div className="PLComments_cmt margin-bottom-15px padding-top-15px border-top-blur">
                <ul className="list-none">
                    {page_obj[page].map((cmt_obj, cmt_ix) => (
                        <li
                            key={cmt_obj.id}
                            className="PLComments_cmt_item margin-bottom-15px"
                        >
                            <div>
                                <PLCmtItem
                                    ix_obj={{
                                        cmt_ix: cmt_ix,
                                        reply_ix: null,
                                    }}
                                    first_letter_user_name={
                                        cmt_obj.first_letter_user_name
                                    }
                                    user_name={cmt_obj.user_name}
                                    is_admin={cmt_obj.is_admin}
                                    content={cmt_obj.content}
                                    img={cmt_obj.img}
                                    commented_time={cmt_obj.commented_time}
                                    user_liked={cmt_obj.user_liked}
                                    user_not_liked={cmt_obj.user_not_liked}
                                    //
                                    goToReply={goToReply}
                                    handleLike={handleLike}
                                    handleNotLike={handleNotLike}
                                />
                            </div>

                            {cmt_obj.reply_arr.length ? (
                                <div className="margin-top-15px">
                                    <PLReplies
                                        cmt_ix={cmt_ix}
                                        reply_arr={cmt_obj.reply_arr}
                                        goToReply={goToReply}
                                        handleLike={handleLike}
                                        handleNotLike={handleNotLike}
                                    />
                                </div>
                            ) : null}

                            {cmt_obj.open_reply ? (
                                <div className="margin-top-15px">
                                    <PLCommentsInput
                                        img_preview_arr={
                                            cmt_obj.img_preview_arr
                                        }
                                        chooseImages={(data) =>
                                            chooseReplyImages({
                                                ...data,
                                                cmt_ix: cmt_ix,
                                            })
                                        }
                                        deleteImg={(del_ix) =>
                                            deleteReplyImg({
                                                cmt_ix: cmt_ix,
                                                del_ix: del_ix,
                                            })
                                        }
                                        sendComment={(content) =>
                                            sendReply({
                                                content: content,
                                                cmt_ix: cmt_ix,
                                            })
                                        }
                                    />
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`h-100vh ${is_fetching ? '' : 'display-none'}`}
            ></div>

            <div
                className={`PLComments_pagination ${
                    has_fetched && pages > 1 ? '' : 'display-none'
                }`}
            >
                <Pagination
                    count={pages}
                    num_side_center={2}
                    current={page}
                    is_fetching={is_fetching}
                    handleChangePage={onChangePage}
                />
            </div>
        </div>
    );
}

export default PLComments;

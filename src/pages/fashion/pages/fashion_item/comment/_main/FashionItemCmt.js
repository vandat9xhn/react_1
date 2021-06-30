import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import Pagination from '../../../../../../component/pagination/_main/Pagination';
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
import CommentInput from '../../../../../../component/input_img_vid_preview/comment_input/CommentInput';
//
import {
    handle_API_FashionComment_C,
    handle_API_FashionComment_L,
} from '../../../../__handle_api/item/comment/FashionItemCmtHandleAPI';
//
import './FashionItemCmt.scss';
//
import FashionItemCmtItem from '../item/FashionItemCmtItem';
import FashionItemCmtSkeleton from '../skeleton/FashionItemCmtSkeleton';

//
FashionItemCmt.propTypes = {
    id: PropTypes.number,
};

//
function FashionItemCmt({ id: product_id }) {
    //
    const { user, openZoomVidPics } = useContext(context_api);

    //
    const [cmt_state, setCmtState] = useState({
        cmt_pages_obj: { 1: [] },

        count: 0,
        page: 1,
        pages: 1,

        is_fetching: false,
    });

    const { cmt_pages_obj, count, page, pages, is_fetching, has_fetched } =
        cmt_state;

    //
    const ref_comment = useRef(null);

    //
    useEffect(() => {
        const new_page = 1;

        observeToDo(
            ref_comment.current,
            () =>
                getData_API_Comment({
                    new_page: new_page,
                    start_obj_state: {
                        cmt_pages_obj: { [new_page]: [] },
                        has_fetched: false,
                    },
                }),
            0
        );
    }, [product_id]);

    /* ---------------- GET API ---------------- */

    //
    async function getData_API_Comment({ new_page = 1, start_obj_state = {} }) {
        try {
            setCmtState({
                ...cmt_state,
                is_fetching: true,
                page: new_page,
                ...start_obj_state,
            });

            const c_count = 0;

            const {
                data,
                pages: new_pages,
                count: new_count,
            } = await handle_API_FashionComment_L({
                product_model: product_id,
                c_count: c_count,
                page: new_page,
            });

            setCmtState((cmt_state) => ({
                ...cmt_state,
                cmt_pages_obj: {
                    ...cmt_state.cmt_pages_obj,
                    [new_page]:
                        new_page == 1 && has_fetched
                            ? [...cmt_state.cmt_pages_obj[1], ...data]
                            : data,
                },
                count: has_fetched ? cmt_state.count : new_count,
                page: new_page,
                pages: has_fetched ? cmt_state.pages : new_pages,

                is_fetching: false,
                has_fetched: true,
            }));
        } catch (e) {
            console.log(e);
        }
    }

    /* -------------------------------- */

    //
    function zoomVidPics(comments_ix, vid_pic_ix) {
        openZoomVidPics(cmt_pages_obj[page][comments_ix].vid_pics, vid_pic_ix);
    }

    //
    function changeCurrentPage(new_page) {
        if (cmt_pages_obj[new_page]) {
            setCmtState({
                ...cmt_state,
                page: new_page,
            });
        }
        //
        else {
            getData_API_Comment({ new_page: new_page });
        }
    }

    //
    async function handleSend(content, files, urls) {
        try {
            const data = await handle_API_FashionComment_C({
                content: content,
                files: files,
            });

            cmt_pages_obj[1].unshift({
                id: data.id,
                user: user,
                content_obj: {
                    content_more: '',
                    content: content,
                    has_more_content: false,
                },
                vid_pics: urls,
                created_time: new Date().getTime(),
            });

            setCmtState({
                ...cmt_state,
                count: count + 1,
            });
        } catch (e) {
            console.log(e);
        }
    }

    //
    return (
        <div
            ref={ref_comment}
            className="FashionItemCmt padding-8px brs-5px-md"
        >
            <h3 className="margin-0">COMMENT ({count}):</h3>
            <hr className="App_hr-bg" />

            <div>
                {!is_fetching &&
                    cmt_pages_obj[page].map((item, cmt_ix) => (
                        <FashionItemCmtItem
                            key={`CommentContent_${item.id}`}
                            ix={cmt_ix}
                            item={item}
                            zoomVidPics={zoomVidPics}
                        />
                    ))}

                {is_fetching && <FashionItemCmtSkeleton />}
            </div>
            <br />

            <div className="FashionItemCmt_pages">
                <div className="FashionItemCmt_pages-contain">
                    <Pagination
                        count={pages}
                        num_side_center={2}
                        current={page}
                        handleChangePage={changeCurrentPage}
                    />
                </div>
            </div>

            {user.id && (
                <div className="FashionItemCmt_input">
                    <CommentInput
                        deps_reset={product_id}
                        file_multiple={true}
                        handleSend={handleSend}
                    />
                </div>
            )}
        </div>
    );
}

export default FashionItemCmt;

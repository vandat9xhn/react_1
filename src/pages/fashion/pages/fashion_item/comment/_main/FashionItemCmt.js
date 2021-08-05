import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { useMultiPages } from '../../../../../../_hooks/useMultiPages';
//
import Pagination from '../../../../../../component/pagination/_main/Pagination';
import CommentInput from '../../../../../../component/input_img_vid_preview/comment_input/CommentInput';
//
import {
    handle_API_FashionComment_C,
    handle_API_FashionComment_L,
} from '../../../../../../_handle_api/fashion/FashionItemCmtHandleAPI';
//
import FashionItemCmtItem from '../item/_main/FashionItemCmtItem';
import FashionItemCmtSkeleton from '../skeleton/FashionItemCmtSkeleton';
//
import './FashionItemCmt.scss';

//
FashionItemCmt.propTypes = {
    id: PropTypes.number,
};

//
function FashionItemCmt({ id: product_id }) {
    //
    const { user } = useContext(context_api);

    //
    const ref_comment = useRef(null);
    const ref_comment_head = useRef(null);

    //
    const { state_obj, setStateObj, getData_API, handleChangePage } =
        useMultiPages({
            initial_page: 1,
            handle_API_L: (new_key) =>
                handle_API_FashionComment_L({
                    product_model: product_id,
                    page: new_key,
                }),
        });

    const { page_obj, count, page, pages, is_fetching } = state_obj;

    //
    useEffect(() => {
        observeToDo(ref_comment.current, () => getData_API(page), 0);
    }, [product_id]);

    //
    function changeCurrentPage(new_page) {
        handleChangePage(new_page);
        ref_comment_head.current.scrollIntoView();
    }

    //
    async function handleSend(content, files, urls) {
        try {
            const data = await handle_API_FashionComment_C({
                content: content,
                files: files,
            });

            page_obj[1].unshift({
                id: data.id,
                user: user,
                content_obj: {
                    content_more: '',
                    content: content,
                    has_more_content: false,
                },
                vid_pics: urls,
                count_vid_pic: urls.length,
                created_time: new Date().getTime(),
            });

            setStateObj({
                ...state_obj,
                count: count + 1,
            });

            ref_comment_head.current.scrollIntoView();
        } catch (e) {
            console.log(e);
        }
    }

    //
    return (
        <div ref={ref_comment} className="FashionItemCmt bg-fb">
            <div className="FashionItemCmt_row display-flex space-between">
                <div className="FashionItemCmt_left padding-8px bg-primary brs-5px-md">
                    <h2 ref={ref_comment_head} className="margin-0 font-20px">
                        Comment ({count})
                    </h2>
                    <hr className="App_hr-bg" />

                    <div>
                        {!is_fetching ? (
                            page_obj[page].map((item, cmt_ix) => (
                                <FashionItemCmtItem
                                    key={`CommentContent_${item.id}`}
                                    ix={cmt_ix}
                                    item={item}
                                />
                            ))
                        ) : (
                            <FashionItemCmtSkeleton />
                        )}
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

                    {user.id ? (
                        <div className="FashionItemCmt_input">
                            <CommentInput
                                key={product_id}
                                file_multiple={true}
                                handleSend={handleSend}
                            />
                        </div>
                    ) : null}
                </div>

                <div className="FashionItemCmt_right">
                    <div className="bg-primary h-100per brs-5px"></div>
                </div>
            </div>
        </div>
    );
}

export default FashionItemCmt;

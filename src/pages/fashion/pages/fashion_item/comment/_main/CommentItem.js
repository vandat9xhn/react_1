import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import CommentContent from '../content/CommentContent';
import CommentInput from '../../../../../../component/input_img_vid_preview/comment_input/CommentInput';
import makeFormData from '../../../../../../_some_function/makeFormData';
import Pagination from '../../../../../../component/pagination/_main/Pagination';
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
import { API_FashionComment_L } from '../../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
import { API_FashionComment_C } from '../../../../../../api/api_django/fashion/APIFashionToken';
//
import './CommentItem.scss';


//
const page_size = 2

// class
function CommentItem(props) {
    // const product_id = useParams().id;
    const {product_id} = props;
    //
    const {openZoomVidPics} = useContext(context_api)
    //
    const [comments, setComments] = useState({});
    const [count_comment, setCountComment] = useState(0);
    const [c_page, setCPage] = useState('1');
    const [is_fetching, setIsFetching] = useState(false);
    //
    const pages = useRef(1);

    //
    useEffect(() => {
        pages.current = 1;
        setComments({});
        setTimeout(() => {
            changeCurrentPage(1);
        }, 1);

    }, [product_id]);

    /* ---------------- GET API ---------------- */

    //
    async function getComment(page) {
        setIsFetching(true);
        //
        try {
            const res = await API_FashionComment_L({
                product_model: product_id,
                page: page,
                size: page_size,
                c_count: page == 1 ? 0 : comments['1'].length - page_size,
            });
            const {data, pages: new_pages, count} = res.data
            //
            setComments(comments => ({
                ...comments,
                [page]: data
            }))
            if (page == 1) {
                pages.current = new_pages;
                setCountComment(count);
            }
            setCPage(page);
            setIsFetching(false);
            //
        } catch (e) {
            console.log(e);
        }
    }

    /* -------------------------------- */

    // change page
    function changeCurrentPage(i) {
        const new_page = i.toString()
        if (comments[new_page] == undefined) {
            getComment(new_page);
        } else {
            setCPage(new_page);
        }
    }

    //
    function zoomVidPics(comments_ix, vid_pic_ix) {
        openZoomVidPics(
            comments[c_page][comments_ix].vid_pics,
            vid_pic_ix
        );
    }

    /* ---------------- SEND ---------------- */

    // Make Form Data
    function handleMakeFormData(text, files) {
        const formData = makeFormData({
            text: text,
            product_model: product_id,
        });
        for (const file of files) {
            formData.append('vid_pics[]', file.image || file.video);
        }
        //
        return formData;
    }

    // send comment
    async function handleSend(text, files, urls) {
        try {
            const formData = handleMakeFormData(text, files);
            const res = await API_FashionComment_C(formData);
            //
            comments[1].unshift(res.data);
            setCountComment(count_comment + 1);
            //
            // comments[1].unshift({
            //     user: {
            //         first_name: 'Your',
            //         last_name: 'Name',
            //     },
            //     comment_content: text,
            //     vid_pics: urls,
            //     created_time: new Date().getTime(),
            // });
            // setState({
            //     count: count + 1,
            // });
        } catch (e) {
            console.log(e);
        }
    }

    //
    return (
        <div className="CommentItem">
            <div className="CommentItem_contain brs-5px">
                <div className="label-field">COMMENT ({count_comment}):</div>
                <hr className="App_hr-bg" />

                {/* content */}
                <div>
                    {comments[c_page] &&
                        !is_fetching &&
                        comments[c_page].map((cmt, cmt_ix) => (
                            <CommentContent
                                key={`CommentContent_${cmt_ix}`}
                                cmt_ix={cmt_ix}
                                user={cmt.user}
                                content={cmt.text}
                                vid_pics={cmt.vid_pics}
                                created_time={cmt.created_time}
                                zoomVidPics={zoomVidPics}
                            />
                        ))}

                    {is_fetching && [1, 2, 3].map(ix => (
                        <div key={`CommentItem_skeleton_${ix}`} className="CommentItem_skeleton">
                            <div className="CommentItem_skeleton-user">
                                <SkeletonDiv/>
                            </div>

                            <div className="CommentItem_skeleton-content">
                                <SkeletonDiv/>
                            </div>
                        </div>
                    ))}
                </div>
                <br />

                {/* pages */}
                <div className="CommentItem_pages">
                    <div className="CommentItem_pages-contain">
                        <Pagination
                            count={pages.current}
                            num_side_center={2}
                            current={+c_page}
                            handleChangePage={changeCurrentPage}
                        />
                    </div>
                </div>

                {/* input */}
                {localStorage.is_login == 1 && (
                    <div className="CommentItem_input">
                        <CommentInput
                            file_multiple={true}
                            handleSend={handleSend}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

CommentItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CommentItem;

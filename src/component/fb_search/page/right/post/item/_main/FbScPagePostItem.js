import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import FbScPagePostItemHead from '../head/FbScPagePostItemHead';
import FbScPagePostItemContent from '../content/FbScPagePostItemContent';
import FbScPagePostItemInfo from '../info/_main/FbScPagePostItemInfo';

//
FbScPagePostItem.propTypes = {};

//
function FbScPagePostItem({ post }) {
    //
    const {
        id,
        user,
        content_obj,
        vid_pics,
        vid_pic_count,

        count_comment,
        reacted_ix_arr,
        reacted_count,
        user_reacted_ix,

        permission_post,
        updated_time,
    } = post;

    //
    const ref_link_content = useRef(null);

    // -----

    //
    function handleClickBtnCmt() {
        ref_link_content.current.click();
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    //
    return (
        <div className="FbScPagePostItem brs-8px bg-primary box-shadow-1">
            <div className="padding-16px border-bottom-blur">
                <FbScPagePostItemHead
                    user={user}
                    post_id={id}
                    handleAction={handleAction}
                />
            </div>

            <div className="padding-x-16px padding-top-16px padding-bottom-10px">
                <div className="margin-bottom-12px">
                    <Link
                        ref={ref_link_content}
                        className="color-inherit"
                        to={`/posts/${id}`}
                    >
                        <FbScPagePostItemContent
                            content={content_obj.content}
                            vid_pics={vid_pics}
                            vid_pic_count={vid_pic_count}
                            permission={permission_post}
                            updated_time={updated_time}
                        />
                    </Link>
                </div>

                <div>
                    <FbScPagePostItemInfo
                        post_id={id}
                        count_comment={count_comment}
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                        user_reacted_ix={user_reacted_ix}
                        handleClickBtnCmt={handleClickBtnCmt}
                    />
                </div>
            </div>
        </div>
    );
}

export default FbScPagePostItem;

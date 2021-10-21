import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import Like from '../../../../like/_main/Like';
//
import BtnPostCmt from '../cmt/BtnPostCmt';
import BtnPostShare from '../share/BtnPostShare';
//
import './LikeShareCmt.scss';

//
LikeShareCmt.propTypes = {
    user_reacted_ix: PropTypes.number,
    enabled_like: PropTypes.bool,
    //
    enabled_cmt: PropTypes.bool,
    count_comment: PropTypes.number,
    //
    enabled_share: PropTypes.bool,
    count_share: PropTypes.number,
};

LikeShareCmt.defaultProps = {
    enabled_like: true,
    enabled_share: true,
    enabled_cmt: true,
};

//
function LikeShareCmt({
    parent_id,
    //
    user_reacted_ix,
    enabled_like,
    //
    enabled_cmt,
    count_comment,
    //
    enabled_share,
    count_share,
    count_user_shared,
    //
    handleClickBtnCmt,
}) {
    //
    const { ws_send, ws_type_post } = useContext(context_post);

    //
    function changeTypeLike(new_type_like) {
        ws_send({
            id: parent_id,
            type: ws_type_post + '_like',
            type_like: new_type_like,
        });
    }
    //
    function sharePost() {
        if (count_user_shared < 5) {
            ws_send({
                id: parent_id,
                type: ws_type_post + '_share',
            });
        }
    }

    //
    return (
        <div className="LikeShareCmt padding-y-5px border-top-blur border-bottom-blur text-secondary font-500 user-select-none">
            <div className="LikeShareCmt_row display-flex-center">
                {enabled_like && (
                    <div className="LikeShareCmt_item">
                        <Like
                            type_like={user_reacted_ix}
                            changeTypeLike={changeTypeLike}
                        />
                    </div>
                )}

                {enabled_cmt && (
                    <div className="LikeShareCmt_item">
                        <BtnPostCmt
                            count_comment={count_comment}
                            handleClickBtnCmt={handleClickBtnCmt}
                        />
                    </div>
                )}

                {enabled_share && (
                    <div className="LikeShareCmt_item">
                        <BtnPostShare
                            count_share={count_share}
                            sharePost={sharePost}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default LikeShareCmt;

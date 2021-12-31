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
import './LikeShareCmtElm.scss';

//
LikeShareCmtElm.propTypes = {
    user_reacted_ix: PropTypes.number,
    enabled_like: PropTypes.bool,
    //
    enabled_cmt: PropTypes.bool,
    count_comment: PropTypes.number,
    //
    enabled_share: PropTypes.bool,
    count_share: PropTypes.number,

    changeTypeLike: PropTypes.func,
    sharePost: PropTypes.func,
    handleClickBtnCmt: PropTypes.func,
};

LikeShareCmtElm.defaultProps = {
    enabled_like: true,
    enabled_share: true,
    enabled_cmt: true,
};

//
function LikeShareCmtElm({
    user_reacted_ix,
    enabled_like,

    enabled_cmt,
    count_comment,

    enabled_share,
    count_share,

    changeTypeLike,
    handleClickBtnCmt,
    sharePost,
}) {
    //
    return (
        <div className="LikeShareCmtElm padding-y-5px padding-x-10px border-top-blur border-bottom-blur text-secondary font-500 user-select-none">
            <div className="LikeShareCmtElm_row display-flex-center">
                {enabled_like && (
                    <div className="LikeShareCmtElm_item">
                        <Like
                            type_like={user_reacted_ix}
                            changeTypeLike={changeTypeLike}
                        />
                    </div>
                )}

                {enabled_cmt && (
                    <div className="LikeShareCmtElm_item">
                        <BtnPostCmt
                            count_comment={count_comment}
                            handleClickBtnCmt={handleClickBtnCmt}
                        />
                    </div>
                )}

                {enabled_share && (
                    <div className="LikeShareCmtElm_item">
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

export default LikeShareCmtElm;

import React from 'react';
import PropTypes from 'prop-types';
//
import LikeShareCmtElm from '../elm/LikeShareCmtElm';
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
    changeTypeLike,
    sharePost,
    handleClickBtnCmt,
}) {
    //
    return (
        <div className="LikeShareCmt">
            <LikeShareCmtElm
                user_reacted_ix={user_reacted_ix}
                enabled_like={enabled_like}
                enabled_cmt={enabled_cmt}
                count_comment={count_comment}
                enabled_share={enabled_share}
                count_share={count_share}
                //
                changeTypeLike={changeTypeLike}
                handleClickBtnCmt={handleClickBtnCmt}
                sharePost={sharePost}
            />
        </div>
    );
}

export default LikeShareCmt;

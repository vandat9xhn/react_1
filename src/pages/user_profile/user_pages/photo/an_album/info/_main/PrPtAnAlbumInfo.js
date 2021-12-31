import React from 'react';
import PropTypes from 'prop-types';
//
import { getPostTitleReacted } from '../../../../../../../_some_function/post/title_reacted';
//
import ListUniqueLike from '../../../../../../../component/like/List_unique_like/_main/ListUniqueLike';
import LikeShareCmtElm from '../../../../../../../component/posts/common/like_share_cmt/elm/LikeShareCmtElm';
//
import PrPtAnAbInfoHead from '../head/_main/PrPtAnAbInfoHead';
import PrPtAnAbInfoContent from '../content/_main/PrPtAnAbInfoContent';

//
PrPtAnAlbumInfo.propTypes = {};

//
function PrPtAnAlbumInfo({
    album_obj,
    mode_view,

    changeModeView,
    handle_API_Other_L,
    handleActionOther,

    on_API_Like_L,
    onOpenDetailLike,

    changeTypeLike,
    handleClickBtnCmt,
    shareAlbum,
}) {
    //
    const {
        album_name,
        description,
        permission,

        post_count,
        item_count,

        reacted_count,
        reacted_ix_arr,
        user_reacted_ix,

        enabled_like,
        enabled_cmt,
        enabled_share,

        count_comment,
        count_share,
    } = album_obj;

    //
    const title_reacted = getPostTitleReacted({
        reacted_count: reacted_count,
        user_reacted_ix: user_reacted_ix,
    });

    //
    return (
        <div className="PrPtAnAlbumInfo padding-16px">
            <div>
                <PrPtAnAbInfoHead
                    album_name={album_name}
                    mode_view={mode_view}
                    changeModeView={changeModeView}
                    handle_API_Other_L={handle_API_Other_L}
                    handleActionOther={handleActionOther}
                />
            </div>

            <div>
                <PrPtAnAbInfoContent
                    description={description}
                    post_count={post_count}
                    item_count={item_count}
                    permission={permission}
                />
            </div>

            {reacted_count ? (
                <div className="padding-top-10px">
                    <ListUniqueLike
                        title={title_reacted}
                        count_like={reacted_count}
                        arr_unique_like={reacted_ix_arr}
                        // div_fix_width={175}
                        //
                        on_API_Like_L={on_API_Like_L}
                        onOpenDetailLike={onOpenDetailLike}
                    />
                </div>
            ) : null}

            <div className="padding-top-10px">
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
                    sharePost={shareAlbum}
                />
            </div>
        </div>
    );
}

export default PrPtAnAlbumInfo;

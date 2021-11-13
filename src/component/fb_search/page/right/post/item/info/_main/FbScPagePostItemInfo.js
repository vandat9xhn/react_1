import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
// 
import { getPostTitleReacted } from '../../../../../../../../_some_function/post/title_reacted';
import { openScreenLike } from '../../../../../../../_screen/type/like/_main/ScreenLike';
//
import {
    handle_API_Like_L,
    handle_API_PostReactedInfo_L,
} from '../../../../../../../../_handle_api/post/HandleAPIPost';
// 
import { useScreenFetching } from '../../../../../../../../_hooks/UseScreenFetching';
// 
import ListUniqueLike from '../../../../../../../like/List_unique_like/_main/ListUniqueLike';
import InfoCmt from '../../../../../../../posts/common/info/cmt/InfoCmt';

//
FbScPagePostItemInfo.propTypes = {};

//
function FbScPagePostItemInfo({
    post_id,
    count_comment,

    reacted_ix_arr,
    reacted_count,
    user_reacted_ix,

    handleClickBtnCmt,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const title_reacted = getPostTitleReacted({
        reacted_count: reacted_count,
        user_reacted_ix: user_reacted_ix,
    });

    //
    const handleScreenFetching = useScreenFetching();

    // ------

    //
    async function onOpenDetailLike(type_like) {
        const { data } = await handleScreenFetching(() =>
            handle_API_PostReactedInfo_L({
                id: post_id,
                is_vid_pic: false,
            })
        );

        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: on_API_Like_L,
            type_like: type_like,
            reacted_count_arr: data,
        });
    }

    //
    function on_API_Like_L(type_like) {
        return handle_API_Like_L(post_id, 0, type_like);
    }

    //
    return (
        <div className="FbScPagePostItemInfo">
            <div className="flex-between-center">
                <div>
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

                <div className="text-third">
                    <InfoCmt
                        count_comment={count_comment}
                        handleClickBtnCmt={handleClickBtnCmt}
                    />
                </div>
            </div>
        </div>
    );
}

export default FbScPagePostItemInfo;

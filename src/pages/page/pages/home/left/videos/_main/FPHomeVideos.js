import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenLike } from '../../../../../../../component/_screen/type/like/_main/ScreenLike';
//
import { handle_API_PostVidPicLike_L } from '../../../../../../../_handle_api/post/HandleAPIVidPic';
//
import PrLayoutHomePreviewVideo from '../../../../../../../component/profile_layout/home_preview_video/_main/PrLayoutHomePreviewVideo';

//
FPHomeVideos.propTypes = {};

//
function FPHomeVideos({ page_id, is_fetching, video_obj }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const {
        id,
        content,
        thumbnail,
        video_time,

        view_count,
        created_time_str,

        reacted_ix_arr,
        reacted_count,
        user_reacted_ix,
        reacted_count_arr,
    } = video_obj;

    // -----

    //
    function on_API_Like_L(type_like) {
        return handle_API_PostVidPicLike_L(id);
    }

    //
    function onOpenDetailLike(type_like) {
        openScreenLike({
            openScreenFloor: openScreenFloor,
            type_like: type_like,
            reacted_count_arr: reacted_count_arr,
            handle_API_Like_L: (c_count) =>
                handle_API_PostVidPicLike_L(id, c_count),
        });
    }

    //
    return (
        <PrLayoutHomePreviewVideo
            title="Videos"
            link_to={`/page/${page_id}/videos`}
            is_fetching={is_fetching}
            link_to_item={`/page/${page_id}/videos/${id}`}
            //
            content={content}
            thumbnail={thumbnail}
            video_time={video_time}
            view_count={view_count}
            created_time_str={created_time_str}
            //
            reacted_ix_arr={reacted_ix_arr}
            reacted_count={reacted_count}
            user_reacted_ix={user_reacted_ix}
            //

            //
            on_API_Like_L={on_API_Like_L}
            onOpenDetailLike={onOpenDetailLike}
        />
    );
}

export default FPHomeVideos;

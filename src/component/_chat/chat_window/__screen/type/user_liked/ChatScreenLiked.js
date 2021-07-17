import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ChatLike_L } from '../../../../../../_handle_api/chat/ChatHandleAPI';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
//
import { type_likes } from '../../../../../like/list_type_like/type_likes/TypeLikes';
import PictureName from '../../../../../picture_name/pic_name/PictureName';
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import './ChatScreenLiked.scss';

//
export function openChatLiked({ openChatScreen, mess_id }) {
    openChatScreen({
        ChatFloorComponent: ChatScreenLiked,
        mess_id: mess_id,
    });
}

//
ChatScreenLiked.propTypes = {};

//
function ChatScreenLiked({ mess_id }) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) => handle_API_ChatLike_L(mess_id, c_count),
    });

    const { data_arr, count, is_fetching } = data_state;

    // 
    useEffect(() => {
        getData_API()
    }, [])

    //
    function handleShowMore() {
        getData_API();
    }
    //
    return (
        <div className="ChatScreenLiked chat-screen-list">
            {data_arr.map((user_like, ix) => (
                <div
                    className="ChatScreenLiked_item padding-8px"
                    key={`${user_like.id || ix}`}
                >
                    <div className="flex-between-center">
                        <PictureName user={user_like.user} />

                        {type_likes[user_like.type_like].component}
                    </div>
                </div>
            ))}

            <ScreenBlurShowMore
                title="Show more..."
                is_show_more={count > data_arr.length}
                handleShowMore={handleShowMore}
                is_fetching={is_fetching}
            />
        </div>
    );
}

export default ChatScreenLiked;

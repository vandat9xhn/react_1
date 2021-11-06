import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import {
    handle_API_ChatLike_L,
    handle_API_MessageReactedInfo_L,
} from '../../../../../../../_handle_api/chat/ChatHandleAPI';
//
import { openScreenWithElm } from '../../../../../../_screen/type/with_elm/ScreenWithElm';
//
import { useScreenFetching } from '../../../../../../../_hooks/UseScreenFetching';
//
import { type_likes } from '../../../../../../like/list_type_like/type_likes/TypeLikes';
//
import ChatMessReactedScreen from '../../../../_components/reacted_screen/_main/ChatMessReactedScreen';

//
ChatMessReacted.propTypes = {};

//
function ChatMessReacted({
    mess_id,
    reacted_count,
    reacted_ix_arr,
    
    chooseListTypeLike,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const handleScreenFetching = useScreenFetching();

    // -------

    //
    async function openMessReacted() {
        const { data } = await handleScreenFetching(() =>
            handle_API_MessageReactedInfo_L({
                mess_id: mess_id,
            })
        );

        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <ChatMessReactedScreen
                    reacted_count_arr={data}
                    handle_API_Like_L={(c_count) =>
                        handle_API_ChatLike_L({
                            mess_id: mess_id,
                            c_count: c_count,
                        })
                    }
                    chooseListTypeLike={chooseListTypeLike}
                />
            ),
        });
    }

    //
    return (
        <div
            className="ChatMessReacted padding-x-2px brs-15px bg-primary box-shadow-1 line-14px text-secondary cursor-pointer"
            onClick={openMessReacted}
        >
            <div className="ChatMessReacted_row display-flex align-items-center">
                <div className="margin-right-2px">{reacted_count}</div>

                {reacted_ix_arr.map((type_like, type_like_ix) => (
                    <div
                        key={type_like_ix}
                        className="ChatMessReacted_item display-flex-center"
                    >
                        {type_likes[type_like].component}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatMessReacted;

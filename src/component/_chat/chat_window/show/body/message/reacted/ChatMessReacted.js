import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenLike } from '../../../../../../_screen/type/like/_main/ScreenLike';
//
import { type_likes } from '../../../../../../like/list_type_like/type_likes/TypeLikes';

//
ChatMessReacted.propTypes = {};

//
function ChatMessReacted({ reacted_count, reacted_ix_arr }) {
    //
    const { openScreenFloor } = useContext(context_api);

    // -------

    //
    function openMessReacted() {
        openScreenLike({
            openScreenFloor: openScreenFloor,
            type_like: -1,
            reacted_count_arr: [],
            handle_API_Like_L,
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

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
//
import PicNameContent from '../../../../picture_name/pic_name_content/PicNameContent';
// 
import './StoryViewerItem.scss';

//
StoryViewerItem.propTypes = {};

//
function StoryViewerItem({ user, type_like_arr, has_reply }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function handleOpenMessage() {
        openRoomChat(user.id);
    }

    //
    return (
        <div
            className="StoryViewerItem padding-8px cursor-pointer hv-bg-blur"
            onClick={handleOpenMessage}
        >
            <div className="flex-between-center">
                <div>
                    <PicNameContent
                        user={user}
                        content={has_reply ? 'Has reply' : ''}
                    />
                </div>

                <div>
                    <ul className="StoryViewerItem_like-row list-none display-flex flex-wrap">
                        {type_like_arr.map((item, ix) => (
                            <li
                                key={`${ix}`}
                                className="StoryViewerItem_like-item"
                            >
                                {type_likes[item].component}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StoryViewerItem;

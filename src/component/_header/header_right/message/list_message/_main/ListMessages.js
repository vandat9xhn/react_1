import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
import ItemMessage from '../item/ItemMessage';
import MessageFriend from '../friend/MessageFriend';
//
import './ListMessages.scss';

//
ListMessages.propTypes = {};

//
function ListMessages(props) {
    const {
        zooms,
        count_zoom,
        friend_arr,
        is_fetching_zoom,
        //
        handleClickZoomItem,
        closeMessage,
        getMoreZooms,
    } = props;

    //
    return (
        <div className="RightHeader_hidden-contain header_hidden-contain">
            <div className="RightHeader_hidden-title">
                <div className="label-field">Messages</div>
            </div>

            <div className="ListMessages_friend">
                <div className="display-flex align-items-center">
                    {friend_arr.map((friend, ix) => (
                        <MessageFriend
                            key={`ListMessages_friend_${ix}`}
                            friend_id={friend.id}
                            picture={friend.picture}
                            last_name={friend.last_name}
                            closeMessage={closeMessage}
                        />
                    ))}
                </div>
            </div>

            <div>
                {zooms.map((zoom_item, ix) => (
                    <ItemMessage
                        key={`RightHeader_message_${ix}`}
                        id={zoom_item.zoom_chat}
                        ix={ix}
                        user={zoom_item.messages[0].user}
                        message={zoom_item.messages[0].message}
                        updated_time={zoom_item.updated_time}
                        //
                        count_new={zoom_item.count_new_mess}
                        handleClickItem={handleClickZoomItem}
                    />
                ))}
            </div>

            <div className="RightHeader_hidden_show-more">
                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count_zoom > zooms.length}
                    handleShowMore={getMoreZooms}
                    is_fetching={is_fetching_zoom}
                />
            </div>
        </div>
    );
}

export default ListMessages;

import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
//
import MessageFriendHead from '../head/_main/HeaderMessHead';
import HeaderMessItem from '../body/item/HeaderMessItem';
//
import './HeaderMessContain.scss';

//
HeaderMessContain.propTypes = {};

//
function HeaderMessContain(props) {
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

            <div className="HeaderMessContain_friend">
                <MessageFriendHead
                    friend_arr={friend_arr}
                    closeMessage={closeMessage}
                />
            </div>

            <div>

            </div>

            <div>
                
            </div>
            <div>
                {zooms.map((zoom_item, ix) => (
                    <HeaderMessItem
                        key={`HeaderMessContain_item_${ix}`}
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

export default HeaderMessContain;

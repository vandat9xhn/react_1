import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import MessageFriendHead from '../head/_main/HeaderMessHead';
import HeaderMessItem from '../body/item/HeaderMessItem';
//
import './HeaderMessContain.scss';

//
HeaderMessContain.propTypes = {};

//
function HeaderMessContain({
    zooms,
    count,
    is_fetching,
    //
    handleClickZoomItem,
    closeZoom,
    getMoreZoom,
}) {
    //
    return (
        <div className="RightHeader_hidden_contain header_hidden_contain">
            <h2 className="padding-8px margin-0">Messages</h2>

            <div className="HeaderMessContain_friend">
                <MessageFriendHead
                    closeZoom={closeZoom}
                />
            </div>

            <div>
                {zooms.map((zoom_item, ix) => (
                    <HeaderMessItem
                        key={`HeaderMessContain_item_${ix}`}
                        id={zoom_item.room_chat}
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
                    is_show_more={count > zooms.length}
                    handleShowMore={getMoreZoom}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default HeaderMessContain;

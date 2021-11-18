import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import MessageFriendHead from '../head/_main/HeaderMessHead';
import HeaderMessItem from '../body/item/_main/HeaderMessItem';
import HeaderMessTitle from '../title/HeaderMessTitle';
//
import './HeaderMessContain.scss';

//
HeaderMessContain.propTypes = {};

//
function HeaderMessContain({
    zooms,
    count,
    is_fetching,

    closeZoom,
    getMoreZoom,
    handleClickZoomItem,
    handleAction,
}) {
    //
    const ref_scroll_elm = useRef(null);
    
    //
    return (
        <div
            ref={ref_scroll_elm}
            className="RightHeader_hidden_contain header_hidden_contain"
        >
            <div>
                <HeaderMessTitle />
            </div>

            <div className="HeaderMessContain_friend">
                <MessageFriendHead closeZoom={closeZoom} />
            </div>

            <div>
                {zooms.map((zoom_item, ix) => (
                    <HeaderMessItem
                        key={ix}
                        ref_scroll_elm={ref_scroll_elm}
                        ix={ix}
                        //
                        id={zoom_item.room_chat}
                        user={zoom_item.messages[0].user}
                        message={zoom_item.messages[0].message}
                        count_new={zoom_item.count_new_mess}
                        updated_time={zoom_item.updated_time}
                        //
                        handleClickItem={handleClickZoomItem}
                        handleAction={handleAction}
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

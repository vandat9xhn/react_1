import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
//
import ListMessages from '../list_message/_main/ListMessages';
//
import './HeaderMessage.scss';

//
HeaderMessage.propTypes = {};

//
function HeaderMessage(props) {
    const {
        zoom_obj,
        // is_fetching_zoom,
        //
        handleOpenZooms,
        hasReceiveListZooms,
        handleClickZoomItem,
        getMoreZooms,
    } = props;

    const { zooms, count_new_zoom, count_zoom, friend_arr } = zoom_obj;
    // state
    const [open_message, setOpenMessage] = useState(false);
    const [is_fetching_zoom, setIsFetchingZoom] = useState(false);

    // Toggle
    async function onToggleOpenMessage() {
        setOpenMessage(!open_message);
        if (!open_message && zooms.length == 0 && count_zoom > 0) {
            setIsFetchingZoom(true);
            await handleOpenZooms();
            setIsFetchingZoom(false);
        }
    }
    // Close
    function closeMessage() {
        open_message && setOpenMessage(false);
    }

    // click item
    function onClickZoomItem(id, ix) {
        setOpenMessage(false);
        handleClickZoomItem(id, ix);
    }

    // get more
    async function onGetMoreZooms() {
        setIsFetchingZoom(true);
        await getMoreZooms();
        setIsFetchingZoom(false);
    }

    //
    return (
        <CloseDiv makeDivHidden={closeMessage}>
            <div className={`header_menu ${open_message ? 'bottom-blue' : ''}`}>
                <div
                    className="RightHeader__icon header_icon nav-active"
                    onClick={onToggleOpenMessage}
                    title="message"
                    num-notice={count_new_zoom || undefined}
                >
                    <IconsMenu x={200} y={200} />

                    <div
                        className={
                            count_new_zoom
                                ? 'RightHeader__num-notice'
                                : 'display-none'
                        }
                    >
                        {count_new_zoom}
                    </div>
                </div>

                <div
                    className={`header_hidden ${
                        open_message ? '' : 'display-none'
                    }`}
                    onClick={hasReceiveListZooms}
                >
                    <ListMessages
                        zooms={zooms}
                        count_zoom={count_zoom}
                        is_fetching_zoom={is_fetching_zoom}
                        friend_arr={friend_arr}
                        //
                        closeMessage={closeMessage}
                        handleClickZoomItem={onClickZoomItem}
                        getMoreZooms={onGetMoreZooms}
                    />
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderMessage;

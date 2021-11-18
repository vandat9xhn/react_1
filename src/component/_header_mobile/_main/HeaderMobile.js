import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsMenu from '../../../_icons_svg/icons_menu/IconsMenu';
import IconFriends from '../../../_icons_svg/icon_friends/IconFriends';
//
import HeaderMenu from '../../_header_menu/_main/HeaderMenu';
import HeaderItemMb from '../item/HeaderItemMb';
import IconCameraFilm from '../../../_icons_svg/icon_camera_film/IconCameraFilm';
import HeaderNotice from '../../_header_pc/header_right/notice/_main/HeaderNotice';
import HeaderMessage from '../../_header_pc/header_right/message/_main/HeaderMessage';
// 
import './HeaderMobile.scss';

//
HeaderMobile.propTypes = {};

//
function HeaderMobile(props) {
    //
    const [state_obj, setStateObj] = useState({
        count_new_feed: 0,
        count_new_friends: 0,
        count_new_watch: 0,
    });

    const { count_new_feed, count_new_friends, count_new_watch } = state_obj;

    //
    return (
        <div className="HeaderMobile bg-primary box-shadow-1">
            <ul className="flex-between-center list-none h-100per">
                <li className="HeaderMobile_item">
                    <HeaderItemMb
                        Icon={<IconsMenu y={200} />}
                        link_to="/new-feed"
                        count_new={count_new_feed}
                    />
                </li>

                <li className="HeaderMobile_item">
                    <HeaderItemMb
                        Icon={<IconFriends />}
                        link_to="/friends"
                        count_new={count_new_friends}
                    />
                </li>

                <li className="HeaderMobile_item">
                    <HeaderMessage />
                </li>

                <li className="HeaderMobile_item">
                    <HeaderItemMb
                        Icon={<IconCameraFilm />}
                        link_to="/watch"
                        count_new={count_new_watch}
                    />
                </li>

                <li className="HeaderMobile_item">
                    <HeaderNotice />
                </li>

                <li className="HeaderMobile_item">
                    <HeaderMenu />
                </li>
            </ul>
        </div>
    );
}

export default HeaderMobile;

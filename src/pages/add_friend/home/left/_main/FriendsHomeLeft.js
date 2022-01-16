import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import IconsProfile from '../../../../../_icons_svg/icons_profile/IconsProfile';
import IconFriends from '../../../../../_icons_svg/icon_friends/IconFriends';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconFriend from '../../../../../_icons_svg/icon_friend/IconFriend';
//
import LeftBarNav from '../../../../../component/side_bar/left/nav/_main/LeftBarNav';
//
import './FriendsHomeLeft.scss';

//
const FRIEND_TITLE_ARR = (() => {
    return [
        ...(IS_MOBILE
            ? []
            : [
                  {
                      Icon: <IconFriends />,
                      title: 'Home',
                      link_to: '',
                      right: false,
                  },
              ]),
        {
            Icon: <IconFriend is_request={true} />,
            title: 'Friend requests',
            link_to: 'requests',
            has_arrow: true,
        },
        {
            Icon: <IconFriend is_plus={true} />,
            title: 'Suggestions',
            link_to: 'suggestions',
            has_arrow: true,
        },
        {
            Icon: <IconFriend is_menu={true} />,
            title: 'All Friends',
            link_to: 'all',
            has_arrow: true,
        },
        {
            Icon: <IconsProfile />,
            title: 'Birthdays',
            link_to: 'birthdays',
            has_arrow: false,
        },
        {
            Icon: <IconFriend is_menu={true} />,
            title: 'Custom lists',
            link_to: 'friend_list',
            has_arrow: true,
        },
    ].map((item) => ({
        Icon: item.Icon,
        title: item.title,
        link_to: `/friends/${item.link_to}`,
        right: item.has_arrow ? <IconsArrow x={200} size_icon="18px" /> : '',
    }));
})();

//
FriendsHomeLeft.propTypes = {};

//
function FriendsHomeLeft(props) {
    //
    return (
        <div className="FriendsHomeLeft padding-left-8px">
            <LeftBarNav nav_arr={FRIEND_TITLE_ARR} />
        </div>
    );
}

export default FriendsHomeLeft;

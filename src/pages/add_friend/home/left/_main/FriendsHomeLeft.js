import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import IconsProfile from '../../../../../_icons_svg/icons_profile/IconsProfile';
import IconFriends from '../../../../../_icons_svg/icon_friends/IconFriends';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconFriend from '../../../../../_icons_svg/icon_friend/IconFriend';
//
import './FriendsHomeLeft.scss';

//
const FRIEND_TITLE_ARR = [
    {
        Icon: <IconFriends />,
        title: 'Home',
        link_to: '',
        has_arrow: false,
    },
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
];

//
FriendsHomeLeft.propTypes = {};

//
function FriendsHomeLeft(props) {
    //
    return (
        <div className="FriendsHomeLeft">
            <div className="padding-left-8px">
                {FRIEND_TITLE_ARR.map((item, ix) => (
                    <NavLink
                        key={ix}
                        className="FriendsHomeLeft_item flex-between-center padding-x-8px padding-y-10px brs-6px color-inherit font-17px font-500 hv-bg-fb"
                        activeClassName="FriendsHomeLeft_item-active bg-fb-active"
                        to={`/friends/${item.link_to}`}
                        exact
                    >
                        <div className="display-flex align-items-center">
                            <div className="FriendsHomeLeft_item_icon display-flex-center brs-50 bg-ccc">
                                {item.Icon}
                            </div>

                            <div className="margin-left-12px">{item.title}</div>
                        </div>

                        <div className="text-third">
                            {item.has_arrow ? (
                                <IconsArrow x={200} size_icon="18px" />
                            ) : null}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default FriendsHomeLeft;

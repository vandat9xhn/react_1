import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { API_FriendCountNew_R } from '../../../../api/api_django/header/APIHeaderToken';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
import BadgeDiv from '../../../some_div/badge_div/BadgeDiv';

//
HeaderFriend.propTypes = {};

//
function HeaderFriend({}) {
    //
    const [count_new, setCountNew] = useState(0);

    //
    useEffect(() => {
        location.pathname != '/add-friend-add' && getData_API_FriendCountNew();
    }, []);

    //
    async function getData_API_FriendCountNew() {
        const res = await API_FriendCountNew_R({});

        setCountNew(res.data);
    }

    //
    function handleClick() {
        count_new && setCountNew(0);
    }

    //
    return (
        <div className="header_menu">
            <NavLink
                to="/add-friend-add"
                activeClassName="nav-active"
                onClick={handleClick}
            >
                <div className="RightHeader__icon header_icon" title="friends">
                    <IconsAction x={400} />

                    <div className="RightHeader__num-notice">
                        <BadgeDiv num={count_new} />
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default HeaderFriend;

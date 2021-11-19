import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import GroupCartInfo from '../info/GroupCartInfo';
import GroupCardFriends from '../friends/GroupCardFriends';
//
import './GroupCard.scss';

//
const initialBtnElm = (
    <div className="display-flex-center wh-100 bg-blue text-white">
        Join Group
    </div>
);

//
GroupCard.propTypes = {};

//
function GroupCard({
    id,
    name,
    picture,

    count_member,
    post_count,
    post_unit,

    friend_arr,
    friend_count,
    has_more_friend,

    BtnElm = initialBtnElm,
    removeGroupCard,
}) {
    //
    return (
        <div className="GroupCard pos-rel display-flex flex-col space-between h-100per brs-8px border-blur bg-primary overflow-hidden user-select-none">
            <Link
                className="display-block pos-abs-100 z-index-1"
                to={`/group/${id}`}
            ></Link>

            <div className="pos-abs right-0 top-0 z-index-1 padding-12px">
                <div
                    className="btn-icon-36px bg-shadow-5 active-scale-sm cursor-pointer"
                    onClick={removeGroupCard}
                >
                    <IconsArrow y={400} size_icon="24px" />
                </div>
            </div>

            <div>
                <div className="GroupCard_pic pos-rel">
                    <img
                        className="pos-abs-100 object-fit-cover"
                        src={picture}
                        alt=""
                    />
                </div>

                <div className="border-top-blur">
                    <GroupCartInfo
                        name={name}
                        count_member={count_member}
                        post_count={post_count}
                        post_unit={post_unit}
                    />
                </div>
            </div>

            <div className="padding-top-8px">
                {friend_count ? (
                    <div className="padding-x-16px">
                        <GroupCardFriends
                            friend_arr={friend_arr}
                            friend_count={friend_count}
                            has_more_friend={has_more_friend}
                        />
                    </div>
                ) : null}

                <div className="GroupCard_join padding-16px">
                    <button className="display-flex-center z-index-1 w-100per h-36px brs-6px btn btn-active overflow-hidden font-600 cursor-pointer hv-after-shadow-05">
                        {BtnElm}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GroupCard;

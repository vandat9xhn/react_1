import React from 'react';
import PropTypes from 'prop-types';
//
import MessageFriend from '../friend/HeaderMessFriend';

//
HeaderMessHeadMobile.propTypes = {};

//
function HeaderMessHeadMobile({
    ref_head_elm,
    ref_fake_elm_end,

    friend_arr,
    has_fetched,
    closeZoom,
}) {
    //
    return (
        <div
            ref={ref_head_elm}
            className="max-w-100per overflow-x-auto scroll-height-0"
        >
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="display-flex align-items-center">
                    {friend_arr.map((friend, ix) => (
                        <div key={`${friend.id}`}>
                            <MessageFriend
                                is_mouse_down={false}
                                friend_id={friend.id}
                                picture={friend.picture}
                                last_name={friend.last_name}
                                closeZoom={closeZoom}
                            />
                        </div>
                    ))}

                    <div ref={ref_fake_elm_end} className="padding-4px"></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMessHeadMobile;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import AddFriendHead from '../components/head/_main/AddFriendHead';
// 
import './AddFriendCommon.scss';
//
import AddFriendRequested from '../type/requested/_main/AddFriendRequested';
import AddFriendSent from '../type/sent/_main/AddFriendSent';
import AddFriendMayKnow from '../type/may_know/_main/AddFriendMayKnow';
// 
import './AddFriend.scss';
import './AddFriendRes.scss';

//
AddFriend.propTypes = {};

//
function AddFriend(props) {
    //
    const [state_obj, setStateObj] = useState({
        type_friend: 'requested',
    });

    const { type_friend } = state_obj;

    // 
    useEffect(() => {
        document.title = 'Friends'
    }, [])


    //
    function changeTypeFriend(new_type_friend) {
        setStateObj({
            ...state_obj,
            type_friend: new_type_friend,
        });
    }

    //
    return (
        <div className="AddFriend">
            <div className="AddFriend_contain padding-8px">
                <div className="AddFriend_head">
                    <AddFriendHead
                        type_friend={type_friend}
                        changeTypeFriend={changeTypeFriend}
                    />
                </div>

                <hr className="hr-bg" />

                <div className="AddFriend_body">
                    <div
                        className={`${
                            type_friend == 'requested' ? '' : 'display-none'
                        }`}
                    >
                        <AddFriendRequested />
                    </div>

                    <div
                        className={`${
                            type_friend == 'sent' ? '' : 'display-none'
                        }`}
                    >
                        <AddFriendSent />
                    </div>

                    <div
                        className={`${
                            type_friend == 'may_know' ? '' : 'display-none'
                        }`}
                    >
                        <AddFriendMayKnow />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddFriend;

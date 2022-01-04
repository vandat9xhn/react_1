import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import ChatMemberScreenHead from '../head/_main/ChatMemberScreenHead';
import ChatMemberScreenItem from '../item/_main/ChatMemberScreenItem';
//
import './ChatMemberScreen.scss';

//
ChatMemberScreen.propTypes = {};

//
function ChatMemberScreen({ room_users, handleAction, handleClose }) {
    //
    const { user } = useContext(context_api);

    // console.log(room_users);
    //
    const user_arr = room_users.filter((item) => !item.leave);

    //
    useMakeBodyHidden({ use_z_index: true, screen_z_index: 41 });

    //
    const is_user_admin = user_arr.some(
        (item) => item.user.id == user.id && item.is_admin
    );

    //
    const [member_type_ix, setMemberTypeIx] = useState(0);

    //
    const c_room_user_arr =
        member_type_ix == 0
            ? user_arr
            : user_arr.filter((item) => item.is_admin);

    // -----

    //
    function changeMemberType(new_member_type_ix = 0) {
        setMemberTypeIx(new_member_type_ix);
    }

    //
    return (
        <div className="ChatMemberScreen screen">
            <div className="ChatMemberScreen_contain screen-contain w-500px">
                <div>
                    <ChatMemberScreenHead
                        member_type_ix={member_type_ix}
                        changeMemberType={changeMemberType}
                        handleClose={handleClose}
                    />
                </div>

                <div className="padding-8px">
                    {c_room_user_arr.map((item, ix) => (
                        <div key={item.user.id}>
                            <ChatMemberScreenItem
                                member={item.user}
                                user_add={item.user_add}
                                is_user_admin={is_user_admin}
                                is_member_admin={item.is_admin}
                                handleAction={handleAction}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChatMemberScreen;

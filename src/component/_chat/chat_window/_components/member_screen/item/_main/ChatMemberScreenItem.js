import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import {
    getChatActionMemberArr,
    getInfoActionMember,
} from '../../../../../../../_some_function/chat/action_member';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';
//
import ActionsMultiList from '../../../../../../actions_multi_list/_main/ActionsMultiList';
//
import './ChatMemberScreenItem.scss';

//
ChatMemberScreenItem.propTypes = {};

//
function ChatMemberScreenItem({
    member,
    user_add,
    is_user_admin,
    is_member_admin,

    handleAction,
}) {
    //
    const { id, first_name, last_name, picture } = member;

    //
    const { detectIsUser, getYouOrName } = useYouOrName();

    // -----

    //
    function handle_API_L() {
        return getChatActionMemberArr({
            is_user: detectIsUser({ user_id: id }),
            is_user_admin: is_user_admin,
            is_member_admin: is_member_admin,
        });
    }

    //
    const info = getInfoActionMember({
        user_name_add: !user_add
            ? ''
            : getYouOrName({
                  user_id: user_add.id,
                  user_name: `${user_add.first_name} ${user_add.last_name}`,
              }),
        is_admin: is_member_admin,
    });

    // ------

    //
    function onAction(action_name = '') {
        handleAction({ action_name: action_name, user_id: id });
    }

    //
    return (
        <div className="ChatMemberScreenItem padding-8px">
            <div className="display-flex align-items-center">
                <Link className="" to={`/profile${id}`}>
                    <img
                        className="brs-50 object-fit-cover"
                        src={picture}
                        alt=""
                        width="36"
                        height="36"
                    />
                </Link>

                <div className="flex-grow-1 flex-between-center">
                    <div className="flex-grow-1 padding-x-12px">
                        <div className="font-600 line-20px">
                            {first_name} {last_name}
                        </div>

                        <div className="font-13px text-third">{info}</div>
                    </div>

                    <div>
                        <ActionsMultiList
                            x_always="right"
                            handle_API_L={handle_API_L}
                            handleAction={onAction}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMemberScreenItem;

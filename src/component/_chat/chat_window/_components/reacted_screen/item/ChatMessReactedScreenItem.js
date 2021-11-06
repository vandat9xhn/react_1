import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { type_likes } from '../../../../../like/list_type_like/type_likes/TypeLikes';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
//
import './ChatMessReactedScreenItem.scss';

//
ChatMessReactedScreenItem.propTypes = {};

//
function ChatMessReactedScreenItem({ user, type_like, removeReacted }) {
    //
    const { user: c_user } = useContext(context_api);

    //
    const is_user = user.id == c_user.id;

    // -----

    //
    function onRemoveReacted() {
        is_user && removeReacted();
    }

    //
    return (
        <div
            className={`ChatMessReactedScreenItem pos-rel margin-x-8px padding-8px brs-6px ${
                is_user ? 'cursor-pointer hv-bg-fb' : ''
            }`}
        >
            <div className="pos-abs-100" onClick={onRemoveReacted}></div>

            <div className="display-flex align-items-center">
                <div className="margin-right-12px">
                    <img
                        className="brs-50 object-fit-cover"
                        src={user.picture}
                        alt=""
                        width="40"
                        height="40"
                    />
                </div>

                <div className="flex-grow-1 flex-between-center">
                    <div>
                        <ActionPreviewProfile
                            user_id={user.id}
                            title_action={
                                <div
                                    className="pos-rel z-index-1 font-500 line-18px"
                                    onClick={onRemoveReacted}
                                >
                                    {user.first_name} {user.last_name}
                                </div>
                            }
                        />

                        {is_user ? (
                            <div className="text-third font-13px">
                                Click to remove
                            </div>
                        ) : null}
                    </div>

                    <div>{type_likes[type_like].component}</div>
                </div>
            </div>
        </div>
    );
}

export default ChatMessReactedScreenItem;

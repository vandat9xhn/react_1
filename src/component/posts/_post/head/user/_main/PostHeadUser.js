import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import { IconsPermission } from '../../../../../../_groups_icon/permission/GroupIconPermission';
// 
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
//
import './PostHeadUser.scss';

//
PostHeadUser.propTypes = {};

//
function PostHeadUser({
    post_id,
    user,
    permission,
    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,
    updated_time,

    openTagUser,
}) {
    //
    return (
        <div className="PostHeadUser">
            <div className="PostHeadUser_row display-flex align-items-center">
                <ActionPreviewProfile
                    user_id={user.id}
                    title_action={
                        <Link
                            className="flex-shrink-0"
                            to={`/profile/${user.id}`}
                        >
                            <img
                                className="brs-50 object-fit-cover"
                                src={user.picture}
                                alt=""
                                width="40"
                                height="40"
                            />
                        </Link>
                    }
                />

                <div className="flex-grow-1 padding-x-10px line-20px">
                    <div>
                        <span className="font-600">
                            <ActionPreviewProfile
                                user_id={user.id}
                                title_action={
                                    <Link
                                        className="color-inherit hv-cl-blue"
                                        to={`/profile/${user.id}`}
                                    >
                                        {user.first_name + ' ' + user.last_name}
                                    </Link>
                                }
                            />
                        </span>

                        {emoji_obj.id || user_tag_arr.length ? (
                            <span className="text-third">{' is '}</span>
                        ) : null}

                        {emoji_obj.id ? (
                            <React.Fragment>
                                <span className="text-third">
                                    {emoji_obj.type}{' '}
                                </span>

                                <span className="text-222">
                                    {emoji_obj.name}
                                </span>
                            </React.Fragment>
                        ) : null}

                        {user_tag_arr.length ? <span>{' with '}</span> : null}

                        {user_tag_arr.map((user_tag_obj, ix) => (
                            <React.Fragment key={user_tag_obj.id}>
                                {ix == 0 ? '' : ', '}

                                <span className="font-600">
                                    <Link
                                        className="color-inherit hv-underline"
                                        to={`/profile/${user_tag_obj.profile_model}`}
                                    >
                                        {user_tag_obj.first_name}{' '}
                                        {user_tag_obj.last_name}
                                    </Link>
                                </span>
                            </React.Fragment>
                        ))}

                        {user_tag_rest_count > 0 ? (
                            <React.Fragment>
                                <span className="text-third"> and </span>

                                <span
                                    className="cursor-pointer font-600 hv-underline"
                                    onClick={openTagUser}
                                >
                                    {user_tag_rest_count} other
                                    {user_tag_rest_count == 1 ? '' : 's'}
                                </span>
                            </React.Fragment>
                        ) : null}
                    </div>

                    <div className="PostHeadUser_time display-flex align-items-center font-12px">
                        <Link
                            to={`/posts/${post_id}`}
                            className="margin-x-4px color-inherit hv-underline"
                        >
                            {UnitTime(
                                new Date().getTime() -
                                    new Date(updated_time).getTime()
                            )}
                        </Link>

                        <span>* {IconsPermission[permission].Icon}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostHeadUser;

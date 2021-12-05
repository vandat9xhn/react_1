import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import ActionPreviewGroup from '../../../../../action_preview_group/_main/ActionPreviewGroup';

//
PostHeadGroupLeft.propTypes = {};

//
function PostHeadGroupLeft({ group_obj, user }) {
    //
    return (
        <div className="PostHeadGroupLeft pos-rel wh-40px">
            <div className="PostHeadGroupLeft_group pos-abs-0">
                <ActionPreviewGroup
                    group_id={group_obj.id}
                    title_action={
                        <Link
                            className="flex-shrink-0"
                            to={`/group/${group_obj.id}`}
                        >
                            <div className="hv-after-shadow-05">
                                <img
                                    className="PostHeadGroupLeft_group_picture brs-8px object-fit-cover"
                                    src={group_obj.picture}
                                    alt=""
                                    width="36"
                                    height="36"
                                />
                            </div>
                        </Link>
                    }
                />
            </div>

            <div className="PostHeadGroupLeft_user pos-abs right-0 bottom-0">
                <ActionPreviewProfile
                    user_id={user.id}
                    title_action={
                        <Link
                            className="flex-shrink-0"
                            to={`/profile/${user.id}`}
                        >
                            <div className="hv-after-shadow-05">
                                <img
                                    className="PostHeadGroupLeft_user_picture brs-50 object-fit-cover"
                                    src={user.picture}
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                            </div>
                        </Link>
                    }
                />
            </div>
        </div>
    );
}

export default PostHeadGroupLeft;

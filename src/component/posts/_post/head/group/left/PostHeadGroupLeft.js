import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';

//
PostHeadGroupLeft.propTypes = {};

//
function PostHeadGroupLeft({ group_obj, user }) {
    //
    return (
        <div className="PostHeadGroupLeft pos-rel wh-40px">
            <div className="pos-abs-0">
                <ActionPreviewProfile
                    user_id={group_obj.id}
                    title_action={
                        <Link
                            className="flex-shrink-0"
                            to={`/group/${group_obj.id}`}
                        >
                            <div className="hv-bg-shadow-05">
                                <img
                                    className="brs-8px object-fit-cover"
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

            <div className="pos-abs right-0 bottom-0">
                <ActionPreviewProfile
                    user_id={user.id}
                    title_action={
                        <Link
                            className="flex-shrink-0"
                            to={`/profile/${user.id}`}
                        >
                            <div className="hv-bg-shadow-05">
                                <img
                                    className="brs-50 object-fit-cover"
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

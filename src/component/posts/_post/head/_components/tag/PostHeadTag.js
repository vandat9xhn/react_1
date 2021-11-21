import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';

//
PostHeadTag.propTypes = {};

//
function PostHeadTag({ user_tag_arr, user_tag_rest_count, openTagUser }) {
    //
    if (!user_tag_arr || user_tag_arr.length == 0) {
        return null;
    }

    //
    return (
        <React.Fragment>
            <span>{' with '}</span>

            {user_tag_arr.map((user_tag_obj, ix) => (
                <React.Fragment key={user_tag_obj.id}>
                    {ix == 0 ? '' : ', '}

                    <span className="font-600">
                        <ActionPreviewProfile
                            user_id={user_tag_obj.profile_model}
                            title_action={
                                <Link
                                    className="color-inherit hv-underline"
                                    to={`/profile/${user_tag_obj.profile_model}`}
                                >
                                    {user_tag_obj.first_name}{' '}
                                    {user_tag_obj.last_name}
                                </Link>
                            }
                        />
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
        </React.Fragment>
    );
}

export default PostHeadTag;

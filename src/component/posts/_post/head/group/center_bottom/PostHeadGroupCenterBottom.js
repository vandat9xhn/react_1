import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import IconPublic from '../../../../../../_icons_svg/icon_public/IconPublic';
import IconGroup from '../../../../../../_icons_svg/icon_group/IconGroup';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
//

//
PostHeadGroupCenterBottom.propTypes = {};

//
function PostHeadGroupCenterBottom({ post_id, user, privacy, updated_time }) {
    //
    return (
        <div className="PostHeadGroupCenterBottom display-flex align-items-center">
            <ActionPreviewProfile
                user_id={user.id}
                title_action={
                    <Link
                        className="color-inherit font-500 hv-underline"
                        to={`/profile/${user.id}`}
                    >
                        {user.first_name} {user.last_name}
                    </Link>
                }
            />

            <div className="margin-x-4px">·</div>

            <Link
                to={`/posts/${post_id}`}
                className="color-inherit hv-underline"
            >
                {UnitTime(
                    new Date().getTime() - new Date(updated_time).getTime()
                )}
            </Link>

            <div className="margin-x-4px">·</div>

            {privacy == 'Public' ? (
                <IconPublic />
            ) : (
                <IconGroup stroke_width_circle={10} />
            )}
        </div>
    );
}

export default PostHeadGroupCenterBottom;

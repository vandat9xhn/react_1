import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPublic from '../../../../../../_icons_svg/icon_public/IconPublic';
// 
import PostHeadTimePermission from '../../_components/time_permission/PostHeadTimePermission';

//
PostHeadPageCenterBottom.propTypes = {};

//
function PostHeadPageCenterBottom({
    post_id,
    page_obj,
    permission,
    updated_time,
}) {
    //
    return page_obj.title_at_time ? (
        <div className="PostHeadPageCenterBottom display-flex align-items-center">
            <Link
                to={page_obj.link_title_at_time}
                className="color-inherit hv-underline"
            >
                {page_obj.title_at_time}
            </Link>

            <span className="margin-x-4px">·</span>

            <span>
                <IconPublic size_icon="12px" />
            </span>
        </div>
    ) : (
        <PostHeadTimePermission
            post_id={post_id}
            permission={permission}
            updated_time={updated_time}
        />
    );
}

export default PostHeadPageCenterBottom;

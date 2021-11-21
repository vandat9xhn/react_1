import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import { IconsPermission } from '../../../../../../_groups_icon/permission/GroupIconPermission';
//
import './PostHeadTimePermission.scss';

//
PostHeadTimePermission.propTypes = {};

//
function PostHeadTimePermission({ post_id, permission, updated_time }) {
    //
    return (
        <div className="PostHeadTimePermission display-flex align-items-center">
            <Link
                to={`/posts/${post_id}`}
                className="color-inherit hv-underline"
            >
                {UnitTime(
                    new Date().getTime() - new Date(updated_time).getTime()
                )}
            </Link>

            <span className="margin-x-4px">·</span>

            <span>{IconsPermission[permission].Icon}</span>
        </div>
    );
}

export default PostHeadTimePermission;

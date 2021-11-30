import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPinned from '../../../../_icons_svg/pinned/IconPinned';

//
GroupPageTopicTitle.propTypes = {};

//
function GroupPageTopicTitle({
    group_id,
    hash_tag,
    is_hidden,
    pinned,

    use_hash_character = true,
    size_icon,
}) {
    //
    return (
        <Link
            className={`display-block color-inherit font-600 hv-underline ${
                is_hidden ? 'opacity-04' : ''
            }`}
            to={`/hashtag?q=${hash_tag}&group_id=${group_id}`}
        >
            <div className="inline-block margin-right-5px">
                {use_hash_character ? '#' : ''}
                {hash_tag}
            </div>

            {pinned ? (
                <IconPinned class_icon="inline-block" size_icon={size_icon} />
            ) : null}
        </Link>
    );
}

export default GroupPageTopicTitle;

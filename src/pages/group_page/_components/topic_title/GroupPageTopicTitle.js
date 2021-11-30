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
        <div className="GroupPageTopicTitle">
            <Link
                className={`inline-block margin-right-5px color-inherit font-600 hv-underline ${
                    is_hidden ? 'opacity-04' : ''
                }`}
                to={`/hashtag?q=${hash_tag}&group_id=${group_id}`}
            >
                {use_hash_character ? '#' : ''}
                {hash_tag}
            </Link>

            {pinned ? (
                <IconPinned class_icon="inline-block" size_icon={size_icon} />
            ) : null}
        </div>
    );
}

export default GroupPageTopicTitle;

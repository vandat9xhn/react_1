import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPinned from '../../../../../../../../_icons_svg/pinned/IconPinned';
//
import GPDTopicAction from '../action/GPDTopicAction';

//
GPDAboutTopic.propTypes = {};

//
function GPDAboutTopic({
    ix,

    group_id,
    is_admin,

    hash_tag,
    post_count,
    is_hidden,
    pinned,

    handleAction,
}) {
    //
    return (
        <div className="GPDAboutTopic">
            <div className="flex-between-center">
                <div>
                    <Link
                        className={`display-block color-inherit font-600 font-17px hv-underline ${
                            is_hidden ? 'opacity-04' : ''
                        }`}
                        to={`/hashtag?q=${hash_tag}&group_id=${group_id}`}
                    >
                        <div className="inline-block margin-right-5px">
                            #{hash_tag}
                        </div>

                        {pinned ? <IconPinned size_icon="14px" /> : null}
                    </Link>

                    <div>
                        {is_hidden
                            ? 'Hidden by admin · '
                            : pinned
                            ? 'Pinned by admin · '
                            : ''}
                        {post_count} post{post_count >= 2 ? 's' : ''}
                    </div>
                </div>

                {is_admin ? (
                    <GPDTopicAction
                        ix={ix}
                        is_hidden={is_hidden}
                        handleAction={handleAction}
                    />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default GPDAboutTopic;

import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageTopicAction from '../../../_components/topic_action/GroupPageTopicAction';
import GroupPageTopicTitle from '../../../_components/topic_title/GroupPageTopicTitle';
import GroupPageTopicInfo from '../../../_components/topic_info/GroupPageTopicInfo';
//
import './GroupPageTopic.scss';

//
GroupPageTopic.propTypes = {};

//
function GroupPageTopic({
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
        <div className="GroupPageTopic padding-top=8px">
            <div className="display-flex">
                <div className="GroupPageTopic_left padding-6px font-600 text-secondary">
                    #
                </div>

                <div className="GroupPageTopic_right flex-grow-1 padding-6px">
                    <div className="flex-between-center">
                        <GroupPageTopicTitle
                            group_id={group_id}
                            hash_tag={hash_tag}
                            is_hidden={is_hidden}
                            pinned={pinned}
                            //
                            use_hash_character={false}
                            size_icon={'14px'}
                        />

                        <div>
                            <GroupPageTopicAction
                                ix={ix}
                                is_hidden={is_hidden}
                                handleAction={handleAction}
                            />
                        </div>
                    </div>

                    <div className="GroupPageTopic_info margin-top-12px font-13px">
                        <GroupPageTopicInfo
                            is_admin={is_admin}
                            is_hidden={is_hidden}
                            post_count={post_count}
                        />
                    </div>

                    <div className="margin-top-8px h-1px bg-blur"></div>
                </div>
            </div>
        </div>
    );
}

export default GroupPageTopic;

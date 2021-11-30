import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPinned from '../../../../../../../../_icons_svg/pinned/IconPinned';
//
import GPDTopicAction from '../action/GPDTopicAction';
import GroupPageTopicTitle from '../../../../../../_components/topic_title/GroupPageTopicTitle';
import GroupPageTopicInfo from '../../../../../../_components/topic_info/GroupPageTopicInfo';

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
                    <div className="font-17px">
                        <GroupPageTopicTitle
                            group_id={group_id}
                            hash_tag={hash_tag}
                            is_hidden={is_hidden}
                            pinned={pinned}
                            size_icon={'14px'}
                        />
                    </div>

                    <GroupPageTopicInfo
                        is_admin={is_admin}
                        is_hidden={is_hidden}
                        post_count={post_count}
                    />
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

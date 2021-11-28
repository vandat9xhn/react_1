import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageCover from '../cover/GroupPageCover';
import GroupPageName from '../name/GroupPageName';
import GroupPageMembers from '../members/_main/GroupPageMembers';
import GroupPageActions from '../actions/_main/GroupPageActions';

//
GroupPageInfo.propTypes = {};

//
function GroupPageInfo({
    group_id,
    name,
    picture,

    privacy,
    action_name,

    member_arr,
    count_member,

    openCoverPicture,
    toggleRelatedGroup,
    handleAction,
}) {
    //
    return (
        <div className="GroupPageInfo">
            <div>
                <GroupPageCover
                    picture={picture}
                    openCoverPicture={openCoverPicture}
                />
            </div>

            <div className="fb-profile-width-contain padding-top-16px">
                <div className="display-flex space-between">
                    <div className="padding-bottom-16px padding-top-6px padding-x-6px">
                        <div>
                            <GroupPageName name={name} />
                        </div>

                        <div className="font-17px">
                            <GroupPageMembers
                                privacy={privacy}
                                member_arr={member_arr}
                                count_member={count_member}
                            />
                        </div>
                    </div>

                    <div className="align-self-end padding-bottom-16px padding-top-6px padding-x-6px">
                        <GroupPageActions
                            action_name={action_name}
                            group_id={group_id}
                            handleAction={handleAction}
                            toggleRelatedGroup={toggleRelatedGroup}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupPageInfo;

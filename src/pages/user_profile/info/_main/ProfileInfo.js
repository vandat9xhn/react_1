import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import VirtualScroll from '../../../../component/virtual_scroll/VirtualScroll';
//
import ProfileInfoActions from '../actions/_main/ProfileInfoActions';
import ProfileInfoBio from '../bio/_main/ProfileInfoBio';
import ProfileInfoPicture from '../picture/_main/ProfileInfoPicture';
//
import './ProfileInfo.scss';
import ProfileInfoCover from '../cover/_main/ProfileInfoCover';
import ProfileInfoName from '../name/ProfileInfoName';
import ProfileInfoFriends from '../friends/_main/ProfileInfoFriends';
import { IS_MOBILE } from '../../../../_constant/Constant';

//
ProfileInfo.propTypes = {
    profile: PropTypes.object,
    openCoverPicture: PropTypes.func,
    openPicture: PropTypes.func,
};

//
function ProfileInfo({
    profile,

    openCoverPicture,
    openPicture,
    handleAction,
}) {
    //
    const { user } = useContext(context_api);

    //
    const {
        id,
        first_name,
        last_name,
        picture,
        cover,

        has_new_story,
        nick_name,
        bio,

        friend_count,
        mutual_friend_count,
        friend_arr,
        has_more_friend,

        action_case_arr,
    } = profile;

    const is_user = user.id == id;

    //
    function handleChangeBio() {
        console.log(id);
    }

    //
    return (
        <VirtualScroll>
            <div className="ProfileInfo bg-primary">
                <div className="ProfileInfo_cover">
                    <ProfileInfoCover
                        cover={cover}
                        openCoverPicture={openCoverPicture}
                    />
                </div>

                <div className="ProfileInfo_user_action display-flex space-between fb-profile-width-contain">
                    <div className="ProfileInfo_user display-flex">
                        <div className="flex-shrink-0">
                            <ProfileInfoPicture
                                picture={picture}
                                has_new_story={has_new_story}
                                openPicture={openPicture}
                            />
                        </div>

                        <div className="ProfileInfo_name_friend margin-left-16px">
                            <div>
                                <ProfileInfoName
                                    name={`${first_name} ${last_name}`}
                                    nick_name={nick_name}
                                />
                            </div>

                            {IS_MOBILE ? null : (
                                <div>
                                    <ProfileInfoFriends
                                        is_user={is_user}
                                        friend_count={friend_count}
                                        mutual_friend_count={
                                            mutual_friend_count
                                        }
                                        friend_arr={friend_arr}
                                        has_more_friend={has_more_friend}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="ProfileInfo_actions align-self-end">
                        <ProfileInfoActions
                            user_id={id}
                            action_case_arr={action_case_arr}
                            handleAction={handleAction}
                        />
                    </div>
                </div>

                {bio ? (
                    <div className="ProfileInfo_bio fb-profile-width-contain padding-top-20px">
                        <ProfileInfoBio
                            is_user={is_user}
                            bio={bio}
                            handleChangeBio={handleChangeBio}
                        />
                    </div>
                ) : null}
            </div>
        </VirtualScroll>
    );
}

export default ProfileInfo;

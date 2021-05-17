import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import SkeletonDiv from '../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import ProfileInfoActions from '../actions/_main/ProfileInfoActions';
import ProfileInfoStory from '../story/_main/ProfileInfoStory';
import ProfileInfoPicture from '../picture/_main/ProfileInfoPicture';
//
import './ProfileInfo.scss';
import { GetIdSlug } from '../../../../_some_function/GetIdSlug';

//
ProfileInfo.propTypes = {
    profile: PropTypes.object,
    openCoverPicture: PropTypes.func,
    openPicture: PropTypes.func,
};

//
function ProfileInfo(props) {
    //
    const id = GetIdSlug();

    //
    const { user } = useContext(context_api);

    //
    const { profile, openCoverPicture, openPicture } = props;

    const {
        // id,
        picture,
        cover_picture,
        first_name,
        last_name,
        nick_name,
        story,

        user_related,
        permission_add_friend,
        is_block_message,
    } = profile;

    //
    function handleChangeStory() {
        console.log(id);
    }

    //
    function handleAddStoryNewFeed() {
        console.log(id);
    }

    //
    function handleAcceptRequest() {
        console.log(id);
    }

    //
    function handleCancelRequest() {
        console.log(id);
    }

    //
    function handleAddFriend() {
        console.log(id);
    }

    //
    function handleFollowFriend() {
        console.log(id);
    }

    //
    return (
        <div className="ProfileInfo">
            <div className="ProfileInfo_pics">
                <ProfileInfoPicture
                    cover_picture={cover_picture}
                    picture={picture}
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                />
            </div>

            {first_name ? (
                <div className="ProfileInfo_name-story">
                    <ProfileInfoStory
                        name={first_name + ' ' + last_name}
                        nick_name={nick_name}
                        story={story}
                        is_user={user.id == id}
                        handleChangeStory={handleChangeStory}
                    />
                </div>
            ) : (
                <SkeletonDiv num={3} />
            )}

            {first_name && (
                <ProfileInfoActions
                    id={id}
                    is_user={user.id == id}
                    user_related={user_related}
                    permission_add_friend={permission_add_friend}
                    is_block_message={is_block_message}
                    //
                    handleAddStory={handleAddStoryNewFeed}
                    handleAcceptRequest={handleAcceptRequest}
                    handleCancelRequest={handleCancelRequest}
                    handleAddFriend={handleAddFriend}
                    handleFollowFriend={handleFollowFriend}
                />
            )}
        </div>
    );
}

export default ProfileInfo;

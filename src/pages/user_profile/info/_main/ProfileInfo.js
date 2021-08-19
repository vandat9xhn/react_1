import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import SkeletonDiv from '../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import './ProfileInfo.scss';
//
import ProfileInfoActions from '../actions/_main/ProfileInfoActions';
import ProfileInfoStory from '../story/_main/ProfileInfoStory';
import ProfileInfoPicture from '../picture/_main/ProfileInfoPicture';
import VirtualScroll from '../../../../component/virtual_scroll/VirtualScroll';

//
ProfileInfo.propTypes = {
    profile: PropTypes.object,
    openCoverPicture: PropTypes.func,
    openPicture: PropTypes.func,
};

//
function ProfileInfo({ profile, is_fetching, openCoverPicture, openPicture }) {
    //
    const { user } = useContext(context_api);

    //
    const {
        id,
        picture,
        cover,
        first_name,
        last_name,

        user_related,
        permission_add_friend,
        is_block_message,
    } = profile;

    const story = profile.you_obj.you;

    const nick_name = profile.other_name_arr.length
        ? profile.other_name_arr[0].other_name
        : '';

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
        <VirtualScroll>
            <div className="ProfileInfo bg-primary">
                <ProfileInfoPicture
                    cover={cover}
                    picture={picture}
                    is_fetching={is_fetching}
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                />

                {!is_fetching ? (
                    <ProfileInfoStory
                        name={first_name + ' ' + last_name}
                        nick_name={nick_name}
                        story={story}
                        is_user={user.id == id}
                        handleChangeStory={handleChangeStory}
                    />
                ) : (
                    <div>
                        <br />
                        <SkeletonDiv num={2} />
                    </div>
                )}

                {!is_fetching ? (
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
                ) : (
                    <div className="ProfileInfo_actions">
                        <br /> <SkeletonDiv />
                    </div>
                )}
            </div>
        </VirtualScroll>
    );
}

export default ProfileInfo;

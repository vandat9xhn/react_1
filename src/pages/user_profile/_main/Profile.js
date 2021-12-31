import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { initial_profile } from '../../../_initial/profile/InitialProfile';
//
import { handle_API_ProfileInfo_R } from '../../../_handle_api/profile/info';
//
import { useRouteFollowSearch } from '../../../_hooks/useRouteFollowSearch';
//
import { ProfileRoutes } from '../__common/routes/routes';
//
import RouteFollowSearch from '../../../component/_route/follow_search/RouteFollowSearch';
//
import './ProfileCommon.scss';
//
import ProfileSkeleton from '../__common/skeleton/ProfileSkeleton';
import ProfileInfo from '../info/_main/ProfileInfo';
import ProfileNav from '../nav/_main/ProfileNav';
import ProfileSentFriendRequest from '../sent_friend_request/ProfileSentFriendRequest';
//
import './Profile.scss';

//
function Profile(props) {
    //
    const use_history = useHistory();
    const use_params = useParams();

    const id = use_params.id || location.pathname.split('/')[2];

    //
    const { user } = useContext(context_api);

    //
    const is_your = id == user.id;

    //
    const [profile_state, setProfileState] = useState({
        profile: initial_profile(),
        is_fetching: false,
    });

    const { profile, is_fetching } = profile_state;

    const { first_name, last_name, picture } = profile;

    //
    useEffect(() => {
        handleChangeId();
    }, [id]);

    // ----------

    //
    function handleChangeId() {
        window.scroll(0, 0);
        getProfileInfo();
    }

    //
    const { route_ix, route_props } = useRouteFollowSearch({
        base_path: /\/profile\/\d+/,
        route_arr: ProfileRoutes,
        is_exact: false,

        getRouteProps: getRouteProps,
        handleNotFound: handleNotFound,
    });

    // -------

    //
    async function getProfileInfo() {
        setProfileState({
            ...profile_state,
            is_fetching: true,
        });

        const data = await handle_API_ProfileInfo_R({ user_id: id });
        const user_name = data.first_name + ' ' + data.last_name;

        document.title = user_name;

        setProfileState({
            ...profile_state,
            profile: data,
            is_fetching: false,
        });
    }

    // --------

    //
    function getRouteProps(new_route_ix = 0) {
        return {
            user_id: id,
            name: `${profile.first_name} ${profile.last_name}`,
            is_your: is_your,
        };
    }

    //
    function handleNotFound() {
        use_history.replace('/profile/' + id);
    }

    //
    function openCoverPicture() {
        console.log(id);
    }

    //
    function openPicture() {
        console.log(id);
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    // ----------

    //
    if (is_fetching) {
        return null;
    }

    //
    return (
        <div key={id} className="Profile">
            <div className="Profile_info Profile_part bg-primary">
                <ProfileInfo
                    profile={profile}
                    //
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                    handleAction={handleAction}
                />
            </div>

            {profile.sent_request ? (
                <div className="Profile_sent_request Profile_part bg-primary">
                    <ProfileSentFriendRequest
                        user_name={`${profile.first_name} ${profile.last_name}`}
                        handleAction={handleAction}
                    />
                </div>
            ) : null}

            <div className="fb-profile-nav">
                <div className="fb-profile-width-contain">
                    <ProfileNav
                        user_id={id}
                        user_name={`${first_name} ${last_name}`}
                        user_pic={picture}
                        handleAction={handleAction}
                    />
                </div>
            </div>

            <div className="Profile_main margin-top-20px">
                <RouteFollowSearch
                    RouteComponent={ProfileRoutes[route_ix].component}
                    route_props={route_props}
                    fallback={<ProfileSkeleton />}
                />
            </div>
        </div>
    );
}

export default Profile;

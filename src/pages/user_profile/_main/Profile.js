import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
// 
import { handle_API_ProfileInfo_R } from '../../../_handle_api/profile/info';
// 
import { initial_profile } from '../../../_initial/profile/InitialProfile';
// 
import { useRouteLoaded } from '../../../_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../component/_route/route_loaded/RouteLoaded';
//
import { ProfileRoutes, profile_search_arr } from '../__common/routes/routes';
//
import ProfileSkeleton from '../__common/skeleton/ProfileSkeleton';
import ProfileInfo from '../info/_main/ProfileInfo';
import ProfileMore from '../more/_main/ProfileMore';
import ProfileSentFriendRequest from '../sent_friend_request/ProfileSentFriendRequest';
//
import './Profile.scss';

//
function Profile(props) {
    //
    const use_history = useHistory();

    //
    const { id } = props.match.params;

    //
    const [profile_state, setProfileState] = useState({
        profile: initial_profile(),
        is_fetching: false,
    });

    const { profile, is_fetching } = profile_state;

    //
    useEffect(() => {
        handleChangeId();
    }, [id]);

    // ----------

    //
    function handleChangeId() {
        window.scroll(0, 0);
        getProfileInfo();
        // makeReset()
    }

    //
    const { route_arr, makeReset } = useRouteLoaded({
        initial_route_arr: update(ProfileRoutes, {
            0: { props: { $set: {} } },
        }),
        part_location: 'search',
        allow_routes_str: profile_search_arr,
        deps: [id],

        handleNotFoundRoute: handleNotFoundRoute,
    });

    //
    async function getProfileInfo() {
        setProfileState({
            ...profile_state,
            is_fetching: true,
        });

        const data = await handle_API_ProfileInfo_R({ user_id: id });
        const user_name = data.first_name + ' ' + data.last_name;

        route_arr.map((item) => {
            item.props = {
                name: user_name,
                user_id: id,
            };

            return item;
        });

        setProfileState({
            profile: data,
            is_fetching: false,
        });
        document.title = user_name;
    }

    // --------

    //
    function handleNotFoundRoute() {
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
            <div className="Profile_head margin-bottom-15px bg-primary">
                <div className="Profile_info">
                    <ProfileInfo
                        profile={profile}
                        //
                        openCoverPicture={openCoverPicture}
                        openPicture={openPicture}
                        handleAction={handleAction}
                    />
                </div>

                {profile.sent_request ? (
                    <div className="Profile_sent_request margin-top-20px">
                        <ProfileSentFriendRequest
                            user_name={`${profile.first_name} ${profile.last_name}`}
                            handleAction={handleAction}
                        />
                    </div>
                ) : null}

                {IS_MOBILE ? null : (
                    <div className="Profile_more margin-top-20px">
                        <ProfileMore user_id={id} handleAction={handleAction} />
                    </div>
                )}
            </div>

            <RouteLoaded
                route_arr={route_arr}
                // use_loaded={false}
                fallback={<ProfileSkeleton />}
            />
        </div>
    );
}

export default Profile;

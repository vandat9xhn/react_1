import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../_custom_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../component/_route/route_loaded/RouteLoaded';
//
import { initial_profile } from '../__common/initial/Initial';
import { ProfileRoutes, profile_search_arr } from '../__common/routes/routes';
import ProfileSkeleton from '../__common/skeleton/ProfileSkeleton';

import { handle_API_ProfileUser_R } from '../__handle_api/ProfileHandleAPI';

import ProfileInfo from '../info/_main/ProfileInfo';
import ProfileMore from '../more/_main/ProfileMore';
//
import './Profile.scss';

//
function Profile(props) {
    const { id } = props.match.params;

    //
    const [profile_state, setProfileState] = useState({
        profile: { ...initial_profile },
        is_fetching: false,
    });

    const { profile, is_fetching } = profile_state;

    //
    const [route_loaded_arr, setRouteLoadedArr] = useRouteLoaded({
        part_location: 'search',
        allowed_routes: profile_search_arr,
        handleNotFoundRoute: handleNotFoundRoute,
    });

    //
    useEffect(() => {
        handleChangeId();
        setRouteLoadedArr([location.search]);
        getProfileInfo();
    }, [id]);

    //
    function handleChangeId() {
        window.scroll(0, 0);
    }

    //
    async function getProfileInfo() {
        setProfileState({
            ...profile_state,
            is_fetching: true,
        });

        const data = await handle_API_ProfileUser_R(id);

        ProfileRoutes.find((item) => item.search == '').props = {
            last_name: data.last_name,
        };

        setProfileState({
            profile: data,
            is_fetching: false,
        });
        document.title = data.first_name + ' ' + data.last_name;
    }

    //
    function handleNotFoundRoute() {
        setRouteLoadedArr([''])
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
    return (
        <div className="Profile">
            <div className="Profile_info">
                <ProfileInfo
                    profile={profile}
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                />
            </div>

            <div className="Profile_more">
                <ProfileMore />
            </div>

            <RouteLoaded
                route_arr={ProfileRoutes}
                part_location="search"
                route_loaded_arr={route_loaded_arr}
                fallback={<ProfileSkeleton />}
            />
        </div>
    );
}

export default Profile;

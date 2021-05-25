import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../_custom_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../component/_route/route_loaded/RouteLoaded';
//
import { initial_profile } from '../__common/initial/Initial';
import { ProfileRoutes } from '../__common/routes/routes';
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
    const [route_loaded_arr, setRouteLoadedArr] = useRouteLoaded(
        'search',
        handleBeforeSetRouteLoaded
    );

    //
    useEffect(() => {
        handleChangeId();
        setRouteLoadedArr([handleBeforeSetRouteLoaded()]);
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
    function handleBeforeSetRouteLoaded() {
        const search_arr = ProfileRoutes.map((item) => item.search);
        
        if (!search_arr.includes(location.search)) {
            location.search = '';

            return '';
        }

        return location.search;
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

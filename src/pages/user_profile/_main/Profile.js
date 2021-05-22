import React, { Suspense, Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../_custom_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../component/_route/route_loaded/RouteLoaded';
//
import { ProfileRoutes } from '../__common/routes';
import { initial_profile } from '../__common/Initial';

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
    const [route_loaded_arr] = useRouteLoaded(
        'search',
        handleBeforeSetRouteLoaded
    );

    //
    useEffect(() => {
        getProfileInfo();
    }, [id]);

    //
    async function getProfileInfo() {
        setProfileState({
            ...profile_state,
            is_fetching: true,
        });

        const data = await handle_API_ProfileUser_R(id);

        setProfileState({
            profile: data,
            is_fetching: false,
        });
        document.title = data.first_name + ' ' + data.last_name;
    }

    //
    function handleBeforeSetRouteLoaded() {
        if (
            ![
                '',
                '?sk=friend',
                '?sk=photos_all',
                '?sk=photos_album',
                '?sk=about',
            ].includes(location.search)
        ) {
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

    console.log(route_loaded_arr);
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

            <Suspense fallback={<Fragment />}>
                <RouteLoaded
                    route_arr={ProfileRoutes}
                    part_location="search"
                    route_loaded_arr={route_loaded_arr}
                />
            </Suspense>
        </div>
    );
}

export default Profile;

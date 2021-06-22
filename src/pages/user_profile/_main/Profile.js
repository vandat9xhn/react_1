import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../_custom_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../component/_route/route_loaded/RouteLoaded';
//
import { ProfileRoutes, profile_search_arr } from '../__common/routes/routes';
// 
import { initial_profile } from '../__common/initial/Initial';
// 
import { handle_API_ProfileUser_R } from '../__handle_api/ProfileHandleAPI';
//
import ProfileSkeleton from '../__common/skeleton/ProfileSkeleton';
import ProfileInfo from '../info/_main/ProfileInfo';
import ProfileMore from '../more/_main/ProfileMore';
//
import './Profile.scss';

//
function Profile(props) {
    // 
    const use_history = useHistory()

    // 
    const { id } = props.match.params;

    //
    const [profile_state, setProfileState] = useState({
        profile: initial_profile,
        is_fetching: false,
    });

    const { profile, is_fetching } = profile_state;

    //
    const { route_arr } =
        useRouteLoaded({
            initial_route_arr: ProfileRoutes,
            part_location: 'search',
            allow_routes_str: profile_search_arr,
            deps: [id],

            handleNotFoundRoute: handleNotFoundRoute,
        });

    //
    useEffect(() => {
        handleChangeId();
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

        const data = await handle_API_ProfileUser_R({ user_id: id });

        route_arr.find((item) => item.search == '').props = {
            name: data.first_name + ' ' + data.last_name,
        };

        route_arr.find((item) => item.search.includes('?sk=about')).props = {
            name: data.first_name + ' ' + data.last_name,
        };

        setProfileState({
            profile: data,
            is_fetching: false,
        });
        document.title = data.first_name + ' ' + data.last_name;
    }

    //
    function handleNotFoundRoute() {
        use_history.replace('/profile/' + id)
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
                    is_fetching={is_fetching}
                    openCoverPicture={openCoverPicture}
                    openPicture={openPicture}
                />
            </div>

            <div className="Profile_more">
                <ProfileMore />
            </div>

            <RouteLoaded
                route_arr={route_arr}
                fallback={<ProfileSkeleton />}
            />
        </div>
    );
}

export default Profile;

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useRouteFollowSearch } from '../../../../../_hooks/useRouteFollowSearch';
//
import { PhotosRoutes } from '../__common/routes/routes';
//
import RouteFollowSearch from '../../../../../component/_route/follow_search/RouteFollowSearch';
//
import ProfileSkeleton from '../../../__common/skeleton/ProfileSkeleton';
import ProfileLayoutNavItem from '../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem';
//
import './ProfilePhoto.scss';

//
ProfilePhoto.propTypes = {};

//
function ProfilePhoto({ user_id, name, is_your }) {
    //
    const use_history = useHistory();

    //
    const [photo_arr, setPhotoArr] = useState([
        {
            search: 'all',
            title: is_your ? 'Your Photos' : `${name.split(' ')[0]}'s Photos`,
        },
        {
            search: 'albums',
            title: 'Albums',
        },
    ]);

    //
    const { route_ix, route_props } = useRouteFollowSearch({
        base_path: /\/profile\/\d+\?sk=photo/,
        route_arr: PhotosRoutes,
        is_exact: false,

        getRouteProps: getRouteProps,
        handleNotFound: handleNotFound,
    });

    // -----

    //
    function getRouteProps() {
        return {
            user_id: user_id,
            name: name,
            is_your: is_your,
        };
    }

    //
    function handleNotFound() {
        use_history.replace(`${location.pathname}${PhotosRoutes[0].search}`);
    }

    //
    return (
        <div className="ProfilePhoto profile-route-contain padding-y-16px">
            <h2 className="ProfilePhoto_title profile-route-title padding-x-8px">
                Photos
            </h2>

            <div className="display-flex margin-y-15px">
                {photo_arr.map((item, ix) => (
                    <div key={ix} className="h-52px font-600 text-secondary">
                        <ProfileLayoutNavItem
                            title={item.title}
                            link_to={`?sk=photos_${item.search}`}
                            IsActive={() => {
                                return (
                                    `?sk=photos_${item.search}` ==
                                    location.search
                                );
                            }}
                        />
                    </div>
                ))}
            </div>

            <RouteFollowSearch
                RouteComponent={PhotosRoutes[route_ix].component}
                route_props={route_props}
                fallback={<ProfileSkeleton />}
            />
        </div>
    );
}

export default ProfilePhoto;

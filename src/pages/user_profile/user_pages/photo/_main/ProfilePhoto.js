import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { useRouteLoaded } from '../../../../../_hooks/useRouteLoaded';
//
import RouteLoaded from '../../../../../component/_route/route_loaded/RouteLoaded';
//
import ProfileSkeleton from '../../../__common/skeleton/ProfileSkeleton';

import { PhotosRoutes, photos_searches_str } from '../__common/routes/routes';
//
import './ProfilePhoto.scss';

//
const group_photo_arr = [
    {
        search: 'all',
        title: 'Your Photos',
    },
    {
        search: 'album',
        title: 'Album',
    },
];

//
ProfilePhoto.propTypes = {};

//
function ProfilePhoto({ user_id, name }) {
    //
    const { route_arr } = useRouteLoaded({
        initial_route_arr: PhotosRoutes,
        part_location: 'search',
        allow_routes_str: photos_searches_str,
        deps: [user_id],
    });

    //
    return (
        <div className="ProfilePhoto padding-8px bg-primary brs-8px-md box-shadow-1">
            <h2 className="ProfilePhoto_title">Photos</h2>

            <div>
                <div className="display-flex">
                    {group_photo_arr.map((item, ix) => (
                        <Link
                            key={`${ix}`}
                            to={`?sk=photos_${item.search}`}
                            className="normal-text"
                            replace
                        >
                            <div className="padding-8px">
                                <span
                                    className={`label-field hv-cl-blue ${
                                        `?sk=photos_${item.search}` ==
                                        location.search
                                            ? 'text-blue'
                                            : ''
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <RouteLoaded
                    route_arr={route_arr}
                    fallback={<ProfileSkeleton />}
                />
            </div>
        </div>
    );
}

export default ProfilePhoto;

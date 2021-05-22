import React, { Suspense, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
import RouteLoaded from '../../../../../component/_route/route_loaded/RouteLoaded';
import { useRouteLoaded } from '../../../../../_custom_hooks/useRouteLoaded';

//
const ProfilePhotoList = React.lazy(() =>
    import('../list/_main/ProfilePhotoList')
);
const ProfilePhotoAlbum = React.lazy(() =>
    import('../album/_main/ProfilePhotoAlbum')
);

//
const photo_routes = [
    {
        component: ProfilePhotoAlbum,
        search: '?sk=photos_album',
    },
    {
        component: ProfilePhotoList,
        search: '?sk=photos_all',
    },
];

//
ProfilePhoto.propTypes = {};

//
function ProfilePhoto(props) {
    const has_fetched = true;

    //
    const [route_loaded_arr] = useRouteLoaded('search');

    //
    return (
        <div>
            <div className="width-fit-content margin-auto">
                <CircleLoading open_fetching={!has_fetched} />
            </div>

            <div className={has_fetched ? '' : 'display-none'}>
                <h2>Photos</h2>

                <div>
                    <div>
                        <div>
                            <Link to="?sk=photos_all" replace>
                                Your photos
                            </Link>
                        </div>

                        <div>
                            <Link to="?sk=photos_album" replace>
                                Albums
                            </Link>
                        </div>
                    </div>

                    <RouteLoaded
                        route_arr={photo_routes}
                        part_location="search"
                        route_loaded_arr={route_loaded_arr}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfilePhoto;

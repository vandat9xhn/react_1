import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_AlbumVidPic_L } from '../../../../__handle_api/ProfileHandleAPI';

import ProfilePhotoMain from '../../_component/_main/ProfilePhotoMain';
import ProfilePhotoAlbumItem from '../item/ProfilePhotoAlbumItem';
import ProfilePhotoList from '../../_component/list/_main/ProfilePhotoList';
//
import './ProfilePhotoAlbum.scss';
import CircleLoading from '../../../../../../component/waiting/circle_loading/CircleLoading';

//
ProfilePhotoAlbum.propTypes = {};

//
function ProfilePhotoAlbum(props) {
    //
    const [album_state, setAlbumState] = useState({
        album_model: 0,
        album_name: '',
        is_fetching: false,
    });

    const { album_model, album_name, is_fetching } = album_state;

    //
    const ref_photos_in_album = useRef(null);

    //
    function handleChooseAlbum(new_album_model, new_album_name) {
        setAlbumState({
            album_model: 0,
            album_name: '',
            is_fetching: true,
        });

        setTimeout(() => {
            setAlbumState({
                album_model: new_album_model,
                album_name: new_album_name,
                is_fetching: false,
            });

            ref_photos_in_album.current.scrollIntoView();
        }, 100);
    }

    //
    return (
        <div>
            <div>
                <ProfilePhotoMain
                    initial_photo_state={[
                        {
                            id: 0,
                            name: '',
                            vid_pics: [{ vid_pic: '' }],
                        },
                    ]}
                    item_props={{ handleChooseAlbum: handleChooseAlbum }}
                    title_show_more="See more album"
                    //
                    handle_API_Photo_L={handle_API_AlbumVidPic_L}
                    ProfilePhotoItem={ProfilePhotoAlbumItem}
                    ProfilePhotoMainSkeleton={
                        <div className="height-100vh"></div>
                    }
                />
            </div>

            <div ref={ref_photos_in_album}>
                <br />
            </div>

            {album_model ? (
                <div
                    id={`#ProfilePhotoAlbumItem_${album_model}`}
                    className="ProfilePhotoAlbum_current"
                >
                    <h3>
                        {album_name} {album_model}
                    </h3>

                    <div>
                        <ProfilePhotoList
                            album_model={album_model}
                            ProfilePhotoMainSkeleton={
                                <div className="width-fit-content margin-auto height-100vh">
                                    <CircleLoading open_fetching={true} />
                                </div>
                            }
                        />
                    </div>
                </div>
            ) : (
                <div
                    className={`height-100vh ${
                        is_fetching ? '' : 'display-none'
                    }`}
                ></div>
            )}
        </div>
    );
}

export default ProfilePhotoAlbum;

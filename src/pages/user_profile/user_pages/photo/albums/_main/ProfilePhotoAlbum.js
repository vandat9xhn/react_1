import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_AlbumVidPic_L } from '../../../../../../_handle_api/profile/ProfileHandleAPI';

import ProfilePhotoMain from '../../_component/_main/ProfilePhotoMain';
import ProfilePhotoAlbumCreate from '../create/ProfilePhotoAlbumCreate';
import ProfilePhotoAlbumItem from '../item/ProfilePhotoAlbumItem';
//
import './ProfilePhotoAlbum.scss';

//
ProfilePhotoAlbum.propTypes = {};

//
function ProfilePhotoAlbum({ is_your }) {
    //
    return (
        <div className="ProfilePhotoAlbum">
            <div>
                <ProfilePhotoMain
                    initial_photo_state={[
                        {
                            id: 0,
                            name: '',
                            vid_pic: '',
                            count: 0,
                        },
                    ]}
                    has_create={is_your}
                    CreateElm={<ProfilePhotoAlbumCreate />}
                    //
                    title_show_more="See more album"
                    //
                    handle_API_Photo_L={handle_API_AlbumVidPic_L}
                    ProfilePhotoItem={ProfilePhotoAlbumItem}
                    ProfilePhotoMainSkeleton={<div className="h-100vh"></div>}
                />
            </div>
        </div>
    );
}

export default ProfilePhotoAlbum;

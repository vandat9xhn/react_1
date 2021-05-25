import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_VidPic_L } from '../../../../../__handle_api/ProfileHandleAPI';

import ProfilePhotoMain from '../../_main/ProfilePhotoMain';
import ProfilePhotoItem from '../item/ProfilePhotoItem';
//
// import './ProfilePhotoList.scss';

//
ProfilePhotoList.propTypes = {
    album_model: PropTypes.number,
    ProfilePhotoMainSkeleton: PropTypes.element,
};

ProfilePhotoList.defaultProps = {
    album_model: 0,
}

//
function ProfilePhotoList({album_model, ProfilePhotoMainSkeleton}) {
    // 
    function on_API_VidPic_L(user_id, c_count) {
        return handle_API_VidPic_L(user_id, c_count, album_model)
    }

    //
    return (
        <div>
            <ProfilePhotoMain
                initial_photo_state={[
                    {
                        id: 0,
                        vid_pic: '',
                    },
                ]}
                handle_API_Photo_L={on_API_VidPic_L}
                ProfilePhotoItem={ProfilePhotoItem}
                ProfilePhotoMainSkeleton={ProfilePhotoMainSkeleton}
            />
        </div>
    );
}

export default ProfilePhotoList;

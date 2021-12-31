import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import ProfilePhotoCreateBtnLink from '../../_component/create/ProfilePhotoCreateBtnLink';

//
ProfilePhotoAlbumCreate.propTypes = {};

//
function ProfilePhotoAlbumCreate(props) {
    //
    return (
        <ProfilePhotoCreateBtnLink
            title={
                <div className="display-flex-center">
                    <IconPlusSubtract size_icon="30px" />
                </div>
            }
            link_to={`/media/set/create`}
        >
            <div className="padding-5px line-20px font-600 text-secondary">
                Create
            </div>
        </ProfilePhotoCreateBtnLink>
    );
}

export default ProfilePhotoAlbumCreate;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import PicSquareDiv from '../../../../../../component/some_div/pic_square_div/PicSquareDiv';
// 
import './ProfilePhotoAlbumItem.scss';

//
ProfilePhotoAlbumItem.propTypes = {};

//
function ProfilePhotoAlbumItem({ item, handleChooseAlbum }) {
    const { id, name, vid_pics } = item;

    // 
    function onChooseAlbum() {
        handleChooseAlbum(id, name)
    }
    //
    return (
        <div className="ProfilePhotoAlbumItem" onClick={onChooseAlbum}>
            {/* <Link to={`?sk=photos_album_${id}`} className="w-100per"> */}
                <div>
                    <PicSquareDiv vid_pic={vid_pics[0].vid_pic} />
                </div>

                <div>{name}</div>
            {/* </Link> */}
        </div>
    );
}

export default ProfilePhotoAlbumItem;

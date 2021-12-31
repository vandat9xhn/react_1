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
function ProfilePhotoAlbumItem({ item }) {
    const { id, name, vid_pic, count } = item;

    //
    return (
        <Link
            className="ProfilePhotoAlbumItem display-block padding-4px text-secondary hv-underline"
            to={`?sk=album_photo&album_id=${id}`}
        >
            <div>
                <PicSquareDiv vid_pic={vid_pic} />
            </div>

            <div className="padding-5px line-20px">
                <div className="font-500">{name}</div>

                <div className="font-13px">
                    {count} item{count >= 2 ? 's' : ''}
                </div>
            </div>
        </Link>
    );
}

export default ProfilePhotoAlbumItem;

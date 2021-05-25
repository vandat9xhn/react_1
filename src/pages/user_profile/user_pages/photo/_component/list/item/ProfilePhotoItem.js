import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import PicSquareDiv from '../../../../../../../component/some_div/pic_square_div/PicSquareDiv';
// 
import './ProfilePhotoItem.scss';

//
ProfilePhotoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        vid_pic: PropTypes.string,
    }),
};

//
function ProfilePhotoItem({ item }) {
    const { id, vid_pic } = item;

    //
    return (
        <Link to={`/post/photos/${id}`} className="w-100per">
            <div className="ProfilePhotoItem">
                <PicSquareDiv vid_pic={vid_pic} />
            </div>
        </Link>
    );
}

export default ProfilePhotoItem;

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
        img: PropTypes.string,
    }),
};

//
function ProfilePhotoItem({ item }) {
    const { id, img } = item;

    //
    return (
        <Link to={`/post/photos/${id}`} className="w-100per">
            <div className="ProfilePhotoItem">
                <PicSquareDiv vid_pic={img} />
            </div>
        </Link>
    );
}

export default ProfilePhotoItem;

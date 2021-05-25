import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ProfilePrPicItem.scss';
import PicSquareDiv from '../../../../../../../component/some_div/pic_square_div/PicSquareDiv';

//
ProfilePrPicItem.propTypes = {};

//
function ProfilePrPicItem({ id, vid_pic }) {
    //
    return (
        <Link to={`/post/photos/${id}`} className="w-100per">
            <div className="ProfilePrPicItem">
                <PicSquareDiv vid_pic={vid_pic} />
            </div>
        </Link>
    );
}

export default ProfilePrPicItem;

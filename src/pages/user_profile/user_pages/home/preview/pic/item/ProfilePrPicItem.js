import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import PicSquareDiv from '../../../../../../../component/some_div/pic_square_div/PicSquareDiv';
//
import './ProfilePrPicItem.scss';

//
ProfilePrPicItem.propTypes = {};

//
function ProfilePrPicItem({ id, vid_pic }) {
    //
    return (
        <Link
            className="ProfilePrPicItem display-block w-100per"
            to={`/post/photos/${id}`}
        >
            <div className="ProfilePrPicItem">
                <PicSquareDiv vid_pic={vid_pic} />
            </div>
        </Link>
    );
}

export default ProfilePrPicItem;

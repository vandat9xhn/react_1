import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './ProfilePrFrItem.scss';
import PicSquareDiv from '../../../../../../../component/some_div/pic_square_div/PicSquareDiv';

//
ProfilePrFrItem.propTypes = {};

//
function ProfilePrFrItem({ friend_obj }) {
    const { id, picture, last_name } = friend_obj;

    //
    return (
        <Link to={`/profile/${id}`} className="w-100per normal-text hv-cl-blue">
            <div className="ProfilePrFrItem">
                <div>
                    <PicSquareDiv vid_pic={picture} />
                </div>

                <div className="text-nowrap">{last_name}</div>
            </div>
        </Link>
    );
}

export default ProfilePrFrItem;

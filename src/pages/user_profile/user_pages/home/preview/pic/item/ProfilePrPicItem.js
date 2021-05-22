import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import './ProfilePrPicItem.scss';

//
ProfilePrPicItem.propTypes = {};

//
function ProfilePrPicItem({ id, vid_pic }) {
    //
    return (
        <div className="ProfilePrPicItem position-rel">
            <Link to={`/post/photos/${id}`}>
                <div className="ProfilePrPicItem_div-img pos-abs-100">
                    <img
                        className="wh-100 brs-8px object-fit-cover"
                        src={vid_pic}
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
}

export default ProfilePrPicItem;

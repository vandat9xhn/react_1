import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './ProfilePrFrItem.scss';

//
ProfilePrFrItem.propTypes = {};

//
function ProfilePrFrItem({ friend_obj }) {
    const { id, picture, last_name } = friend_obj;

    //
    return (
        <div className="ProfilePrFrItem">
            <div className="ProfilePrFrItem_pic position-rel">
                <Link to={`/profile/${id}`} className="normal-text hv-cl-blue">
                    <div className="pos-abs-100">
                        <div className="wh-100">
                            <img
                                className="wh-100 brs-8px object-fit-cover"
                                src={picture}
                                alt=""
                            />
                        </div>

                    </div>

                </Link>
            </div>

            <div className="one-line">{last_name}</div>
        </div>
    );
}

export default ProfilePrFrItem;

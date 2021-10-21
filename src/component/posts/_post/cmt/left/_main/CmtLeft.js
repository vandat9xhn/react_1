import React from 'react';
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';

//
CmtLeft.propTypes = {};

//
function CmtLeft({ user_id, user_pic, user_pic_size }) {
    //
    return (
        <div className="CmtLeft">
            <Link to={`/profile/${user_id}`}>
                <img
                    className="brs-50 object-fit-cover"
                    src={user_pic}
                    alt=""
                    width={user_pic_size}
                    height={user_pic_size}
                />
            </Link>
        </div>
    );
}

export default CmtLeft;

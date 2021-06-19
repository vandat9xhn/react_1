import React from 'react';
import PropTypes from 'prop-types';
//
import Like from '../../../../like/_main/Like';

//
BtnPostLike.propTypes = {};

//
function BtnPostLike({ user_type_like, changeTypeLike }) {
    //
    return (
        <div>
            <Like type_like={user_type_like} changeTypeLike={changeTypeLike} />
        </div>
    );
}

export default BtnPostLike;

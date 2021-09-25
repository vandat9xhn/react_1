import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../_icons_svg/icons_like/icon_like/IconLike';

//
PLUseful.propTypes = {};

//
function PLUseful({ user_liked, count_like, handleLike }) {
    //
    return (
        <div className="cursor-pointer" onClick={handleLike}>
            <IconLike
                size_icon="15px"
                stroke="currentColor"
                fill={user_liked ? 'currentColor' : 'none'}
            />

            <span>Hữu ích{count_like ? ` (${count_like})` : ''}</span>
        </div>
    );
}

export default PLUseful;

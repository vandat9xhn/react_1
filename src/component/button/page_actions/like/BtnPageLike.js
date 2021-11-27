import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageLike.propTypes = {};

//
function BtnPageLike({ use_title, has_liked, handleAction }) {
    //
    function handleLike() {
        handleAction('like');
    }

    //
    return (
        <BtnActions
            className={`BtnPageLike ${
                has_liked ? 'bg-fb-active text-blue' : 'bg-ccc'
            }`}
            Icon={<IconLike fill="currentColor" />}
            use_title={use_title}
            title={'Like'}
            handleClick={handleLike}
        />
    );
}

export default BtnPageLike;

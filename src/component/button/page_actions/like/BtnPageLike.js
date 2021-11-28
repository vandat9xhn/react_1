import React from 'react';
import PropTypes from 'prop-types';
//
import IconLike from '../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageLike.propTypes = {
    ...BtnActions.propTypes,
};

BtnPageLike.defaultProps = {
    Icon: <IconLike fill="currentColor" />,
    title: 'Follow',
    className: 'bg-ccc',
    classNameActive: 'bg-fb-active text-blue',
};

//
function BtnPageLike({
    className,
    classNameActive,
    Icon,
    title,

    use_title,
    use_icon,

    has_liked,
}) {
    //
    function handleLike() {
        handleAction('like');
    }

    //
    return (
        <BtnActions
            className={`BtnPageLike ${has_liked ? classNameActive : className}`}
            Icon={Icon}
            title={title}
            use_title={use_title}
            use_icon={use_icon}
            handleClick={handleLike}
        />
    );
}

export default BtnPageLike;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconFollow from '../../../../_icons_svg/follow/IconFollow';
// 
import BtnActions from '../../actions/BtnActions';

//
BtnPageFollow.propTypes = {
    ...BtnActions.propTypes,
};

BtnPageFollow.defaultProps = {
    Icon: <IconFollow />,
    title: 'Follow',
    className: 'bg-ccc',
    classNameActive: 'BtnPageFollow-active bg-fb-active text-blue',
};

//
function BtnPageFollow({
    className,
    classNameActive,
    Icon,
    title,

    use_title,
    use_icon,
    has_followed,

    handleAction,
}) {
    //
    function onFollow() {
        handleAction('follow');
    }

    //
    return (
        <BtnActions
            className={`BtnPageFollow ${
                has_followed ? classNameActive : className
            }`}
            Icon={Icon}
            title={title}
            use_title={use_title}
            use_icon={use_icon}
            handleClick={onFollow}
        />
    );
}

export default BtnPageFollow;

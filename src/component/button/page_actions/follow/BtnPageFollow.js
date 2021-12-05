import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageFollow.propTypes = {
    ...BtnActions.propTypes,
};

BtnPageFollow.defaultProps = {
    Icon: <IconPlusSubtract stroke="currentColor" />,
    title: 'Follow',
    className: 'bg-ccc',
    classNameActive: 'bg-fb-active text-blue',
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

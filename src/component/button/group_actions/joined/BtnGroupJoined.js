import React from 'react';
import PropTypes from 'prop-types';
//
import IconGroup from '../../../../_icons_svg/icon_group/IconGroup';
//
import BtnActions from '../../actions/BtnActions';

//
BtnGroupJoined.propTypes = {
    ...BtnActions.propTypes,
};

BtnGroupJoined.defaultProps = {
    className: 'bg-ccc',
    title: 'Joined',
    Icon: <IconGroup />,
};

//
function BtnGroupJoined({ className, title, Icon, handleAction }) {
    //
    function handleClick() {
        handleAction && handleAction('joined');
    }

    //
    return (
        <BtnActions
            className={`BtnGroupJoined ${className}`}
            title={title}
            Icon={Icon}
            handleClick={handleClick}
        />
    );
}

export default BtnGroupJoined;

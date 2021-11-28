import React from 'react';
import PropTypes from 'prop-types';
//
import IconGroup from '../../../../_icons_svg/icon_group/IconGroup';
// 
import BtnActions from '../../actions/BtnActions';

//
BtnGroupJoin.propTypes = {
    ...BtnActions.propTypes,
};

BtnGroupJoin.defaultProps = {
    className: 'bg-ccc',
    title: 'Join Group',
    Icon: <IconGroup />
};

//
function BtnGroupJoin({ className, title, Icon, handleAction }) {
    //
    function requestJoinGroup() {
        handleAction('join');
    }

    //
    return (
        <BtnActions
            className={`BtnGroupJoin ${className}`}
            title={title}
            Icon={Icon}
            handleClick={requestJoinGroup}
        />
    );
}

export default BtnGroupJoin;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import BtnActions from '../../actions/BtnActions';

//
BtnGroupInvite.propTypes = {
    ...BtnActions.propTypes,
};

BtnGroupInvite.defaultProps = {
    className: 'bg-blue text-white',
    title: 'Invite',
    Icon: <IconPlusSubtract stroke="currentColor" />,
};

//
function BtnGroupInvite({ className, title, Icon, btn_props, handleAction }) {
    //
    function inviteFriend() {
        handleAction('invite');
    }

    //
    return (
        <BtnActions
            className={`BtnGroupInvite ${className}`}
            title={title}
            Icon={Icon}
            btn_props={btn_props}
            handleClick={inviteFriend}
        />
    );
}

export default BtnGroupInvite;

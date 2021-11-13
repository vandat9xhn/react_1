import React from 'react';
import PropTypes from 'prop-types';
//
import IconFriend from '../../../../_icons_svg/icon_friend/IconFriend';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileAddFriend.propTypes = {};

//
function BtnProfileAddFriend({ use_title, handleAction }) {
    //
    function onAddFriend() {
        handleAction('add_friend');
    }

    //
    return (
        <BtnProfileActions
            className={'BtnProfileAddFriend bg-blue text-white'}
            Icon={<IconFriend is_plus={true} />}
            use_title={use_title}
            title={'Add Friend'}
            handleClick={onAddFriend}
        />
    );
}

export default BtnProfileAddFriend;

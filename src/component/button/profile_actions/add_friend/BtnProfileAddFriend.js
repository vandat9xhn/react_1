import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../_icons_svg/icons_action/IconsAction';
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
            Icon={<IconsAction y={200} />}
            use_title={use_title}
            title={'Add Friend'}
            handleClick={onAddFriend}
        />
    );
}

export default BtnProfileAddFriend;

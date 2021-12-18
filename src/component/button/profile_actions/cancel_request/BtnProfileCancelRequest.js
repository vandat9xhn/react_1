import React from 'react';
import PropTypes from 'prop-types';
//
import IconFriend from '../../../../_icons_svg/icon_friend/IconFriend';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileCancelRequest.propTypes = {};

//
function BtnProfileCancelRequest({ use_title, handleAction }) {
    //
    function onCancelRequest() {
        handleAction('cancel_request');
    }

    //
    return (
        <BtnProfileActions
            className={'BtnProfileCancelRequest bg-ccc'}
            Icon={<IconFriend is_subtract={true} />}
            use_title={use_title}
            title={'Cancel Request'}
            handleClick={onCancelRequest}
        />
    );
}

export default BtnProfileCancelRequest;

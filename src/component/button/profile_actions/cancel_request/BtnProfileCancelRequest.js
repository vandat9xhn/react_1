import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileCancelRequest.propTypes = {};

//
function BtnProfileCancelRequest({ handleAction }) {
    //
    function onCancelRequest() {
        handleAction('cancel_request');
    }

    //
    return (
        <BtnProfileActions
            className={'BtnProfileCancelRequest bg-ccc'}
            Icon={<IconsArrow y={400} />}
            title={'Cancel Request'}
            handleClick={onCancelRequest}
        />
    );
}

export default BtnProfileCancelRequest;

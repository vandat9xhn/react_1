import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
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
            Icon={<IconsArrow y={400} />}
            use_title={use_title}
            title={'Cancel Request'}
            handleClick={onCancelRequest}
        />
    );
}

export default BtnProfileCancelRequest;

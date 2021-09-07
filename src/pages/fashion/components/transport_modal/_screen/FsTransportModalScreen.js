import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import FsTransportsModal from '../_main/FsTransportsModal';
//
import './FsTransportModalScreen.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
FsTransportModalScreen.propTypes = {};

//
function FsTransportModalScreen({
    transport_arr,
    trans_ix,
    delivery_time_ix,

    closeScreen,
    handleChangeTransport,
}) {
    //
    useMakeBodyHidden();

    //
    return (
        <div
            className={`FsTransportModalScreen font-for-fashion ${
                IS_MOBILE
                    ? 'FsTransportModalScreen-mobile'
                    : 'FsTransportModalScreen-pc'
            }`}
        >
            <FsTransportsModal
                transport_arr={transport_arr}
                trans_ix={trans_ix}
                delivery_time_ix={delivery_time_ix}
                closeScreen={closeScreen}
                handleChangeTransport={handleChangeTransport}
            />
        </div>
    );
}

export default FsTransportModalScreen;

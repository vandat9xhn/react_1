import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import FsPVoucherHeadMb from '../mobile/FsPVoucherHead';
import FsPVoucherHeadPc from '../pc/FsPVoucherHead';

//
FsPVoucherHead.propTypes = {};

//
function FsPVoucherHead(props) {
    //
    return (
        <div className="FsPVoucherHead">
            {IS_MOBILE ? <FsPVoucherHeadMb /> : <FsPVoucherHeadPc />}
        </div>
    );
}

export default FsPVoucherHead;

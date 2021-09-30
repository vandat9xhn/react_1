import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import FsPCoinHeadMb from '../mobile/FsPCoinHeadMb';
import FsPCoinHeadPc from '../pc/FsPCoinHeadPc';
//
import './FsPCoinHead.scss';

//
FsPCoinHead.propTypes = {};

//
function FsPCoinHead({ coin, end_time }) {
    //
    return (
        <div className="FsPCoinHead">
            {IS_MOBILE ? (
                <FsPCoinHeadMb coin={coin} end_time={end_time} />
            ) : (
                <FsPCoinHeadPc coin={coin} end_time={end_time} />
            )}
        </div>
    );
}

export default FsPCoinHead;

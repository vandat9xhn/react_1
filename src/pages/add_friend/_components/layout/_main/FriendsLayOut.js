import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import FriendsLayOutPc from '../pc/FriendsLayOutPc';
import FriendsLayOutMb from '../mobile/FriendsLayOutMb';
//
import './FriendsLayOut.scss';

//
FriendsLayOut.propTypes = {};

//
function FriendsLayOut({
    ComponentLeftHead,
    ComponentLeftContain,
    ComponentRight,
}) {
    //
    return IS_MOBILE ? (
        <FriendsLayOutMb
            ComponentLeftHead={ComponentLeftHead}
            ComponentLeftContain={ComponentLeftContain}
        />
    ) : (
        <FriendsLayOutPc
            ComponentLeftHead={ComponentLeftHead}
            ComponentLeftContain={ComponentLeftContain}
            ComponentRight={ComponentRight}
        />
    );
}

export default FriendsLayOut;

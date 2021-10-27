import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileFollow.propTypes = {};

//
function BtnProfileFollow({ handleAction }) {
    //
    function onFollow() {
        handleAction('follow');
    }

    //
    return (
        <BtnProfileActions
            className={'BtnProfileFollow bg-blue text-white'}
            Icon={<IconPlusSubtract stroke="currentColor" />}
            title={'Follow Friend'}
            handleClick={onFollow}
        />
    );
}

export default BtnProfileFollow;

import React from 'react';
import PropTypes from 'prop-types';
//
import IconFollow from '../../../../_icons_svg/follow/IconFollow';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileFollow.propTypes = {};

//
function BtnProfileFollow({ use_title, handleAction }) {
    //
    function onFollow() {
        handleAction('follow');
    }

    //
    return (
        <BtnProfileActions
            className={'BtnProfileFollow bg-blue text-white'}
            Icon={<IconFollow stroke_plus="var(--blue)" />}
            use_title={use_title}
            title={'Follow Friend'}
            handleClick={onFollow}
        />
    );
}

export default BtnProfileFollow;

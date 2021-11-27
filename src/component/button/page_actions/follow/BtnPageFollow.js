import React from 'react';
import PropTypes from 'prop-types';
//
import IconPlusSubtract from '../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageFollow.propTypes = {};

//
function BtnPageFollow({ use_title, has_followed, handleAction }) {
    //
    function onFollow() {
        handleAction('follow');
    }

    //
    return (
        <BtnActions
            className={`BtnPageFollow ${
                has_followed ? 'bg-fb-active text-blue' : 'bg-ccc'
            }`}
            Icon={<IconPlusSubtract stroke="currentColor" />}
            use_title={use_title}
            title={'Follow'}
            handleClick={onFollow}
        />
    );
}

export default BtnPageFollow;

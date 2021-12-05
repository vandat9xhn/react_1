import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../_icons_svg/Icons_input/IconsInput';
//
import BtnActions from '../actions/BtnActions';

//
BtnKeySearch.propTypes = {};

//
function BtnKeySearch({ handleClick }) {
    //
    return (
        <BtnActions
            className="bg-ccc"
            Icon={<IconsInput y={200} />}
            title=""
            use_title={false}
            //  use_icon
            handleClick={handleClick}
        />
    );
}

export default BtnKeySearch;

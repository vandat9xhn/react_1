import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
// 
import BtnActions from '../../../../../component/button/actions/BtnActions';

//
GroupPageBtnSearch.propTypes = {};

//
function GroupPageBtnSearch({ openGroupSearch }) {
    //
    return (
        <BtnActions
            className="bg-ccc"
            Icon={<IconsInput y={200} />}
            title=""
            use_title={false}
            //  use_icon
            handleClick={openGroupSearch}
        />
    );
}

export default GroupPageBtnSearch;

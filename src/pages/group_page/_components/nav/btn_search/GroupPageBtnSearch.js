import React from 'react';
import PropTypes from 'prop-types';
//
import BtnKeySearch from '../../../../../component/button/key_search/BtnKeySearch';

//
GroupPageBtnSearch.propTypes = {};

//
function GroupPageBtnSearch({ openGroupSearch }) {
    //
    return <BtnKeySearch handleClick={openGroupSearch} />;
}

export default GroupPageBtnSearch;

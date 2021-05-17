import React from 'react';
import PropTypes from 'prop-types';
// 
import FashionHCommon from '../__main_common/FashionHCommon';


//
FashionHSearch.propTypes = {
    value_search: PropTypes.string,
    handleSearchFashion: PropTypes.func,
    handleChangeValueSearch: PropTypes.func,
};

//
function FashionHSearch(props) {
    // props
    const { handleSearchFashion, value_search, handleChangeValueSearch} = props;
    //
    return (
        <div className="FashionHSearch">
            <FashionHCommon
                value_search={value_search}
                handled={true}
                handleChangeValueSearch={handleChangeValueSearch}
                handleSearchFashion={handleSearchFashion}
            />
        </div>
    );
}

export default FashionHSearch;

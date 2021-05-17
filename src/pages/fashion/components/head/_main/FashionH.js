import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// 
import FashionHCommon from '../__main_common/FashionHCommon';

//
FashionH.propTypes = {
};

//
function FashionH(props) {
    // state
    const [search, setSearch] = useState('');
    
    //
    function handleSearchFashion(new_search){
        new_search.trim() && setSearch(new_search)
    }

    //
    if (search) {
        return <Redirect to={`/fashion/search?q=${search}`} push />;
    }
    //
    return (
        <div className="FashionH">
            <FashionHCommon
                handled={false}
                handleSearchFashion={handleSearchFashion}
            />
        </div>
    );
}

export default FashionH;

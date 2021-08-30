import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import FashionHCommon from '../__main_common/FashionHCommon';

//
FashionH.propTypes = {};

//
function FashionH(props) {
    //
    const use_history = useHistory();

    //
    function handleSearchFashion(new_search) {
        use_history.push(`/fashion/search?q=${new_search}`);
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

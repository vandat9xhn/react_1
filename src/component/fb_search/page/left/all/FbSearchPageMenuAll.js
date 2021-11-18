import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../_components/menu_item/FbSearchPageMenuItem';

//
FbSearchPageMenuAll.propTypes = {};

//
function FbSearchPageMenuAll({ search_value }) {
    //
    return (
        <div>
            <FbSearchPageMenuItem
                title="All"
                pathname="/fb-search"
                search_value={search_value}
            />
        </div>
    );
}

export default FbSearchPageMenuAll;

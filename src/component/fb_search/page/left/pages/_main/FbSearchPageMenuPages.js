import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuPagesFilter from '../filter/FbSearchPageMenuPagesFilter';

//
FbSearchPageMenuPages.propTypes = {};

//
function FbSearchPageMenuPages({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuPages">
            <FbSearchPageMenuItem
                title="Pages"
                pathname="/fb-search/pages"
                search_value={search_value}
            >
                <FbSearchPageMenuPagesFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuPages;

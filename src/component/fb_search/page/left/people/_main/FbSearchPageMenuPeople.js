import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuPeopleFilter from '../filter/FbSearchPageMenuPeopleFilter';

//
FbSearchPageMenuPeople.propTypes = {};

//
function FbSearchPageMenuPeople({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuPeople">
            <FbSearchPageMenuItem
                title="People"
                pathname="/search/people"
                search_value={search_value}
            >
                <FbSearchPageMenuPeopleFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuPeople;

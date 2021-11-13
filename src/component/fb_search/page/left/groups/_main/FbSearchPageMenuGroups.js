import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuGroupsFilter from '../filter/FbSearchPageMenuGroupsFilter';

//
FbSearchPageMenuGroups.propTypes = {};

//
function FbSearchPageMenuGroups({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuGroups">
            <FbSearchPageMenuItem
                title="Groups"
                pathname="/search/groups"
                search_value={search_value}
            >
                <FbSearchPageMenuGroupsFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuGroups;

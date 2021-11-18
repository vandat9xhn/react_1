import React from 'react';
import PropTypes from 'prop-types';
//
import IconGroup from '../../../../../../_icons_svg/icon_group/IconGroup';
// 
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuGroupsFilter from '../filter/FbSearchPageMenuGroupsFilter';
// 
import './FbSearchPageMenuGroups.scss';

//
FbSearchPageMenuGroups.propTypes = {};

//
function FbSearchPageMenuGroups({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuGroups">
            <FbSearchPageMenuItem
                title="Groups"
                Icon={<IconGroup />}
                pathname="/fb-search/groups"
                search_value={search_value}
            >
                <FbSearchPageMenuGroupsFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuGroups;

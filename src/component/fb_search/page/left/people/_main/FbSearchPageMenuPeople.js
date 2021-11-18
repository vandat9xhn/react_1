import React from 'react';
import PropTypes from 'prop-types';
//
import IconFriends from '../../../../../../_icons_svg/icon_friends/IconFriends';
//
import FbSearchPageMenuItem from '../../../_components/menu_item/FbSearchPageMenuItem';
import FbSearchPageMenuPeopleFilter from '../filter/FbSearchPageMenuPeopleFilter';
// 
import './FbSearchPageMenuPeople.scss';

//
FbSearchPageMenuPeople.propTypes = {};

//
function FbSearchPageMenuPeople({ search_value }) {
    //
    return (
        <div className="FbSearchPageMenuPeople">
            <FbSearchPageMenuItem
                title="People"
                Icon={<IconFriends />}
                pathname="/fb-search/people"
                search_value={search_value}
            >
                <FbSearchPageMenuPeopleFilter />
            </FbSearchPageMenuItem>
        </div>
    );
}

export default FbSearchPageMenuPeople;

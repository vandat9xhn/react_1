import React from 'react';
import PropTypes from 'prop-types';
//
import GroupCard from '../../../group_card/_main/GroupCard';

//
GroupItemCards.propTypes = {};

//
function GroupItemCards({ item, ix, BtnElm, removeGroupCard }) {
    // 
    function onRemoveGroupCard() {
        removeGroupCard(ix)
    }

    //
    return (
        <GroupCard
            id={item.id}
            name={item.name}
            picture={item.picture}
            //
            count_member={item.count_member}
            post_count={item.post_count}
            post_unit={item.post_unit}
            //
            friend_arr={item.friend_arr}
            friend_count={item.friend_count}
            has_more_friend={item.has_more_friend}
            //
            BtnElm={BtnElm}
            removeGroupCard={ onRemoveGroupCard}
        />
    );
}

export default GroupItemCards;

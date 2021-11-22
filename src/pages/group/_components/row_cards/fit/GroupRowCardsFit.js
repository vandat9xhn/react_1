import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../_handle_api/fb_group/suggested';
//
import CardsRowFit from '../../../../../component/cards_row/fit/_main/CardsRowFit';
import GroupCard from '../../group_card/_main/GroupCard';
//
import './GroupRowCardsFit.scss';

//
function GroupItem({ item, ix, BtnElm }) {
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
            removeGroupCard={() => removeGroupCard(ix)}
        />
    );
}

//
GroupRowCardsFit.propTypes = {};

//
function GroupRowCardsFit({ params_api, BtnElm, handleFetched }) {
    //
    function handle_API_L(c_count) {
        return handle_API_FbGroupSuggested_L({
            c_count: c_count,
            params: {
                size: 5,
                ...params_api,
            },
        });
    }

    // ------

    //
    function removeGroupCard(params) {
        console.log(params);
    }

    //
    return (
        <div className="GroupRowCardsFit">
            <CardsRowFit
                ItemComponent={GroupItem}
                item_props={{
                    BtnElm: BtnElm,
                    removeGroupCard: removeGroupCard,
                }}
                //
                handle_API_L={handle_API_L}
                handleFetched={handleFetched}
            />
        </div>
    );
}

export default GroupRowCardsFit;

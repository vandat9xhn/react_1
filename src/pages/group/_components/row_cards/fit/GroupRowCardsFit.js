import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../_handle_api/fb_group/suggested';
//
import CardsRowFit from '../../../../../component/cards_row/fit/_main/CardsRowFit';
import GroupItemCards from '../_components/item/GroupItemCards';
//
import './GroupRowCardsFit.scss';

//
GroupRowCardsFit.propTypes = {};

//
function GroupRowCardsFit({
    params_api,
    has_handle_API_L = false,
    BtnElm,

    handle_API_GroupCards_L,
    handleFetched,
}) {
    //
    function handle_API_L(c_count) {
        if (has_handle_API_L) {
            return handle_API_GroupCards_L(c_count);
        }

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
                ItemComponent={GroupItemCards}
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

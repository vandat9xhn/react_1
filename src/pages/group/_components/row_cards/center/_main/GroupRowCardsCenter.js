import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../../_handle_api/fb_group/suggested';
//
import CardsRowCenter from '../../../../../../component/cards_row/center/_main/CardsRowCenter';
import GroupItemCards from '../../_components/item/GroupItemCards';
//
import './GroupRowCardsCenter.scss';

//
GroupRowCardsCenter.propTypes = {};

//
function GroupRowCardsCenter({
    params_api,
    has_blur_side,
    BtnElm,
    
    handleFetched,
}) {
    //
    function handle_API_L(c_count = 0) {
        return handle_API_FbGroupSuggested_L({
            c_count: c_count,
            params: {
                size: 5,
                ...params_api,
            },
        });
    }

    //
    function removeGroupCard(params) {
        console.log(params);
    }

    //
    return (
        <div className="GroupRowCardsCenter pos-rel">
            <CardsRowCenter
                ItemComponent={GroupItemCards}
                item_props={{
                    BtnElm: BtnElm,
                    removeGroupCard: removeGroupCard,
                }}
                has_blur_side={has_blur_side}
                //
                handle_API_L={handle_API_L}
                handleFetched={handleFetched}
            />
        </div>
    );
}

export default GroupRowCardsCenter;

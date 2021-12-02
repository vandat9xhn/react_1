import React from 'react';
import PropTypes from 'prop-types';
//
import GroupRowCardsFit from '../../../../../group/_components/row_cards/fit/GroupRowCardsFit';
// 
import './GPAbRecommended.scss';

//
GPAbRecommended.propTypes = {};

//
function GPAbRecommended({ recommended_count, openRecommendedGroups }) {
    //
    return (
        <div className="GPAbRecommended gr-page-about-part">
            <h2 className="gr-page-about-title">
                Recommended by the admins · {recommended_count}
            </h2>

            <hr className="gr-page-about-hr" />

            <div className="font-13px">
                <GroupRowCardsFit
                    // has_handle_API_L={true}
                    // handle_API_GroupCards_L={}
                    params_api={{}}
                    // handleFetched={handleFetched}
                />
            </div>

            <div className="margin-top-10px">
                <button
                    className="display-flex-center w-100per h-36px btn btn-active brs-6px text-blue font-500 cursor-pointer hv-bg-s-through"
                    type="button"
                    onClick={openRecommendedGroups}
                >
                    See All Groups
                </button>
            </div>
        </div>
    );
}

export default GPAbRecommended;

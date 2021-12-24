import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import GroupRowCardsFit from '../../../../../group/_components/row_cards/fit/GroupRowCardsFit';
//
import './NewFeedSuggestedGroups.scss';

//
NewFeedSuggestedGroups.propTypes = {};

//
function NewFeedSuggestedGroups(props) {
    //
    return (
        <div className="NewFeedSuggestedGroups w-500px margin-auto padding-y-12px brs-8px-pc bg-primary box-shadow-1 font-14px">
            <h2 className="margin-bottom-12px padding-x-12px font-17px font-600">
                Suggested Groups
            </h2>

            <GroupRowCardsFit
                // handleFetched={handleFetched}
                params_api={{ type: 'suggested' }}
            />

            <Link
                className="display-block margin-top-12px text-align-center font-500 hv-underline"
                to="/group/categories?q=suggestion"
            >
                See All
            </Link>
        </div>
    );
}

export default NewFeedSuggestedGroups;

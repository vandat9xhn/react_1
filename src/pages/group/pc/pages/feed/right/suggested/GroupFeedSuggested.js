import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import GroupRowCardsFit from '../../../../../_components/row_cards/fit/GroupRowCardsFit';
//
import './GroupFeedSuggested.scss';

//
GroupFeedSuggested.propTypes = {};

//
function GroupFeedSuggested({ handleReady }) {
    //
    const [has_fetched, setHasFetched] = useState(false);

    // ----

    //
    function handleFetched() {
        setHasFetched(true);
        handleReady();
    }

    //
    return (
        <div className="GroupFeedSuggested brs-8px bg-primary box-shadow-1 text-secondary">
            <div className="GroupFeedSuggested_head padding-x-16px padding-y-20px">
                <div className="flex-between-center">
                    <h2 className="font-17px font-600">Suggested for you</h2>

                    <Link to="/group/discover">See more</Link>
                </div>

                <div>Groups you might be interested in.</div>
            </div>

            <div
                className={`GroupFeedSuggested_body padding-bottom-20px ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <GroupRowCardsFit
                    handleFetched={handleFetched}
                    params_api={{ type: 'suggested' }}
                />
            </div>

            {has_fetched ? null : <div className="padding-top-100per"></div>}
        </div>
    );
}

export default GroupFeedSuggested;

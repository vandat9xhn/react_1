import React from 'react';
import PropTypes from 'prop-types';
//
import GroupDiscoverRow from '../row/GroupDiscoverRow';
import GroupDiscoverMoreSuggestions from '../more_suggestions/GroupDiscoverMoreSuggestions';
//
import './GroupDiscoverRight.scss';

//
GroupDiscoverRight.propTypes = {};

//
function GroupDiscoverRight(props) {
    //
    return (
        <div className="GroupDiscoverRight">
            <div>
                <GroupDiscoverRow
                    title="Suggested for you"
                    info="Groups you might be interested in."
                    params_api={{ type: 'suggested' }}
                    link_all="/group/categories?type=suggested"
                />
            </div>

            <div className="GroupDiscoverRight_separate"></div>

            <div>
                <GroupDiscoverRow
                    title="Friend's groups"
                    info="Groups your friends are in."
                    params_api={{ type: 'friend_group' }}
                    link_all="/group/categories?type=friend_group"
                />
            </div>

            <div className="GroupDiscoverRight_separate"></div>

            <div>
                <GroupDiscoverMoreSuggestions />
            </div>
        </div>
    );
}

export default GroupDiscoverRight;

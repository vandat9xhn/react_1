import React from 'react';
import PropTypes from 'prop-types';
//
import GroupLayout from '../../../_components/_layout/_main/GroupLayout';
import GroupFeedRight from '../right/_main/GroupFeedRight';
import GroupFeedCenter from '../center/_main/GroupFeedCenter';
//
import './GroupFeed.scss';

//
GroupFeed.propTypes = {};

//
function GroupFeed(props) {
    //
    return (
        <div className="GroupFeed">
            <GroupLayout>
                <div className="GroupFeed_center_right padding-top-16px">
                    <div className="display-flex justify-content-center">
                        <div className="GroupFeed_center margin-8px w-500px">
                            <GroupFeedCenter />
                        </div>

                        <div className="GroupFeed_right margin-8px w-360px">
                            <GroupFeedRight />
                        </div>
                    </div>
                </div>
            </GroupLayout>
        </div>
    );
}

export default GroupFeed;

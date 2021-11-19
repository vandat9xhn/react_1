import React from 'react';
import PropTypes from 'prop-types';
//
import GroupLayout from '../../../_components/_layout/_main/GroupLayout';
import GroupFeedRight from '../right/_main/GroupFeedRight';
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
                <div className="GroupFeed_center_right display-flex-center padding-top-16px">
                    <div className="display-flex">
                        <div className="GroupFeed_center margin-8px w-500px"></div>

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

import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageDiscussLeft from '../left/_main/GroupPageDiscussLeft';
import GroupPageDiscussRight from '../right/_main/GroupPageDiscussRight';

//
GroupPageDiscuss.propTypes = {};

//
function GroupPageDiscuss({ bg_btn }) {
    //
    return (
        <div className="GroupPageDiscuss padding-16px">
            <div className="display-flex justify-content-center">
                <div className="GroupPageDiscuss_left w-500px margin-right-15px">
                    <GroupPageDiscussLeft bg_btn={bg_btn} />
                </div>

                <div className="GroupPageDiscuss_right w-360px">
                    <GroupPageDiscussRight />
                </div>
            </div>
        </div>
    );
}

export default GroupPageDiscuss;

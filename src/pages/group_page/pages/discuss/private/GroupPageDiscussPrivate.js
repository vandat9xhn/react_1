import React from 'react';
import PropTypes from 'prop-types';

GroupPageDiscussPrivate.propTypes = {};

function GroupPageDiscussPrivate(props) {
    //
    return (
        <div className="GroupPageDiscussPrivate h-360px brs-8px-pc bg-primary box-shadow-1 text-secondary">
            <div className="display-flex-center flex-col h-100per">
                <div className="font-20px font-700">This group is private</div>

                <div className="font-17px">
                    Join this group to view or participate in discussions.
                </div>
            </div>
        </div>
    );
}

export default GroupPageDiscussPrivate;

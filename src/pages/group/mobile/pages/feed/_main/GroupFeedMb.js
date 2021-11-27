import React from 'react';
import PropTypes from 'prop-types';
//
import GroupFeedCenter from '../../../../pc/pages/feed/center/_main/GroupFeedCenter';
// 
import './GroupFeedMb.scss';

//
GroupFeedMb.propTypes = {};

//
function GroupFeedMb(props) {
    //
    return (
        <div className="GroupFeedMb">
            <GroupFeedCenter />
        </div>
    );
}

export default GroupFeedMb;

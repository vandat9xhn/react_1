import React from 'react';
import PropTypes from 'prop-types';

// 
CaseFollow.propTypes = {
    
};

// 
function CaseFollow(props) {
    const {handleFollowFriend} = props;

    // 
    return (
        <div>
            <div onClick={handleFollowFriend}>
                FOLLOW +
            </div>
        </div>
    );
}

export default CaseFollow;
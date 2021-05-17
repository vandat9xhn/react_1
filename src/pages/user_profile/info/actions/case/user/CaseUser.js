import React from 'react';
import PropTypes from 'prop-types';

// 
CaseUser.propTypes = {};

// 
function CaseUser(props) {
    const {handleAddStory} = props;

    // 
    return (
        <div>
            <div onClick={handleAddStory}>Add story</div>
        </div>
    );
}

export default CaseUser;

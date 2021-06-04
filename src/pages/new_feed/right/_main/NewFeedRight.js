import React from 'react';
import PropTypes from 'prop-types';
// 
import NewFeedContact from '../contact/NewFeedContact';
import NewFeedGroupConversation from '../group_conversation/_main/NewFeedGroupConversation';

// 
NewFeedRight.propTypes = {
    
};

// 
function NewFeedRight(props) {
    return (
        <div>
            <div>
                <NewFeedContact />
            </div>

            <div>
                <NewFeedGroupConversation />
            </div>
        </div>
    );
}

export default NewFeedRight;
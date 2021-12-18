import React from 'react';
import PropTypes from 'prop-types';
// 
import NewFeedContact from '../contact/_main/NewFeedContact';
import NewFeedGroupConversation from '../group_conversation/_main/NewFeedGroupConversation';
// 
import './NewFeedRight.scss';

// 
NewFeedRight.propTypes = {
    
};

// 
function NewFeedRight(props) {
    return (
        <div className="NewFeedRight">
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
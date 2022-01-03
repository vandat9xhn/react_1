import React from 'react';
import PropTypes from 'prop-types';

//
ChatMessUnsent.propTypes = {};

//
function ChatMessUnsent(props) {
    //
    return (
        <div className="ChatMessUnsent bg-primary">
            <div className="padding-x-8px padding-y-6px border-blur brs-10px text-third">
                You unsent a message
            </div>
        </div>
    );
}

export default ChatMessUnsent;

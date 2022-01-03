import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ChatMessRemoveItem from '../item/ChatMessRemoveItem';

//
const REMOVE_ARR = [
    {
        title: 'Unsent for everyone',
        description:
            'This message will be unsent for everyone in the chat. Others may have already seen or forwarded it. Unsent messages can still be included in reports.',
    },
    {
        title: 'Remove for you',
        description:
            'This message will be removed for you. Others in the chat will still be able to see it.',
    },
];

//
ChatMessRemove.propTypes = {};

//
function ChatMessRemove({ callbackChoose }) {
    //
    const [remove_ix, setRemoveIx] = useState(0);

    //
    function handleChoose(new_remove_ix = 0) {
        setRemoveIx(new_remove_ix);
        callbackChoose(new_remove_ix);
    }

    //
    return (
        <div className="ChatMessRemove">
            {REMOVE_ARR.map((item, ix) => (
                <div
                    className={`${ix == 0 ? 'margin-bottom-15px' : ''}`}
                    key={ix}
                >
                    <ChatMessRemoveItem
                        title={item.title}
                        description={item.description}
                        ix={ix}
                        is_active={ix == remove_ix}
                        //
                        handleChoose={handleChoose}
                    />
                </div>
            ))}
        </div>
    );
}

export default ChatMessRemove;

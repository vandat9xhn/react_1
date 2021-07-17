import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatScreenTypeLIke.scss';

//
ChatScreenTypeLIke.propTypes = {};

//
function ChatScreenTypeLIke({ component, item_ix, handleTypeLike }) {
    //
    function onTypeLike() {
        handleTypeLike(item_ix);
    }

    //
    return (
        <div className="ChatScreenTypeLIke open-type-like" onClick={onTypeLike}>
            <div>{component}</div>
        </div>
    );
}

export default ChatScreenTypeLIke;

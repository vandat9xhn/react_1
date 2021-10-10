import React from 'react';
import PropTypes from 'prop-types';
//
import './CUPEmojiTypeItem.scss';

//
CUPEmojiTypeItem.propTypes = {};

//
function CUPEmojiTypeItem({ name, ix, is_active, changeType }) {
    //
    function onChangeType() {
        !is_active && changeType(ix);
    }

    //
    return (
        <div
            className={`CUPEmojiTypeItem padding-16px  font-600 cursor-pointer ${
                is_active ? 'CUPEmojiTypeItem-active text-blue' : ' text-third'
            }`}
            onClick={onChangeType}
        >
            {name}
        </div>
    );
}

export default CUPEmojiTypeItem;

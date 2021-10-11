import React from 'react';
import PropTypes from 'prop-types';

//
CUPEmojiTypeItemMb.propTypes = {};

//
function CUPEmojiTypeItemMb({ title, icon, type, changeType }) {
    //
    function onChangeType() {
        changeType(type);
    }

    //
    return (
        <div className="padding-8px hv-bg-bv" onClick={onChangeType}>
            <div className="display-flex align-items-center">
                <div>{icon}</div>

                <div className="margin-left-10px">{title}</div>
            </div>
        </div>
    );
}

export default CUPEmojiTypeItemMb;

import React from 'react';
import PropTypes from 'prop-types';
//
import CUPEmojiTypeItem from '../item/CUPEmojiTypeItem';

//
CUPostEmojiType.propTypes = {};

//
function CUPostEmojiType({ type_arr, type_ix, changeType }) {
    //
    return (
        <div className="CUPostEmojiType">
            <div className="display-flex">
                {type_arr.map((item, ix) => (
                    <div key={ix}>
                        <CUPEmojiTypeItem
                            name={item.name}
                            ix={ix}
                            is_active={type_ix == ix}
                            changeType={changeType}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPostEmojiType;

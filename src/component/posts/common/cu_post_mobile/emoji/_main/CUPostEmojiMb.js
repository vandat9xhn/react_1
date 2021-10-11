import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconFaceGray from '../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
//
import CUPEmojiType from '../type/_main/CUPEmojiTypeMb';
import CUPostEmojiListMb from '../list/_main/CUPEmojiListMb';

//
CUPostEmojiMb.propTypes = {};

//
function CUPostEmojiMb({ emoji_obj, changeEmoji }) {
    //
    const [state_obj, setStateObj] = useState({
        type: emoji_obj.type || '',
    });

    const { type } = state_obj;

    // ----

    //
    function changeType(new_type = '') {
        setStateObj({
            ...state_obj,
            type: new_type,
        });
    }

    //
    function changeChooseType() {
        changeType('');
    }

    //
    return (
        <div className="CUPostEmojiMb">
            <div
                className="display-flex align-items-center padding-10px bg-fb text-third"
                onClick={changeChooseType}
            >
                <div className="padding-right-10px">
                    <IconFaceGray size_icon="14px" />
                </div>

                <div>Add what you're doing or how you're feeling</div>
            </div>

            <div className={`${type ? 'display-none' : ''}`}>
                <CUPEmojiType changeType={changeType} />
            </div>

            {type ? (
                <div>
                    <CUPostEmojiListMb
                        emoji_type={type}
                        emoji_id={emoji_obj.id}
                        changeEmoji={changeEmoji}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default CUPostEmojiMb;

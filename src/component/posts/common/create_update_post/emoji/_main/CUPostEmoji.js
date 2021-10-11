import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CUPostFixHead from '../../_components/fix_head/CUPostFixHead';
import CUPostEmojiType from '../type/_main/CUPostEmojiType';
import CUPostFeeling from '../feeling/_main/CUPostFeeling';
import CUPostActivity from '../activities/_main/CUPostActivity';
//
import './CUPostEmoji.scss';

//
const EMOJI_TYPE_ARR = [
    {
        type: 'feeling',
        name: 'Feelings',
    },
    {
        type: 'activity',
        name: 'Activities',
    },
];

//
CUPostEmoji.propTypes = {};

//
function CUPostEmoji({ emoji_obj, changeEmoji, handleBackHome }) {
    //
    const [type_ix, setTypeIx] = useState(
        emoji_obj.type && emoji_obj.type != 'feeling' ? 1 : 0
    );

    //
    return (
        <div className="CUPostEmoji margin-auto brs-8px bg-primary box-shadow-fb">
            <div>
                <CUPostFixHead
                    title={
                        type_ix == 0
                            ? 'How are you feeling?'
                            : 'What are you doing?'
                    }
                    handleBack={handleBackHome}
                />
            </div>

            <div>
                <CUPostEmojiType
                    type_arr={EMOJI_TYPE_ARR}
                    type_ix={type_ix}
                    changeType={setTypeIx}
                />
            </div>

            <div className={`${type_ix == 0 ? '' : 'display-none'}`}>
                <CUPostFeeling
                    emoji_id={emoji_obj.id}
                    type_ix={type_ix}
                    changeFeeling={changeEmoji}
                />
            </div>

            <div className={`${type_ix == 1 ? '' : 'display-none'}`}>
                <CUPostActivity
                    emoji_obj={emoji_obj}
                    changeActivity={changeEmoji}
                />
            </div>
        </div>
    );
}

export default CUPostEmoji;

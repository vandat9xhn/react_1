import React from 'react';
import PropTypes from 'prop-types';
//
import IconFaceGray from '../../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
//
import CUPostChoiceLabelMb from '../../../_components/choice_label/CUPostChoiceLabelMb';

//
CUPostHomeEmojiMb.propTypes = {};

//
function CUPostHomeEmojiMb({ emoji_obj, openEmoji }) {
    //
    return (
        <div className="CUPostHomeEmojiMb">
            <CUPostChoiceLabelMb
                Icon={<IconFaceGray size_icon="18px" stroke="var(--gold)" />}
                title={
                    emoji_obj.id ? (
                        <span>
                            <span className="text-cap">{emoji_obj.type}</span>

                            <span className="margin-left-4px">
                                {emoji_obj.name}
                            </span>
                        </span>
                    ) : (
                        'Feelings/Activities'
                    )
                }
                has_chosen={!!emoji_obj.id}
                handleClick={openEmoji}
            />
        </div>
    );
}

export default CUPostHomeEmojiMb;

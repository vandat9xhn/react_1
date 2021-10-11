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
                    emoji_obj.id
                        ? `${emoji_obj.type} ${emoji_obj.name}`
                        : 'Feelings/Activities'
                }
                handleClick={openEmoji}
            />
        </div>
    );
}

export default CUPostHomeEmojiMb;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_chat } from '../../../../../../../_context/chat/ContextChat';
//
import IconPlusSubtract from '../../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
import IconDraw from '../../../../../../../_icons_svg/icon_draw/IconDraw';
import IconsInput from '../../../../../../../_icons_svg/Icons_input/IconsInput';
import IconFaceGray from '../../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
//
import InputFile from '../../../../../../input/input_file/InputFile';
//
import './ChatMB.scss';

//
function ChatMB({
    has_text,
    more_input,
    moreActionsIp,
    letDrawCanvas,

    handleStartLoadFile,
    handleChooseFiles,
}) {
    //
    const { room_obj, colour_arr } = useContext(context_chat);

    //
    const colour = room_obj.room_active
        ? colour_arr.slice(-1)[0]
        : 'var(--md-bg-ccc)';

    //
    return (
        <div
            className="ChatMB"
            style={{
                color: colour,
            }}
        >
            <div className="ChatMB_row display-flex align-items-center">
                <div>
                    <div
                        className={`ChatMB_toggle display-flex-center brs-50 bg-current cursor-pointer ${
                            more_input ? 'ChatMB_open' : 'ChatMB_close'
                        }`}
                        onClick={moreActionsIp}
                    >
                        <IconPlusSubtract size_icon="1rem" stroke="white" />
                    </div>
                </div>

                <div
                    className={`ChatMB_actions ${
                        more_input || has_text
                            ? 'ChatMB_actions-close'
                            : 'ChatMB_actions-open'
                    }`}
                >
                    <div className="ChatMB_actions-row display-flex">
                        <div>
                            <div
                                className="ChatMB__draw ChatMB__item"
                                onClick={letDrawCanvas}
                                title="Draw something now!"
                            >
                                <IconDraw
                                    size_icon="1.5rem"
                                    bg="currentColor"
                                />
                            </div>
                        </div>

                        <div>
                            <div
                                className="ChatMB__files ChatMB__item"
                                title="Choose your images and videos"
                            >
                                <InputFile
                                    handleStartLoadFile={handleStartLoadFile}
                                    handleChange={handleChooseFiles}
                                    file_multiple={true}
                                    accept="image/*,video/*"
                                    title="Choose images/videos"
                                >
                                    <IconsInput size_icon="1.5rem" />
                                </InputFile>
                            </div>
                        </div>

                        <div>
                            <div
                                className="ChatMB__face-gray ChatMB__item"
                                title="Emoji"
                            >
                                <IconFaceGray
                                    size_icon="1.5rem"
                                    stroke="currentColor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ChatMB.propTypes = {
    has_text: PropTypes.bool,
    more_input: PropTypes.bool,
    moreActionsIp: PropTypes.func,
    letDrawCanvas: PropTypes.func,
};

export default ChatMB;

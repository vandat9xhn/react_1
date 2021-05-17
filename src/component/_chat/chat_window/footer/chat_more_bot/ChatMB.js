import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconDraw from '../../../../../_icons_svg/icon_draw/IconDraw';
import InputFile from '../../../../input/input_file/InputFile';
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
import IconFaceGray from '../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
// 
import './ChatMB.scss';

//
function ChatMB(props) {
    const {
        has_text,
        more_input,
        moreActionsIp,
        letDrawCanvas,
        handleChooseFiles,
    } = props;

    return (
        <div className="ChatMB">
            <div className="ChatMB_row">
                {/* toggle */}
                <div>
                    <div
                        className={`ChatMB_toggle brs-50 cursor-pointer ${
                            more_input ? 'ChatMB_open' : 'ChatMB_close'
                        }`}
                        onClick={moreActionsIp}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                </div>

                {/* actions */}
                <div
                    className={`ChatMB_actions ${
                        more_input || has_text
                            ? 'ChatMB_actions-close'
                            : 'ChatMB_actions-open'
                    }`}
                >
                    <div className="ChatMB_actions-row">
                        <div>
                            <div
                                className="ChatMB__draw ChatMB__item"
                                onClick={letDrawCanvas}
                                title="Draw something now!"
                            >
                                <IconDraw size_icon="1.5rem" />
                            </div>
                        </div>

                        {/* input file */}
                        <div>
                            <div
                                className="ChatMB__files ChatMB__item"
                                title="Choose your images and videos"
                            >
                                <InputFile
                                    onChange={handleChooseFiles}
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
                                <IconFaceGray size_icon="1.5rem" />
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

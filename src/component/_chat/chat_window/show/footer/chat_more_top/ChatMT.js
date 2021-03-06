import React from 'react';
import PropTypes from 'prop-types';
//
import IconDraw from '../../../../../../_icons_svg/icon_draw/IconDraw';
import InputFile from '../../../../../input/input_file/InputFile';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
import IconFaceGray from '../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
//
import './ChatMT.scss';

//
const size_icon = '2rem';

//
ChatMT.propTypes = {
    moreActionsInput: PropTypes.func,
    letDrawCanvas: PropTypes.func,
};

//
function ChatMT({ letDrawCanvas, handleChooseFiles }) {
    //
    return (
        <div className="ChatMT">
            <div className="ChatMT_row">
                <div className="ChatMB_col">
                    <div
                        className="ChatMT__draw ChatMT__item"
                        onClick={letDrawCanvas}
                    >
                        <IconDraw size_icon={size_icon} />
                    </div>
                </div>

                <div className="ChatMB_col">
                    <div className="ChatMT__files ChatMT__item">
                        <InputFile
                            file_multiple={true}
                            accept="image/*,video/*"
                            title="Choose images/videos"
                            handleChange={handleChooseFiles}
                        >
                            <IconsInput size_icon={size_icon} />
                        </InputFile>
                    </div>
                </div>

                <div className="ChatMB_col">
                    <div className="ChatMT__item">
                        <IconFaceGray size_icon={size_icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMT;

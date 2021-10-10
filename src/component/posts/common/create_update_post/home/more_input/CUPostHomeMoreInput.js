import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
import IconFaceGray from '../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
import IconThreeDot from '../../../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import InputFile from '../../../../../input/input_file/InputFile';
//
import './CUPostHomeMoreInput.scss';

//
CUPostHomeMoreInput.propTypes = {};

//
function CUPostHomeMoreInput({
    ref_input_file,

    handleStartLoadFile,
    handleChooseFiles,

    openTagUsers,
    openEmoji,
    openMoreInput,
}) {
    //
    return (
        <div className="CUPostHomeMoreInput padding-x-15px padding-y-4px bg-primary border-blur brs-5px">
            <div className="CUPostHomeMoreInput_row flex-between-center">
                <div className="font-500 cursor-pointer">Add to your post</div>

                <div className="display-flex align-items-center">
                    <div className="CUPostHomeMoreInput_files margin-right-10px">
                        <InputFile
                            accept="image/*, video/*"
                            file_multiple={true}
                            face_circle={false}
                            title="Choose images/videos"
                            handleStartLoadFile={handleStartLoadFile}
                            handleChange={handleChooseFiles}
                        >
                            <div
                                ref={ref_input_file}
                                className="CUPostHomeMoreInput_icon CUPostHomeMoreInput_file"
                            >
                                <IconsInput size_icon="1.5rem" />
                            </div>
                        </InputFile>
                    </div>

                    <div
                        className="CUPostHomeMoreInput_icon CUPostHomeMoreInput_tag"
                        onClick={openTagUsers}
                        title="Tag your friends"
                    >
                        <IconsPost />
                    </div>

                    <div
                        className="CUPostHomeMoreInput_icon CUPostHomeMoreInput_emoji"
                        onClick={openEmoji}
                        title="Emoji"
                    >
                        <IconFaceGray stroke="var(--gold)" />
                    </div>

                    <div
                        className="CUPostHomeMoreInput_icon CUPostHomeMoreInput_more"
                        onClick={openMoreInput}
                        title="More"
                    >
                        <IconThreeDot color="var(--md-color-third)" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeMoreInput;

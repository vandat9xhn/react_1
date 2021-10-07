import React from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
import InputFile from '../../../../../input/input_file/InputFile';
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
//
import './CUPostHomeMoreInput.scss';

//
CUPostHomeMoreInput.propTypes = {};

//
function CUPostHomeMoreInput({
    ref_input_file,

    handleStartLoadFile,
    handleChooseFiles,
}) {
    //

    //
    return (
        <div className="CUPostHomeMoreInput padding-x-15px padding-y-4px bg-primary border-blur brs-5px">
            <div className="CUPostHomeMoreInput_row flex-between-center">
                <div className="font-500 cursor-pointer">Add to your post</div>

                <div className="display-flex align-items-center">
                    <div className="CUPostHomeContent_files margin-right-10px">
                        <InputFile
                            handleStartLoadFile={handleStartLoadFile}
                            handleChange={handleChooseFiles}
                            accept="image/*, video/*"
                            file_multiple={true}
                            title="Choose images/videos"
                        >
                            <div ref={ref_input_file}>
                                <IconsInput size_icon="1.5rem" />
                            </div>
                        </InputFile>
                    </div>

                    <div
                        className="CUPostHomeContent_tag display-flex-center brs-50 cursor-pointer hv-bg-s-through"
                        title="Tag your friends"
                    >
                        <IconsPost />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeMoreInput;

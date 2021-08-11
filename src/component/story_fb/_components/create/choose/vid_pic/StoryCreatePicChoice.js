import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import InputFile from '../../../../../input/input_file/InputFile';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import StoryCreateChoice from '../_common/StoryCreateChoice';
//
import './StoryCreatePicChoice.scss';

//
StoryCreatePicChoice.propTypes = {};

//
function StoryCreatePicChoice({ openScreenStoryPic }) {
    //
    function handleChange(data_files) {
        openScreenStoryPic(data_files);
    }

    //
    return (
        <div className="StoryCreatePicChoice h-100per">
            <InputFile
                name="vid_pic"
                accept="image/*"
                handleChange={handleChange}
            >
                <StoryCreateChoice title="Create a Photo Story">
                    <div>
                        <IconsInput />
                    </div>
                </StoryCreateChoice>
            </InputFile>
        </div>
    );
}

export default StoryCreatePicChoice;

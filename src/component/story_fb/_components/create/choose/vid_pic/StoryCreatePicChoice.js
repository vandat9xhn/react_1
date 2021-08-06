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
        const vid_pic = data_files.vid_pics[0].vid_pic;

        openScreenStoryPic(vid_pic);
    }

    //
    return (
        <div className="StoryCreatePicChoice h-100per">
            <InputFile
                name="vid_pic"
                accept="image/*"
                handleChange={handleChange}
            >
                <StoryCreateChoice title="Create a Picture Story">
                    <div>
                        <IconsInput />
                    </div>
                </StoryCreateChoice>
            </InputFile>
        </div>
    );
}

export default StoryCreatePicChoice;

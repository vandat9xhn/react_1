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
StoryCreatePicChoice.propTypes = {
    title: PropTypes.string,
    openScreenStoryText: PropTypes.func,
};

StoryCreatePicChoice.defaultProps = {
    title: 'Create a Photo Story',
};

//
function StoryCreatePicChoice({ title, openScreenStoryPic }) {
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
                <StoryCreateChoice title={title}>
                    <div>
                        <IconsInput />
                    </div>
                </StoryCreateChoice>
            </InputFile>
        </div>
    );
}

export default StoryCreatePicChoice;

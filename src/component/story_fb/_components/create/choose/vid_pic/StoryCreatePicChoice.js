import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import InputFile from '../../../../../input/input_file/InputFile';
//
import StoryCreateChoice from '../_common/StoryCreateChoice';

//
StoryCreatePicChoice.propTypes = {};

//
function StoryCreatePicChoice(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function handleChange(data_files) {
        const vid_pic = data_files.vid_pics[0].vid_pic;

        openScreenStoryPic({
            openScreenFloor: openScreenFloor,
            vid_pic: vid_pic,
        });
    }

    //
    return (
        <div className="StoryCreatePicChoice">
            <InputFile
                name="vid_pic"
                accept="image/*"
                // handleStartLoadFile
                handleChange={handleChange}
            >
                <StoryCreateChoice title="Create a Picture Story">
                    <div>
                        <span>Aa</span>
                    </div>
                </StoryCreateChoice>
            </InputFile>
        </div>
    );
}

export default StoryCreatePicChoice;

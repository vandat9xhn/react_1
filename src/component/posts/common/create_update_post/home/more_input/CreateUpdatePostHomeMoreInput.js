import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
import InputFile from '../../../../../input/input_file/InputFile';
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
// 
import './CreateUpdatePostHomeMoreInput.scss';

// 
CreateUpdatePostHomeMoreInput.propTypes = {};

// 
function CreateUpdatePostHomeMoreInput(props) {
    const {handleChooseFiles} = props;

    // 
    return (
        <div className="CreateUpdatePostHomeMoreInput">
            <div className="CreateUpdatePostHomeMoreInput_row display-flex align-items-center">
                <div className="CreateUpdatePostHomeContent__files">
                    <InputFile
                        onChange={handleChooseFiles}
                        accept="image/*, video/*"
                        file_multiple={true}
                        title="Choose images/videos"
                    >
                        <IconsInput size_icon="1.5rem" />
                    </InputFile>
                </div>

                <div
                    className="CreateUpdatePostHomeContent__tag"
                    title="Tag your friends"
                >
                    <IconsPost />
                </div>
            </div>
        </div>
    );
}

export default CreateUpdatePostHomeMoreInput;

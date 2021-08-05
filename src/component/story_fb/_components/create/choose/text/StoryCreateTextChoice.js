import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import StoryCreateChoice from '../_common/StoryCreateChoice';
// 
import './StoryCreateTextChoice.scss'

//
StoryCreateTextChoice.propTypes = {};

//
function StoryCreateTextChoice(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function handleOpenCreateText() {
        openScreenStoryText({
            openScreenFloor: openScreenFloor,
        });
    }

    //
    return (
        <div className="StoryCreateTextChoice wh-100" onClick={handleOpenCreateText}>
            <StoryCreateChoice title="Create a Text Story">
                <div>
                    <span className="label-field font-18px">
                        Aa
                    </span>
                </div>
            </StoryCreateChoice>
        </div>
    );
}

export default StoryCreateTextChoice;

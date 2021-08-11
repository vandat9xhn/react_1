import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import StoryTextPicC from '../../../../../../_components/create/story_pic/text/_main/StoryTextPicC';

//
StoryPicBdTextPcC.propTypes = {};

//
function StoryPicBdTextPcC({
    ix,
    text_obj,

    openChangeText,
    handleMove,
    handleResize,
    handleRotate,
    handleDelete,
}) {
    //
    const [show_action, setShowAction] = useState(false);

    //
    function handleMouseEnter() {
        setShowAction(true);
    }

    //
    function handleMouseLeave() {
        setShowAction(false);
    }

    //
    return (
        <div
            className="StoryPicBdTextPcC"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <StoryTextPicC
                ix={ix}
                show_action={show_action}
                text_obj={text_obj}
                //
                openChangeText={openChangeText}
                handleMove={handleMove}
                handleResize={handleResize}
                handleRotate={handleRotate}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default StoryPicBdTextPcC;

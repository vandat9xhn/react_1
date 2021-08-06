import React from 'react';
import PropTypes from 'prop-types';

//
StoryBgItem.propTypes = {};

//
function StoryBgItem({ix, bg, handleChooseBg }) {
    // 
    function onChooseBg() {
        handleChooseBg(ix)
    }

    // 
    return (
        <div onClick={onChooseBg}>
            <img className="brs-50" src={bg} alt="" />
        </div>
    );
}

export default StoryBgItem;

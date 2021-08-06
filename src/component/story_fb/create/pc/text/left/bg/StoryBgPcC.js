import React from 'react';
import PropTypes from 'prop-types';
//
import StoryBgList from '../../../../../_components/create/bg/_main/StoryBgList';

// 
StoryBgPcC.propTypes = {};

// 
function StoryBgPcC({ handleChooseBg }) {
    // 
    return (
        <div className="StoryBgPcC">
            <StoryBgList handleChooseBg={handleChooseBg} />
        </div>
    );
}

export default StoryBgPcC;

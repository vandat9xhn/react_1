import React from 'react';
import PropTypes from 'prop-types';
// 
import BgImgList from '../../../../../../input/bg_img/_main/BgImgList';
//
import './StoryBgPcC.scss';

//
StoryBgPcC.propTypes = {};

//
function StoryBgPcC({ bg_arr, active_ix, handleChooseBg }) {
    //
    return (
        <div className="StoryBgPcC padding-8px brs-8px">
            <BgImgList
                bg_img_arr={bg_arr}
                active_ix={active_ix}
                handleChooseBg={handleChooseBg}
            />
        </div>
    );
}

export default StoryBgPcC;

import React from 'react';
import PropTypes from 'prop-types';
//
import StoryBgList from '../../../../../_components/create/bg/_main/StoryBgList';
//
import './StoryBgPcC.scss';

//
StoryBgPcC.propTypes = {};

//
function StoryBgPcC({ bg_arr, active_ix, handleChooseBg }) {
    //
    return (
        <div className="StoryBgPcC padding-8px brs-8px">
            <StoryBgList
                bg_arr={bg_arr}
                active_ix={active_ix}
                handleChooseBg={handleChooseBg}
            />
        </div>
    );
}

export default StoryBgPcC;

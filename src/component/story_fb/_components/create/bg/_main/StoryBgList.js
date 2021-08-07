import React from 'react';
import PropTypes from 'prop-types';
//
import StoryBgItem from '../item/StoryBgItem';

//
StoryBgList.propTypes = {};

//
function StoryBgList({ active_ix, bg_arr, handleChooseBg }) {
    //
    return (
        <div className="StoryBgList">
            <div className="StoryBgList_row display-flex flex-wrap">
                {bg_arr.map((bg, ix) => (
                    <div key={`${ix}`}>
                        <StoryBgItem
                            ix={ix}
                            is_active={active_ix == ix}
                            bg={bg}
                            handleChooseBg={handleChooseBg}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoryBgList;

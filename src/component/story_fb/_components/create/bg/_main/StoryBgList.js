import React from 'react';
import PropTypes from 'prop-types';
//
import StoryBgItem from '../item/StoryBgItem';

//
StoryBgList.propTypes = {};

//
function StoryBgList({ bg_arr, handleChooseBg }) {
    //
    return (
        <div>
            <div className="display-flex flex-wrap">
                {bg_arr.map((bg, ix) => (
                    <div key={`${ix}`}>
                        <StoryBgItem
                            ix={ix}
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

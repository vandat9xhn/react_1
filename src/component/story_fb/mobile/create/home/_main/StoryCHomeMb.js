import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCHHeadMb from '../head/StoryCHHeadMb';

//
StoryCHomeMb.propTypes = {};

//
function StoryCHomeMb({ openScreenStoryText, openScreenStoryPic }) {
    // 
    return (
        <div>
            <div>
                <StoryCHHeadMb
                    openScreenStoryText={openScreenStoryText}
                    openScreenStoryPic={openScreenStoryPic}
                />
            </div>

            <div></div>
        </div>
    );
}

export default StoryCHomeMb;

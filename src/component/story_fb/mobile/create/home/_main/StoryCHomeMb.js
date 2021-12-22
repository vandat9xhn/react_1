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
        <div className="StoryCHomeMb">
            <h2 className="padding-16px text-align-center font-20px">
                Create story
            </h2>

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

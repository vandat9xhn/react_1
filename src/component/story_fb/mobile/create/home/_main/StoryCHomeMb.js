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
            <h2 className="padding-8px text-align-center">Create story</h2>

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

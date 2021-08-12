import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCreateTextChoice from '../../../../_components/create/choose/text/StoryCreateTextChoice';
import StoryCreatePicChoice from '../../../../_components/create/choose/vid_pic/StoryCreatePicChoice';
//
import './StoryCHHeadMb.scss';

//
StoryCHHeadMb.propTypes = {};

//
function StoryCHHeadMb({ openScreenStoryText, openScreenStoryPic }) {
    //
    return (
        <div className="StoryCHHeadMb">
            <div className="display-flex">
                <div className="StoryCHHeadMb_item padding-4px">
                    <StoryCreateTextChoice
                        openScreenStoryText={openScreenStoryText}
                    />
                </div>

                <div className="StoryCHHeadMb_item padding-4px">
                    <StoryCreatePicChoice
                        openScreenStoryPic={openScreenStoryPic}
                    />
                </div>
            </div>
        </div>
    );
}

export default StoryCHHeadMb;

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
        <div className="StoryCHHeadMb padding-x-8px padding-y-15px">
            <div className="display-flex">
                <div className="StoryCHHeadMb_item pos-rel">
                    <div className="pos-abs-100 padding-4px ">
                        <div className="wh-100 brs-8px overflow-hidden">
                            <StoryCreateTextChoice
                                title="Text"
                                openScreenStoryText={openScreenStoryText}
                            />
                        </div>
                    </div>
                </div>

                <div className="StoryCHHeadMb_item pos-rel">
                    <div className="pos-abs-100 padding-4px">
                        <div className="wh-100 brs-8px overflow-hidden">
                            <StoryCreatePicChoice
                                title="Photo"
                                openScreenStoryPic={openScreenStoryPic}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCHHeadMb;

import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import StoryFace from '../../../../../component/story_fb/_components/face/item/_main/StoryFace';

//
NewFeedStoryList.propTypes = {};

//
function NewFeedStoryList({ feed_story_arr, openScreenStory }) {
    //
    return (
        <div className="display-flex">
            {feed_story_arr
                .slice(0, IS_MOBILE ? undefined : 4)
                .map((item, ix) => (
                    <div
                        key={item.user.id}
                        className="NewFeedStory_item cursor-pointer"
                        onClick={() => openScreenStory(ix)}
                    >
                        <StoryFace
                            user={item.user}
                            count_new={item.count_new}
                            type_story={item.list[0].type_story}
                            vid_pic_obj={item.list[0].vid_pic_obj}
                            text_arr={item.list[0].text_arr}
                        />
                    </div>
                ))}
        </div>
    );
}

export default NewFeedStoryList;

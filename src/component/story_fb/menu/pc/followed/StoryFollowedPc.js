import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../picture_name/pic_name_content/PicNameContent';

//
StoryFollowedPc.propTypes = {};

//
function StoryFollowedPc({ story_user_arr, handleChangeUserStory }) {
    //
    return (
        <div>
            <h2 className="margin-0 font-20px padding-8px">Stories</h2>

            <div>
                <ul className="list-none">
                    {story_user_arr.map((item, ix) => (
                        <li key={`${item.user.id}`}>
                            <div
                                className="padding-4px cursor-pointer hv-bg-blur"
                                onClick={() => handleChangeUserStory(ix)}
                            >
                                <PicNameContent user={item.user} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StoryFollowedPc;

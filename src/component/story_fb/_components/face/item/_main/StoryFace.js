import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import BadgeDiv from '../../../../../some_div/badge_div/BadgeDiv';
//
import StoryFaceContent from '../content/_main/StoryFaceContent';
import StoryFaceUserPic from '../user_pic/StoryFaceUserPic';
import StoryFaceName from '../name/StoryFaceName';
//
import './StoryFace.scss';

//
StoryFace.propTypes = {};

//
function StoryFace({ user, count_new, type_story, vid_pic_obj, text_arr }) {
    //
    const { user: c_user } = useContext(context_api);

    //
    const { id, first_name, last_name, picture } = user;

    //
    return (
        <div className="StoryFace pos-rel h-100per story-active font-13px">
            <div className="StoryFace_content wh-100">
                <StoryFaceContent
                    type_story={type_story}
                    vid_pic_obj={vid_pic_obj}
                    text_arr={text_arr}
                />
            </div>

            <div className="StoryFace_pic pos-abs-0">
                <StoryFaceUserPic count_new={count_new} picture={picture} />
            </div>

            <div className="StoryFace_name pos-abs left-0 bottom-0 w-100per">
                <StoryFaceName
                    name={
                        c_user.id == id
                            ? 'Your story'
                            : first_name + ' ' + last_name
                    }
                />
            </div>

            <div className="story-bg"></div>

            <div className="story-bg-hv"></div>

            <div className="StoryFace_count_new">
                <BadgeDiv num={count_new} />
            </div>
        </div>
    );
}

export default StoryFace;

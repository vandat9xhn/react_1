import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../_hooks/useMakeBodyHidden';
// 
import StoryMenuPartMobile from '../../_components/menu/mobile/_main/StoryMenuPartMobile';
import StoryBtnCreateMb from '../../_components/menu/mobile/btn_create/StoryBtnCreateMb';
//
import './StoryMenuMobile.scss';

//
StoryMenuMobile.propTypes = {};

//
function StoryMenuMobile({
    story_arr_yours,
    story_arr_friends,
    story_arr_followed,
    story_arr_suggested,

    count_story_yours,
    count_story_friend,
    count_story_followed,
    count_story_suggested,

    closeScreen,
}) {
    // 
    useMakeBodyHidden({
            // hidden_scroll: true,
            hidden_app: true,
            hidden_header: true,
        });

    //
    useEffect(() => {
        document.title = 'Story Menu';
    }, []);

    //
    return (
        <div className="bg-primary padding-4px">
            <div className="StoryMenuMobile_create">
                <StoryBtnCreateMb />
            </div>

            <div className="StoryMenuMobile_item">
                <StoryMenuPartMobile
                    story_arr={story_arr_yours}
                    count_story={count_story_yours}
                    story_type="yours"
                    heading="Your stories"
                />
            </div>

            <div className="StoryMenuMobile_item">
                <StoryMenuPartMobile
                    story_arr={story_arr_friends}
                    count_story={count_story_friend}
                    story_type="friends"
                    heading="Friend's stories"
                />
            </div>

            <div className="StoryMenuMobile_item">
                <StoryMenuPartMobile
                    story_arr={story_arr_followed}
                    count_story={count_story_followed}
                    story_type="followed"
                    heading="Followed stories"
                />
            </div>

            <div className="StoryMenuMobile_item">
                <StoryMenuPartMobile
                    story_arr={story_arr_suggested}
                    count_story={count_story_suggested}
                    story_type="suggested"
                    heading="Suggested for you"
                />
            </div>
        </div>
    );
}

export default StoryMenuMobile;

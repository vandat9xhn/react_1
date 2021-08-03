import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import StoryCreate from '../../../../../story_fb/menu/mobile/create/StoryCreate';
import StoryMenuMobile from '../../../../../story_fb/menu/mobile/_main/StoryMenuMobile';
//
import './ScreenStoryMenuMobile.scss';

//
export function openScreenStoryMenuMobile({
    story_arr_yours,
    story_arr_followed,
    story_arr_suggested,

    count_story_followed,
    count_story_yours,
    count_story_suggested,
    openScreenFloor,
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryMenuMobile,

        story_arr_yours: story_arr_yours,
        story_arr_followed: story_arr_followed,
        story_arr_suggested: story_arr_suggested,

        count_story_followed: count_story_followed,
        count_story_yours: count_story_yours,
        count_story_suggested: count_story_suggested,
    });
}

//
ScreenStoryMenuMobile.propTypes = {};

//
function ScreenStoryMenuMobile({
    story_arr_yours,
    story_arr_followed,
    story_arr_suggested,

    count_story_followed,
    count_story_yours,
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
    return (
        <div className="bg-primary">
            <div>
                <div className="ScreenStoryMenuMobile_create margin-auto padding-8px">
                    <StoryCreate />
                </div>

                <div className="ScreenStoryMenuMobile_item">
                    <StoryMenuMobile
                        story_arr={story_arr_yours}
                        count_story={count_story_yours}
                        story_type="yours"
                        heading="Your stories"
                    />
                </div>

                <div className="ScreenStoryMenuMobile_item">
                    <StoryMenuMobile
                        story_arr={story_arr_followed}
                        count_story={count_story_followed}
                        story_type="followed"
                        heading="Followed stories"
                    />
                </div>

                <div className="ScreenStoryMenuMobile_item">
                    <StoryMenuMobile
                        story_arr={story_arr_suggested}
                        count_story={count_story_suggested}
                        story_type="suggested"
                        heading="Suggested for you"
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenStoryMenuMobile;

import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import StoryCreate from '../../../../../story_fb/menu/create/StoryCreate';
import StoryFollowedMobile from '../../../../../story_fb/menu/mobile/followed/StoryFollowedMobile';
import StorySuggestsMobile from '../../../../../story_fb/menu/mobile/suggest/StorySuggestsMobile';
//
import './ScreenStoryMenuMobile.scss';

//
export function openScreenStoryMenuMobile({ openScreenFloor }) {
    openScreenFloor({
        FloorComponent: ScreenStoryMenuMobile,
    });
}

//
ScreenStoryMenuMobile.propTypes = {};

//
function ScreenStoryMenuMobile({ closeScreen }) {
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
                    <StoryFollowedMobile />
                </div>

                <div className="ScreenStoryMenuMobile_item">
                    <StorySuggestsMobile />
                </div>
            </div>
        </div>
    );
}

export default ScreenStoryMenuMobile;

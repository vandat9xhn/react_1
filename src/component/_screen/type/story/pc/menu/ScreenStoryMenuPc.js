import React from 'react';
import PropTypes from 'prop-types';
//
import StoryMenuPc from '../../../../../story_fb/menu/pc/_main/StoryMenuPc';
import StoryCreatePc from '../../../../../story_fb/menu/pc/create/StoryCreatePc';
import StoryMenuPcAction from '../../../../../story_fb/menu/pc/action/StoryMenuPcAction';
//
import './ScreenStoryMenuPc.scss';

//
ScreenStoryMenuPc.propTypes = {};

//
function ScreenStoryMenuPc({
    story_type,
    active_ix,
    is_show_menu,
    has_close,

    story_followed_obj,
    story_your_obj,

    handleChangeUserStory,
    handleChangeYourStory,

    handleClose,
    handleToggleMenu,
}) {
    return (
        <React.Fragment>
            <div
                className={`ScreenStoryMenuPc_action ${
                    is_show_menu
                        ? 'ScreenStoryMenuPc_action-show'
                        : 'ScreenStoryMenuPc_action-hide'
                }`}
            >
                <StoryMenuPcAction
                    is_show={is_show_menu}
                    has_close={has_close}
                    handleClose={handleClose}
                    handleToggle={handleToggleMenu}
                />
            </div>

            <div
                className={`ScreenStoryMenuPc h-100per padding-8px bg-primary ${
                    is_show_menu
                        ? 'ScreenStoryMenuPc_show'
                        : 'ScreenStoryMenuPc_hide'
                }`}
            >
                <h1 className="ScreenStoryMenuPc_head font-22px label-field">Stories</h1>

                <div>
                    <StoryMenuPc
                        heading="Your stories"
                        is_active_type={story_type == 'yours'}
                        active_ix={active_ix}
                        story_menu_obj={story_your_obj}
                        handleChangeStory={handleChangeYourStory}
                    />

                    <StoryCreatePc />
                </div>

                <div>
                    <StoryMenuPc
                        heading="All stories"
                        is_active_type={story_type == 'followed'}
                        active_ix={active_ix}
                        story_menu_obj={story_followed_obj}
                        handleChangeStory={handleChangeUserStory}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ScreenStoryMenuPc;

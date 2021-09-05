import React from 'react';
import PropTypes from 'prop-types';
//
import StoryMenuPartPc from '../../../_components/menu/pc/_main/StoryMenuPartPc';
import StoryMenuPcAction from '../../../_components/menu/pc/action/StoryMenuPcAction';
import StoryBtnCreatePc from '../../../_components/menu/pc/btn_create/StoryBtnCreatePc';
//
import './StoryMenuPc.scss';

//
StoryMenuPc.propTypes = {};

//
function StoryMenuPc({
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
                className={`StoryMenuPc_action ${
                    is_show_menu
                        ? 'StoryMenuPc_action-show'
                        : 'StoryMenuPc_action-hide'
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
                className={`StoryMenuPc h-100per padding-8px bg-primary ${
                    is_show_menu
                        ? 'StoryMenuPc_show'
                        : 'StoryMenuPc_hide'
                }`}
            >
                <h1 className="StoryMenuPc_head font-22px font-500">
                    Stories
                </h1>

                <div>
                    <StoryMenuPartPc
                        heading="Your stories"
                        is_active_type={story_type == 'yours'}
                        active_ix={active_ix}
                        story_menu_obj={story_your_obj}
                        handleChangeStory={handleChangeYourStory}
                    />

                    <StoryBtnCreatePc />
                </div>

                <div>
                    <StoryMenuPartPc
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

export default StoryMenuPc;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import YesNoDiv from '../../../../some_div/yes_no_div/YesNoDiv';
//
import './ActionsGroup.scss';

//
ActionsGroup.propTypes = {};

//
function ActionsGroup({
    chat_ix,
    show_action_group,
    openActionsMess,
    handleToggleActionsGroup,
    handleToggleNotice,
    handleQuitGroup,
}) {
    //
    const [open_quit, setOpenQit] = useState(false);

    //
    function openQuitGroup() {
        setOpenQit(!open_quit);
    }

    //
    function closeQuitGroup() {
        setOpenQit(false);
    }

    /*---------------------------*/ 
    
    //
    function onToggleActionsGroup() {
        open_quit && setOpenQit(false);
        handleToggleActionsGroup(chat_ix);
    }

    //
    function onToggleNotice() {
        handleToggleNotice(chat_ix);
    }

    //
    function onOpenAddFriendToGroup() {
        openActionsMess('add_user', { chat_ix: chat_ix });
    }

    //
    function onOpenTimeLineGroup() {
        openActionsMess('time_line', { chat_ix: chat_ix });
    }

    //
    return (
        <div className="ActionsGroup position-rel">
            <div className="ActionsGroup_row-icon display-flex">
                <div
                    className={`ActionsGroup_icon brs-50 close-icon-small hv-opacity cursor-pointer ${
                        show_action_group
                            ? 'ActionsGroup_icon-show'
                            : 'ActionsGroup_icon-close'
                    }`}
                    onClick={onToggleActionsGroup}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>

            <div
                className={`ActionsGroup_contain box-shadow-1 ${
                    !show_action_group || open_quit
                        ? 'ActionsGroup_close'
                        : 'ActionsGroup_show scroll-y-none'
                }`}
            >
                {[
                    { title: 'Time line', handleClick: onOpenTimeLineGroup },
                    {
                        title: 'Add friend',
                        handleClick: onOpenAddFriendToGroup,
                    },
                    { title: 'Receive notice', handleClick: onToggleNotice },
                    { title: 'Quit group', handleClick: openQuitGroup },
                ].map((item, ix) => (
                    <div
                        key={`${ix}`}
                        className="ActionsGroup__choice"
                        onClick={item.handleClick}
                    >
                        {item.title}
                    </div>
                ))}
            </div>

            <div
                className={`ActionsGroup__quit-confirm brs-5px box-shadow-1 ${
                    open_quit
                        ? 'ActionsGroup__quit-confirm-open'
                        : 'ActionsGroup__quit-confirm-close'
                }`}
            >
                <div>Do you want to quit this group?</div>

                <YesNoDiv
                    handleYes={handleQuitGroup}
                    handleNo={closeQuitGroup}
                />
            </div>
        </div>
    );
}

export default ActionsGroup;

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
    show_action_group,
    openTimeLineGroup,
    handleToggleActionsGroup,
    openAddFriendToGroup,
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

    //
    function onToggleActionsGroup() {
        open_quit && setOpenQit(false);
        handleToggleActionsGroup();
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
                <div
                    className="ActionsGroup__choice"
                    onClick={openTimeLineGroup}
                >
                    Time line
                </div>

                <div
                    className="ActionsGroup__choice"
                    onClick={openAddFriendToGroup}
                >
                    Add friend
                </div>

                <div
                    className="ActionsGroup__choice"
                    onClick={handleToggleNotice}
                >
                    Receive notice
                </div>

                <div className="ActionsGroup__choice" onClick={openQuitGroup}>
                    Quit group
                </div>
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

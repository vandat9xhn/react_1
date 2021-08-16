import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryMenuPcAction.scss';

//
StoryMenuPcAction.propTypes = {};

//
function StoryMenuPcAction({ is_show, has_close, handleClose, handleToggle }) {
    //
    return (
        <div className="pos-rel">
            <div className="display-flex align-items-center">
                {has_close ? (
                    <div className="StoryMenuPcAction_close">
                        <div
                            className="StoryMenuPcAction_close_contain cursor-pointer"
                            onClick={handleClose}
                            title="Close stories"
                        >
                            <IconsArrow y={400} />
                        </div>
                    </div>
                ) : null}

                <div className="StoryMenuPcAction_toggle">
                    <div
                        className={`StoryMenuPcAction_toggle_contain display-flex-center cursor-pointer ${
                            is_show
                                ? 'StoryMenuPcAction_toggle_contain-show'
                                : 'StoryMenuPcAction_toggle_contain-hide'
                        }`}
                        onClick={handleToggle}
                        title={is_show ? 'Hide menu' : 'Show menu'}
                    >
                        <IconsArrow y={200} size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryMenuPcAction;

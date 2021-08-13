import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';

//
StoryBtnShareMb.propTypes = {};

//
function StoryBtnShareMb({ can_share, handleCreateStory }) {
    //
    return (
        <div
            className={`StoryBtnShareMb brs-5px cursor-pointer ${
                can_share ? 'bg-blue' : 'bg-always-white pointer-events-none'
            }`}
            onClick={handleCreateStory}
        >
            <div className="display-flex align-items-center">
                <div className="padding-4px">
                    <span
                        className={`label-field ${
                            can_share ? 'text-white' : 'text-secondary'
                        }`}
                    >
                        Share story
                    </span>
                </div>

                <div className="padding-4px">
                    <IconsAction x={200} y={200} />
                </div>
            </div>
        </div>
    );
}

export default StoryBtnShareMb;

import React from 'react';
import PropTypes from 'prop-types';
// 
import UnitTime from '../../../../_some_function/UnitTime';
// 
import PictureName from '../../../picture_name/pic_name/PictureName';
// 
import StoryStep from '../step/StoryStep';
// 
import './StoryItemHead.scss'

// 
StoryItemHead.propTypes = {};

// 
function StoryItemHead({count, active_step, user, created_time}) {
    // 
    return (
        <div className="StoryItemHead padding-8px">
            {count > 1 ? (
                <div className="StoryItemHead_step">
                    <StoryStep count_step={count} active_step={active_step} />
                </div>
            ) : null}

            <div className="StoryItemHead_user width-fit-content">
                <PictureName
                    user={user}
                    content={
                        <span className="font-12px margin-left-5px">
                            {UnitTime(
                                new Date().getTime() -
                                    new Date(created_time).getTime()
                            )}
                        </span>
                    }
                    is_inline_block={true}
                />
            </div>
        </div>
    );
}

export default StoryItemHead;

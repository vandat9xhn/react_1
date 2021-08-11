import React from 'react';
import PropTypes from 'prop-types';
// 
import UnitTime from '../../../../../../../_some_function/UnitTime';
// 
import PictureName from '../../../../../../picture_name/pic_name/PictureName';
import StepRow from '../../../../../../some_div/step_row/StepRow';
// 
import './StoryContentHead.scss'

// 
StoryContentHead.propTypes = {};

// 
function StoryContentHead({count, active_step, user, created_time}) {
    // 
    return (
        <div className="StoryContentHead padding-8px">
            {count > 1 ? (
                <div className="StoryContentHead_step">
                    <StepRow count_step={count} active_step={active_step} />
                </div>
            ) : null}

            <div className="StoryContentHead_user width-fit-content">
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

export default StoryContentHead;

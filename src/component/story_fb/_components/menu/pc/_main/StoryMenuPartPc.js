import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
//
import './StoryMenuPartPc.scss';
import UnitTime from '../../../../../../_some_function/UnitTime';

//
StoryMenuPartPc.propTypes = {};

//
function StoryMenuPartPc({
    heading,
    story_menu_obj,
    is_active_type,
    active_ix,

    handleChangeStory,
}) {
    //
    const { has_fetched, story_arr } = story_menu_obj;

    //
    return (
        <div className="StoryMenuPartPc">
            <h2 className="margin-0 font-20px padding-10px">{heading}</h2>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                {story_arr.map((item, ix) => (
                    <div
                        key={item.user.id}
                        className={`padding-5px brs-6px ${
                            is_active_type && active_ix == ix
                                ? 'bg-fb-active pointer-events-none'
                                : 'hv-bg-blur cursor-pointer'
                        }`}
                        onClick={() => handleChangeStory(ix)}
                    >
                        <PicNameContent
                            user={item.user}
                            content={
                                <span className="line-14px font-12px text-third">
                                    {UnitTime(
                                        new Date().getTime() -
                                            new Date(
                                                item.list.slice(
                                                    -1
                                                )[0].created_time
                                            )
                                    )}
                                </span>
                            }
                        />
                    </div>
                ))}
            </div>

            {!has_fetched ? (
                <div className="StoryMenuPartPc_not_fetched"></div>
            ) : null}
        </div>
    );
}

export default StoryMenuPartPc;

import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../picture_name/pic_name_content/PicNameContent';
//
import './StoryMenuPc.scss';

//
StoryMenuPc.propTypes = {};

//
function StoryMenuPc({
    heading,
    is_active_type,
    active_ix,
    story_menu_obj,
    handleChangeStory,
}) {
    //
    const { has_fetched, story_arr } = story_menu_obj;

    //
    return (
        <div>
            <h2 className="margin-0 font-20px padding-8px">{heading}</h2>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <ul className="list-none">
                    {story_arr.map((item, ix) => (
                        <li key={`${item.user.id}`}>
                            <div
                                className={`padding-4px ${
                                    is_active_type && active_ix == ix
                                        ? 'bg-active-fb pointer-events-none'
                                        : 'hv-bg-blur cursor-pointer'
                                }`}
                                onClick={() => handleChangeStory(ix)}
                            >
                                <PicNameContent user={item.user} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`${
                    has_fetched ? 'display-none' : 'StoryFollowedPc_not_fetched'
                }`}
            ></div>
        </div>
    );
}

export default StoryMenuPc;

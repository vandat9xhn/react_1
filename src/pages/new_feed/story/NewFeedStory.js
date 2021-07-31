import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import { initial_user } from '../../../_initial/user/initialUser';
//
import { handle_API_FeedStory } from '../../../_handle_api/feed/HandleAPIStory';
// 
import { useScrollToX } from '../../../_hooks/useScrollToX';
// 
import NextPrevDiv from '../../../component/some_div/next_prev_div/NextPrevDiv';
// 
import StoryFace from '../../../component/story_fb/face/_main/StoryFace';
import StoryFaceCreate from '../../../component/story_fb/face/create/_main/StoryFaceCreate';
//
import './NewFeedStory.scss';

//
NewFeedStory.propTypes = {};

//
function NewFeedStory(props) {
    //
    const [state_obj, setStateObj] = useState({
        story_arr: [] || [
            {
                id: 0,
                vid_pic: '',
                user: initial_user(),
            },
        ],
        has_fetched: false,
    });

    const { story_arr, has_fetched } = state_obj;

    //
    const ref_story_elm = useRef(null);

    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_story_elm);

    //
    useEffect(() => {
        getData_Story();
    }, []);

    //
    async function getData_Story() {
        const { data, count } = await handle_API_FeedStory(story_arr.length);

        setStateObj({
            story_arr: [...story_arr, ...data],
        });

        hasNextPrev()
    }

    //
    return (
        <div className="NewFeedStory position-rel">
            <div
                ref={ref_story_elm}
                className="NewFeedStory_contain padding-8px"
            >
                <div className="NewFeedStory_row display-flex flex-nowrap">
                    <div className="NewFeedStory_item cursor-pointer">
                        <Link
                            to={`/stories?type=create`}
                            className="normal-text"
                        >
                            <StoryFaceCreate />
                        </Link>
                    </div>

                    {story_arr.map((item) => (
                        <div key={item.user.id} className="NewFeedStory_item">
                            <Link
                                to={`/stories?id=${item.id}`}
                                className="normal-text"
                            >
                                <StoryFace
                                    id={item.id}
                                    vid_pic={item.vid_pic}
                                    user={item.user}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                {IS_MOBILE ? null : (
                    <NextPrevDiv
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}

export default NewFeedStory;

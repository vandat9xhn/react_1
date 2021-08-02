import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { initial_user } from '../../../../../_initial/user/initialUser';
//
import { handle_API_FeedStory_L } from '../../../../../_handle_api/feed/HandleAPIStory';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import IconUpdate from '../../../../../_icons_svg/icon_update/IconUpdate';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import StoryFace from '../../../../../component/story_fb/face/item/_main/StoryFace';
import StoryFaceCreate from '../../../../../component/story_fb/face/create/_main/StoryFaceCreate';
import NewFeedStorySeeAllMobile from '../see_all/mobile/NewFeedStorySeeAllMobile';
import NewFeedStorySeeAllPc from '../see_all/pc/NewFeedStorySeeAllPc';
//
import './NewFeedStory.scss';
import { initial_story_obj } from '../../../../../_initial/story/InitialStory';

//
NewFeedStory.propTypes = {};

//
function NewFeedStory(props) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [] || [initial_story_obj()],
        handle_API_L: handle_API_FeedStory_L,
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleScroll(e) {
        if (count <= data_arr.length) {
            return;
        }

        if (
            e.target.scrollLeft ==
            e.target.scrollWidth - e.target.clientWidth
        ) {
            handleShowMore();
        }
    }

    //
    return (
        <VirtualScroll>
            <div className="NewFeedStory position-rel padding-8px brs-8px-md">
                <div
                    className="NewFeedStory_contain"
                    onScroll={IS_MOBILE ? handleScroll : undefined}
                >
                    <div className="NewFeedStory_row display-flex flex-nowrap">
                        <div className="NewFeedStory_item cursor-pointer">
                            <Link to={`/story/create`} className="normal-text">
                                <StoryFaceCreate />
                            </Link>
                        </div>

                        {data_arr.map((item) => (
                            <div
                                key={item.user.id}
                                className="NewFeedStory_item"
                            >
                                <Link
                                    to={`/stories?id=${item.id}`}
                                    className="normal-text"
                                >
                                    <StoryFace
                                        count_new={item.count_new}
                                        user={item.user}
                                        vid_pic={item.list[0].vid_pic}
                                        text={item.list[0].text}
                                        top_text={item.list[0].top_text}
                                        left_text={item.list[0].left_text}
                                        color_text_ix={
                                            item.list[0].color_text_ix
                                        }
                                        scale_text={item.list[0].scale_text}
                                    />
                                </Link>
                            </div>
                        ))}

                        <div
                            className={`NewFeedStory_fetching ${
                                is_fetching ? '' : 'display-none'
                            }`}
                        >
                            <div className="display-flex-center h-100per">
                                <div
                                    className={`NewFeedStory_fetching-contain padding-8px ${
                                        is_fetching
                                            ? 'NewFeedStory_fetching-active'
                                            : ''
                                    }`}
                                >
                                    <IconUpdate stroke="var(--blue)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {IS_MOBILE ? (
                    (count <= data_arr.length || data_arr.length > 6) &&
                    has_fetched ? (
                        <div className="NewFeedStory_all-mobile">
                            <NewFeedStorySeeAllMobile />
                        </div>
                    ) : null
                ) : (
                    <div
                        className={`NewFeedStory_all-pc ${
                            data_arr.length < 4 ? 'display-none' : ''
                        }`}
                    >
                        <NewFeedStorySeeAllPc />
                    </div>
                )}
            </div>
        </VirtualScroll>
    );
}

export default NewFeedStory;

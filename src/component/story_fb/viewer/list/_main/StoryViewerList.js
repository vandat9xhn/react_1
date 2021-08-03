import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import StoryViewerItem from '../item/StoryViewerItem';
//
import './StoryViewerList.scss';

//
StoryViewerList.propTypes = {};

//
function StoryViewerList({
    viewer_arr,
    count_friend_view,
    is_fetching,

    handleShowMore,
    handleCloseFriendViewer,
}) {
    //
    return (
        <div className="StoryViewerList position-rel h-100per overflow-y-auto bg-primary brs-8px">
            <div className="StoryViewerList_hide">
                <div
                    className="cursor-pointer"
                    onClick={handleCloseFriendViewer}
                >
                    <IconsArrow y={400} />
                </div>
            </div>

            <div>
                <ul className="list-none">
                    {viewer_arr.map((item) => (
                        <li key={`${item.id}`}>
                            <StoryViewerItem
                                user={item.user}
                                type_like_arr={item.type_like_arr}
                                has_reply={item.has_reply}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ScreenBlurShowMore
                    is_show_more={count_friend_view > viewer_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default StoryViewerList;

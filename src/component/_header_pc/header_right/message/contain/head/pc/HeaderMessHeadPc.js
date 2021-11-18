import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseDragScrollToX } from '../../../../../../../_hooks/useMouseDragScrollToX';
//
import NextPrevDiv from '../../../../../../some_div/next_prev_div/NextPrevDiv';
import MessageFriend from '../friend/HeaderMessFriend';
//
import './HeaderMessHeadPc.scss';

//
HeaderMessHeadPc.propTypes = {};

//
function HeaderMessHeadPc({
    ref_head_elm,
    ref_fake_elm_end,
    friend_arr,
    has_fetched,
    closeZoom,
}) {
    //
    const {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        is_mouse_down,

        handleScroll,

        is_has_next,
        is_has_prev,
        handleNext,
        handlePrev,
        hasNextPrev,
    } = useMouseDragScrollToX(ref_head_elm);

    //
    useEffect(() => {
        friend_arr.length > 0 && hasNextPrev();
    }, [friend_arr.length]);

    //
    return (
        <div className="HeaderMessHeadPc pos-rel">
            <div
                className={`${
                    has_fetched
                        ? 'HeaderMessHeadPc_contain max-w-100per overflow-x-auto scroll-height-0'
                        : 'display-none'
                }`}
                ref={ref_head_elm}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                //
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
            >
                <div className="display-flex align-items-center">
                    {friend_arr.map((friend, ix) => (
                        <div key={`ListMessages_friend_${ix}`}>
                            <MessageFriend
                                is_mouse_down={is_mouse_down}
                                friend_id={friend.id}
                                picture={friend.picture}
                                last_name={friend.last_name}
                                closeZoom={closeZoom}
                            />
                        </div>
                    ))}

                    <div ref={ref_fake_elm_end} className="padding-4px"></div>
                </div>
            </div>

            <div className="text-third">
                <NextPrevDiv
                    is_btn_circle={true}
                    is_has_next={is_has_next}
                    is_has_prev={is_has_prev}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
        </div>
    );
}

export default HeaderMessHeadPc;

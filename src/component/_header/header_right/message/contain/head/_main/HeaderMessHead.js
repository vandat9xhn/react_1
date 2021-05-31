import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseDragScrollToX } from '../../../../../../../_custom_hooks/useMouseDragScrollToX';
//
import NextPrevDiv from '../../../../../../some_div/next_prev_div/NextPrevDiv';
//
import MessageFriend from '../friend/HeaderMessFriend';
//
import './HeaderMessHead.scss';

//
HeaderMessHead.propTypes = {
    friend_arr: PropTypes.array,
    closeMessage: PropTypes.func,
};

//
function HeaderMessHead({ friend_arr, closeMessage }) {
    //
    const ref_list_friend = useRef(null);

    //
    const {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        is_mouse_down,

        is_has_next,
        is_has_prev,
        handleNext,
        handlePrev,
    } = useMouseDragScrollToX(ref_list_friend.current);

    //
    return (
        <div className="position-rel">
            <div
                className="HeaderMessHead"
                ref={ref_list_friend}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div className="display-flex align-items-center">
                    {friend_arr.map((friend, ix) => (
                        <div key={`ListMessages_friend_${ix}`}>
                            <MessageFriend
                                is_mouse_down={is_mouse_down}
                                friend_id={friend.id}
                                picture={friend.picture}
                                last_name={friend.last_name}
                                closeMessage={closeMessage}
                            />
                        </div>
                    ))}
                </div>

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

export default HeaderMessHead;

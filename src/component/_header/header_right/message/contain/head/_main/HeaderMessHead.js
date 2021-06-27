import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_Friends_LC } from '../../../../../../../api/api_django/user/user_friend/UserFriend';
//
import { useMouseDragScrollToX } from '../../../../../../../_hooks/useMouseDragScrollToX';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import NextPrevDiv from '../../../../../../some_div/next_prev_div/NextPrevDiv';
//
import white_person from '../../../../../../../../image/white_person.svg';
import './HeaderMessHead.scss';
//
import MessageFriend from '../friend/HeaderMessFriend';
import ComponentSkeleton from '../../../../../../skeleton/component_skeleton/ComponentSkeleton';

//
HeaderMessHead.propTypes = {
    closeZoom: PropTypes.func,
};

//
function HeaderMessHead({ closeZoom }) {
    //
    const [friend_state, setFriendState] = useState({
        friend_arr: [],
        has_fetched: false,
    });

    const { friend_arr, has_fetched } = friend_state;

    //
    const ref_list_friend = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_list_friend.current, getData_API_Friend_L, 0);
    }, []);

    //
    async function getData_API_Friend_L() {
        const res = await API_Friends_LC('GET', {});

        const new_friend_arr = res.data.map((item) => item.friend);

        setFriendState({
            friend_arr: new_friend_arr,
            has_fetched: true,
        });
    }

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
    } = useMouseDragScrollToX(ref_list_friend.current);

    //
    return (
        <div className="position-rel">
            <div
                className="HeaderMessHead"
                ref={ref_list_friend}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                //
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
            >
                <div className={`${has_fetched ? '' : 'display-none'}`}>
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
                    </div>

                    <NextPrevDiv
                        is_btn_circle={true}
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>

                <div>
                    <ComponentSkeleton
                        component={
                            <MessageFriend
                                is_mouse_down={true}
                                friend_id={0}
                                picture={white_person}
                                last_name=""
                                closeZoom={closeZoom}
                            />
                        }
                        has_fetched={has_fetched}
                        num={4}
                        skeleton_class="display-flex align-items-center"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderMessHead;

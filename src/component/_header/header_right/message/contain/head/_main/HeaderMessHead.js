import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_Friend_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useScrollRightShowMore } from '../../../../../../../_hooks/useScrollRightShowMore';
//
import ComponentSkeleton from '../../../../../../skeleton/component_skeleton/ComponentSkeleton';
//
import MessageFriend from '../friend/HeaderMessFriend';
import HeaderMessHeadPc from '../pc/HeaderMessHeadPc';
import HeaderMessHeadMobile from '../mobile/HeaderMessHeadMobile';
//
import white_person from '../../../../../../../../image/white_person.svg';
import './HeaderMessHead.scss';
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';

//
HeaderMessHead.propTypes = {
    closeZoom: PropTypes.func,
};

//
function HeaderMessHead({ closeZoom }) {
    //
    const ref_head_elm = useRef(null);
    const ref_main_elm = useRef(null);
    const ref_fake_elm_end = useRef(null);

    //
    const { data_state, observerShowMore, getData_API } = useObserverShowMore({
        // ref_fake_elm_end: ref_fake_elm_end,
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Friend_L({
                c_count: c_count,
                params: {
                    type: 'recently',
                    size: 10,
                },
            }),
        // options_observer: {
        //     root: ref_head_elm,
        //     rootMargin: '0px 0px 0px 500px',
        // }
    });

    // //
    // const { data_state, getData_API } = useScrollRightShowMore({
    //     ref_elm: ref_head_elm,
    //     initial_arr: [],
    //     handle_API_L: (c_count) =>
    //         handle_API_Friend_L({
    //             c_count: c_count,
    //             params: {
    //                 type: 'recently',
    //                 size: 10,
    //             },
    //         }),
    // });

    const { data_arr, count, has_fetched } = data_state;

    // //
    useEffect(() => {
        observeToDo(
            ref_main_elm.current,
            () => {
                observerShowMore({
                    elm: ref_fake_elm_end.current,
                    options_observer: {
                        root: ref_main_elm.current,
                        rootMargin: '500px',
                    },
                });

                getData_API()
            },
            0
        );
        // observerShowMore()
    }, []);

    //
    return (
        <div ref={ref_main_elm}>
            {/* <div className="display-flex"> */}
            {IS_MOBILE ? (
                <HeaderMessHeadMobile
                    ref_head_elm={ref_head_elm}
                    friend_arr={data_arr}
                    has_fetched={has_fetched}
                    closeZoom={closeZoom}
                />
            ) : (
                <HeaderMessHeadPc
                    ref_head_elm={ref_head_elm}
                    ref_fake_elm_end={ref_fake_elm_end}
                    friend_arr={data_arr}
                    has_fetched={has_fetched}
                    closeZoom={closeZoom}
                />
            )}

            <ComponentSkeleton
                component={
                    <MessageFriend
                        is_mouse_down={true}
                        friend_id={4}
                        picture={white_person}
                        last_name=""
                        closeZoom={closeZoom}
                    />
                }
                has_fetched={has_fetched}
                num={1}
                skeleton_class="display-flex align-items-center"
            />

            {/* <div className="padding-4px" ref={ref_fake_elm_end}></div> */}
            {/* </div> */}
        </div>
    );
}

export default HeaderMessHead;

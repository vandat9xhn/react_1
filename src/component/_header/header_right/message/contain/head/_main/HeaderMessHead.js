import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_Friend_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useDataShowMore } from '../../../../../../../_hooks/useDataShowMore';
// 
import ComponentSkeleton from '../../../../../../skeleton/component_skeleton/ComponentSkeleton';
//
import MessageFriend from '../friend/HeaderMessFriend';
import HeaderMessHeadPc from '../pc/HeaderMessHeadPc';
import HeaderMessHeadMobile from '../mobile/HeaderMessHeadMobile';
//
import white_person from '../../../../../../../../image/white_person.svg';
import './HeaderMessHead.scss';

//
HeaderMessHead.propTypes = {
    closeZoom: PropTypes.func,
};

//
function HeaderMessHead({ closeZoom }) {
    // 
    const {data_state, getData_API} = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) => handle_API_Friend_L({
            c_count: c_count,
            params: {
                type: 'recently',
                size: 10,
            }
        }),
    })

    const { data_arr, has_fetched } = data_state;

    //
    const ref_head_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_head_elm.current, getData_API, 0, false, '');
    }, []);

    //
    return (
        <div ref={ref_head_elm}>
            {IS_MOBILE ? (
                <HeaderMessHeadMobile
                    friend_arr={data_arr}
                    has_fetched={has_fetched}
                    closeZoom={closeZoom}
                />
            ) : (
                <HeaderMessHeadPc
                    friend_arr={data_arr}
                    has_fetched={has_fetched}
                    closeZoom={closeZoom}
                />
            )}

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
    );
}

export default HeaderMessHead;

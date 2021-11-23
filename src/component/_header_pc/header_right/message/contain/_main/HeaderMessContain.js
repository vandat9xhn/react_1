import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { API_Zoom_U } from '../../../../../../api/api_django/chat/APIChat';
import { handle_API_Zoom_L } from '../../../../../../_handle_api/message/room_list';
//
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import ComponentSkeleton from '../../../../../skeleton/component_skeleton/ComponentSkeleton';
import SkeletonPicContent from '../../../../../skeleton/some_skeleton/pic_content/SkeletonPicContent';
//
import MessageFriendHead from '../head/_main/HeaderMessHead';
import HeaderMessItem from '../body/item/_main/HeaderMessItem';
import HeaderMessTitle from '../title/HeaderMessTitle';
//
import './HeaderMessContain.scss';

//
HeaderMessContain.propTypes = {
    ref_scroll_elm: PropTypes.shape({
        current: PropTypes.any,
    }),
    closeZoom: PropTypes.func,
};

HeaderMessContain.defaultProps = {
    closeZoom: () => {},
};

//
function HeaderMessContain({ ref_scroll_elm, closeZoom }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);

    //
    const { data_state, setDataState, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            handle_API_L: (c_count) => handle_API_Zoom_L({ c_count: c_count }),
        });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_API();

                observerShowMore({
                    fake_elm_end: ref_fake_elm.current,
                    root: ref_scroll_elm.current,
                    way_scroll: 'to_bottom',
                    margin: 0,
                });
            },
        });
    }, []);

    // ------

    //
    async function handleClickZoomItem(ix) {
        openRoomChat(data_arr[ix].room_chat, false);

        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[ix].count_new_mess = 0;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });

        closeZoom();

        await API_Zoom_U(data_arr[ix].room_chat);
    }

    //
    function handleAction({ action_name = '', ix }) {
        console.log(action_name, ix);
    }

    //
    return (
        <div ref={ref_main_elm} className="HeaderMessContain">
            <div className="HeaderMessContain_title">
                <HeaderMessTitle />
            </div>

            <div className="HeaderMessContain_friend">
                <MessageFriendHead closeZoom={closeZoom} />
            </div>

            <div>
                {data_arr.map((zoom_item, ix) => (
                    <HeaderMessItem
                        key={ix}
                        ref_scroll_elm={ref_scroll_elm}
                        ix={ix}
                        //
                        id={zoom_item.room_chat}
                        user={zoom_item.messages[0].user}
                        message={zoom_item.messages[0].message}
                        count_new={zoom_item.count_new_mess}
                        updated_time={zoom_item.updated_time}
                        //
                        handleClickItem={handleClickZoomItem}
                        handleAction={handleAction}
                    />
                ))}
            </div>

            <div ref={ref_fake_elm} className="padding-1px"></div>

            <div className="padding-8px">
                <ComponentSkeleton
                    component={<SkeletonPicContent size_pic={IS_MOBILE ? 48 : 56} />}
                    has_fetched={is_max.current}
                    num={2}
                    skeleton_class=""
                />
            </div>
        </div>
    );
}

export default HeaderMessContain;

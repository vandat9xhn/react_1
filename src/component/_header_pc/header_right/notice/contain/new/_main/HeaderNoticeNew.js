import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { API_Notice_U } from '../../../../../../../api/api_django/header/APIHeaderToken';
import { handle_API_FbNotice_L } from '../../../../../../../_handle_api/fb_notice/list';
//
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';
//
import ComponentSkeleton from '../../../../../../skeleton/component_skeleton/ComponentSkeleton';
import SkeletonPicContent from '../../../../../../skeleton/some_skeleton/pic_content/SkeletonPicContent';
//
import HeaderNoticeList from '../../../list/_main/HeaderNoticeList';

//
HeaderNoticeNew.propTypes = {};

//
function HeaderNoticeNew({ ref_scroll_elm, all_read, handleGetNoticeNewDone }) {
    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);

    //
    const {
        data_state,
        setDataState,

        is_max,
        data_count,

        getData_API,
        observerShowMore,
    } = useObserverShowMore({
        handle_API_L: (c_count) =>
            handle_API_FbNotice_L({ c_count: c_count, type: 'new' }),
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

    //
    useEffect(() => {
        if (is_max.current) {
            handleGetNoticeNewDone();
        }
    }, [is_max.current]);

    //
    useEffect(() => {
        all_read && markAllAsRead();
    }, [all_read]);

    // ------

    //
    async function markAllAsRead() {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr.forEach((item) => {
                item.status_seen = 'read';
            });

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });

        await API_Notice_U();
    }

    // ------

    //
    async function handleClickItem(ix) {
        data_arr[ix].status_seen = 'read';

        await API_Notice_U(data_arr[ix].id);
    }

    //
    function handleAction({ action_name, ix }) {
        if (action_name == 'read') {
            setDataState((data_state) => {
                const new_data_arr = [...data_state.data_arr];
                new_data_arr[ix].status_seen = 'read';

                return {
                    ...data_state,
                    data_arr: new_data_arr,
                };
            });
        }
    }

    // ------

    //
    if (is_max.current && data_count.current == 0) {
        return null;
    }

    //
    return (
        <div ref={ref_main_elm} className="HeaderNoticeNew">
            <HeaderNoticeList
                ref_scroll_elm={ref_scroll_elm}
                notices={data_arr}
                title="New"
                link_to_all={
                    location.pathname.startsWith('/fb-notice')
                        ? ''
                        : '/fb-notice'
                }
                //
                handleClickItem={handleClickItem}
                handleAction={handleAction}
            />

            <div ref={ref_fake_elm} className="padding-1px"></div>

            <div className="padding-8px">
                <ComponentSkeleton
                    component={
                        <SkeletonPicContent size_pic={IS_MOBILE ? 48 : 56} />
                    }
                    has_fetched={is_max.current}
                    num={2}
                    skeleton_class=""
                />
            </div>
        </div>
    );
}

export default HeaderNoticeNew;

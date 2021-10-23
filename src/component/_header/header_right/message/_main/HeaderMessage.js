import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { usePosFollowBodyOrElm } from '../../../../../_hooks/usePosFollowBodyOrElm';
//
import { API_ZoomCountNew_R } from '../../../../../api/api_django/header/APIHeaderToken';
import {
    API_Zoom_L,
    API_Zoom_U,
} from '../../../../../api/api_django/chat/APIChat';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import HeaderMessContain from '../contain/_main/HeaderMessContain';
import HeaderMessageIcon from '../icon/HeaderMessageIcon';
//
import './HeaderMessage.scss';
//

//
HeaderMessage.propTypes = {};

//
function HeaderMessage() {
    //
    const { openRoomChat } = useContext(context_api);
    //
    const [zoom_state, setZoomState] = useState({
        zooms: [],
        count: 0,
        count_new: 0,

        is_fetching: false,
        has_fetched: false,
    });

    const {
        zooms,
        count,
        count_new,

        is_fetching,
        has_fetched,
    } = zoom_state;

    //
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);

    //
    const {
        ref_is_open,
        ref_pos,

        handleOpen,
        handleClose,
    } = usePosFollowBodyOrElm({
        // scroll_elm = html_elm,
        ref_base_elm: ref_btn_elm,
        getChildWidth: getChildWidth,

        is_at_body: false,
        use_scroll: false,
        use_resize: true,
    });

    const { left_or_right, position_x, transform_x } = ref_pos.current;

    //
    useEffect(() => {
        getData_API_CountNewZoom();
    }, []);

    // ------- API

    //
    async function getData_API_CountNewZoom() {
        const res = await API_ZoomCountNew_R({});

        setZoomState((zoom_state) => ({
            ...zoom_state,
            count_new: res.data,
        }));
    }

    //
    async function getData_API_Zoom(start_obj_state = {}) {
        setZoomState((zoom_state) => ({
            ...zoom_state,
            ...start_obj_state,
            is_fetching: true,
        }));

        const res = await API_Zoom_L({
            page: 1,
            size: 10,
            c_count: zooms.length,
        });

        const { data, count: new_count } = res.data;

        setZoomState((zoom_state) => ({
            ...zoom_state,
            zooms: zoom_state.has_fetched
                ? [...zoom_state.zooms, ...data]
                : data,
            count_new: 0,
            count: zoom_state.has_fetched ? count : new_count,
            is_fetching: false,
            has_fetched: true,
        }));
    }

    // ---------

    //
    function getChildWidth() {
        return ref_child_elm.current.getBoundingClientRect().width;
    }

    //
    function closeZoom() {
        ref_is_open.current && handleClose({});
    }

    //
    function toggleOpenZoom() {
        if (ref_is_open.current) {
            closeZoom();

            return;
        }

        if (!has_fetched) {
            handleOpen({
                callbackOpen: getData_API_Zoom,
            });

            return;
        }

        handleOpen({});
    }

    // ------

    //
    function hasReceiveListZooms() {
        setZoomState((zoom_state) => ({
            ...zoom_state,
            count_new: 0,
        }));
    }

    //
    async function handleClickZoomItem(id, ix) {
        const new_zooms = [...zooms];
        new_zooms[ix].count_new_mess = 0;

        closeZoom();
        setZoomState((zoom_state) => ({
            ...zoom_state,
            zooms: new_zooms,
        }));
        openRoomChat(zooms[ix].room_chat, false);

        await API_Zoom_U(id);
    }

    //
    return (
        <CloseDiv makeDivHidden={closeZoom}>
            <div
                ref={ref_btn_elm}
                className={`HeaderMessage header_menu ${
                    ref_is_open.current ? 'bottom-blue nav-active' : ''
                }`}
            >
                <div>
                    <HeaderMessageIcon
                        count_new={count_new}
                        toggleOpenZoom={toggleOpenZoom}
                    />
                </div>

                <div
                    ref={ref_child_elm}
                    className={`HeaderMessage_list header_hidden ${
                        has_fetched ? '' : 'pointer-events-none'
                    }`}
                    style={{
                        [left_or_right]: position_x,
                        transform: `translateX(${transform_x}) translateX(${
                            innerWidth >= 500 ? '-10px' : 0
                        })`,
                    }}
                    onClick={hasReceiveListZooms}
                >
                    <div
                        className={`border-top-blur ${
                            ref_is_open.current ? '' : 'display-none'
                        }`}
                    >
                        <HeaderMessContain
                            zooms={zooms}
                            count={count}
                            is_fetching={is_fetching}
                            //
                            closeZoom={closeZoom}
                            handleClickZoomItem={handleClickZoomItem}
                            getMoreZoom={getData_API_Zoom}
                        />
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderMessage;

import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { usePositionXY } from '../../../../../_hooks/usePositionXY';
//
import { API_ZoomCountNew_R } from '../../../../../api/api_django/header/APIHeaderToken';
import {
    API_Zoom_L,
    API_Zoom_U,
} from '../../../../../api/api_django/chat/APIChat';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import ListMessages from '../contain/_main/HeaderMessContain';
import HeaderMessageIcon from '../icon/HeaderMessageIcon';
//
import './HeaderMessage.scss';
//

//
const other_state = {
    zooms: [],
    count: 0,
    count_new: 0,

    is_fetching: false,
    has_fetched: false,
};

//
HeaderMessage.propTypes = {};

//
function HeaderMessage() {
    //
    const { openRoomChat } = useContext(context_api);

    //
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);

    //
    const {
        handleOpen,
        handleClose,

        position_state: zoom_state,
        setPositionState: setZoomState,
    } = usePositionXY({
        ref_child_elm: ref_child_elm,
        ref_btn_elm: ref_btn_elm,
        other_state: other_state,
    });

    const {
        is_open,
        position_x,
        transform_x,

        zooms,
        count,
        count_new,

        is_fetching,
        has_fetched,
    } = zoom_state;

    //
    useEffect(() => {
        getData_API_CountNewZoom();
    }, []);

    /* ------------------- COMMON ------------------ */

    //
    function handleCallbackOpen(callback_open_state = {}) {
        getData_API_Zoom(callback_open_state);
    }

    //
    function closeZoom() {
        handleClose();
    }

    /* ------------------- GET API ------------------ */

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

    /* ----------------------------- */

    //
    function toggleOpenZoom() {
        if (is_open) {
            closeZoom();

            return;
        }

        if (!has_fetched) {
            handleOpen({
                self_handle: false,
                handleCallbackOpen: handleCallbackOpen,
            });

            return;
        }

        handleOpen({ self_handle: true });
    }

    //
    function makeDivHidden() {
        is_open && closeZoom();
    }

    /* ----------------------------- */

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

        setZoomState((zoom_state) => ({
            ...zoom_state,
            zooms: new_zooms,
            is_open: false,
        }));

        openRoomChat(zooms[ix].room_chat, false);

        await API_Zoom_U(id);
    }

    // console.log(zoom_state);
    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div
                ref={ref_btn_elm}
                className={`HeaderMessage header_menu ${
                    is_open ? 'bottom-blue nav-active' : ''
                }`}
            >
                <div>
                    <HeaderMessageIcon
                        count_new={count_new}
                        toggleOpenZoom={toggleOpenZoom}
                    />
                </div>

                <div
                    className={`header_hidden ${position_x} ${
                        is_open ? 'visibility-visible' : 'visibility-hidden'
                    } ${has_fetched ? '' : 'pointer-events-none'}`}
                    style={{
                        transform: `translateX(${transform_x}) translateX(${
                            innerWidth > 400 ? '-10px' : 0
                        })`,
                    }}
                    onClick={hasReceiveListZooms}
                >
                    <div ref={ref_child_elm}></div>

                    <div className={`${is_open ? '' : 'display-none'}`}>
                        <ListMessages
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

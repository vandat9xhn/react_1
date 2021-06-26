import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { API_ZoomCountNew_R } from '../../../../../api/api_django/header/APIHeaderToken';
import {
    API_Zoom_L,
    API_Zoom_U,
} from '../../../../../api/api_django/chat/APIChat';
//
import CloseDiv from '../../../../some_div/close_div/CloseDiv';
//
import './HeaderMessage.scss';
//
import ListMessages from '../contain/_main/HeaderMessContain';
import HeaderMessageIcon from '../icon/HeaderMessageIcon';
import { useAppearancePosition } from '../../../../../_custom_hooks/useAppearancePosition';

//
HeaderMessage.propTypes = {};

//
function HeaderMessage() {
    //
    const { openMessage } = useContext(context_api);

    //
    const ref_child_elm = useRef(null);
    const ref_parent_elm = useRef(null);

    //
    const {
        handleOpen,
        handleClose,

        position_state: zoom_state,
        setPositionState: setZoomState,
    } = useAppearancePosition({
        ref_child_elm: ref_child_elm,
        ref_parent_elm: ref_parent_elm,
        other_state: {
            zooms: [],
            count: 0,
            count_new: 0,

            is_fetching: false,
            has_fetched: false,
        },
        extra_transform_x: 0,
    });

    const {
        is_open,
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

        openMessage(zooms[ix].zoom_chat, false);

        await API_Zoom_U(id);
    }

    // console.log(zoom_state);
    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div
                ref={ref_parent_elm}
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
                    className={`header-hidden-position header_hidden left-50per ${
                        is_open ? 'visibility-visible' : 'visibility-hidden'
                    }`}
                    style={{
                        transform: `translateX(-50%) translateX(${transform_x}px)`,
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

import React, { useContext, useEffect, useState } from 'react';
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

//
HeaderMessage.propTypes = {};

//
function HeaderMessage() {
    //
    const { openMessage } = useContext(context_api);

    //
    const [zoom_state, setZoomState] = useState({
        zooms: [],
        count: 0,
        count_new: 0,

        open_zoom: false,
        is_fetching: false,
        has_fetched: false,
    });

    const { zooms, count, count_new, open_zoom, is_fetching, has_fetched } =
        zoom_state;

    //
    useEffect(() => {
        getData_API_CountNewZoom();
    }, []);

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
        setZoomState({
            ...zoom_state,
            ...start_obj_state,
            is_fetching: true,
        });

        const res = await API_Zoom_L({
            page: 1,
            size: 10,
            c_count: zooms.length,
        });

        const { data, count: new_count } = res.data;

        setZoomState((zoom_state) => ({
            ...zoom_state,
            zooms: zoom_state.has_fetched ? [...zoom_state.zooms, ...data] : data,
            count_new: 0,
            count: zoom_state.has_fetched ? count : new_count,
            is_fetching: false,
            has_fetched: true,
        }));
    }

    /* ----------------------------- */

    //
    function toggleOpenZoom() {
        if (!open_zoom) {
            openZoom();
        } else {
            closeZoom();
        }
    }

    //
    function openZoom() {
        if (has_fetched) {
            setZoomState((zoom_state) => ({
                ...zoom_state,
                open_zoom: true,
            }));
        } else {
            getData_API_Zoom({ open_zoom: true });
        }
    }

    //
    function closeZoom() {
        setZoomState((zoom_state) => ({
            ...zoom_state,
            open_zoom: false,
        }));
    }

    //
    function makeDivHidden() {
        open_zoom && closeZoom();
    }

    /* ----------------------------- */

    //
    function hasReceiveListZooms() {
        setZoomState((zoom_state) => ({
            ...zoom_state,
            count_new: 0,
        }));
        //
        // ws.current.send({
        //     type: 'receive_mess',
        // })
    }

    //
    async function handleClickZoomItem(id, ix) {
        const new_zooms = [...zooms];
        new_zooms[ix].count_new_mess = 0;

        setZoomState((zoom_state) => ({
            ...zoom_state,
            zooms: new_zooms,
            open_zoom: false,
        }));

        openMessage(zooms[ix].zoom_chat, false);

        await API_Zoom_U(id);
    }

    // console.log(zooms);
    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div
                className={`HeaderMessage header_menu ${
                    open_zoom ? 'bottom-blue nav-active' : ''
                }`}
            >
                <div>
                    <HeaderMessageIcon
                        count_new={count_new}
                        toggleOpenZoom={toggleOpenZoom}
                    />
                </div>

                <div
                    className={`header_hidden ${
                        open_zoom ? '' : 'display-none'
                    }`}
                    onClick={hasReceiveListZooms}
                >
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
        </CloseDiv>
    );
}

export default HeaderMessage;

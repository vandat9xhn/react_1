import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { handle_API_ShortVideo_R } from "../../../_handle_api/short_video/retrieve";

import { useMakeBodyHidden } from "../../../_hooks/useMakeBodyHidden";

import ShortVideoFullPc from "../../../component/short_video_fb/full/pc/_main/ShortVideoFullPc";

//

//
ShortVideoFullPgPc.propTypes = {};

//
function ShortVideoFullPgPc({ show_screen_title = false, closeScreenTitle }) {
    //
    const { id } = useParams();

    const [state_obj, setStateObj] = useState({
        list: [],
        ix: -1,
        next_id: 0,
        is_fetching: false,
    });

    const { list, ix, next_id, is_fetching } = state_obj;

    //
    const ref_video_pg = useRef(null);
    const ref_video_state_arr = useRef([]);

    //
    !show_screen_title &&
        useMakeBodyHidden({
            hidden_header: true,
            hidden_scroll: true,
        });

    //
    useEffect(() => {
        getData(id);
    }, []);

    // -----

    //
    const getData = async (id = 0) => {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const { short_video_obj, next_id: _next_id } =
            await handle_API_ShortVideo_R(id);

        ref_video_state_arr.current.push({ currentTime: 0, paused: false });

        setStateObj((state_obj) => ({
            list: [...state_obj.list, short_video_obj],
            ix: state_obj.ix + 1,
            next_id: _next_id,
            is_fetching: false,
        }));
    };

    //
    const getVideoElm = () => {
        return ref_video_pg.current.getElementsByTagName("video")[0];
    };

    //
    const handleChangeTime = (ix = 0) => {
        const video_elm = getVideoElm();

        ref_video_state_arr.current[ix].currentTime = video_elm.currentTime;
        ref_video_state_arr.current[ix].paused = video_elm.paused;
    };

    //
    const handleAction = (icon_name = "") => {
        console.log(icon_name);
    };

    //
    const onCloseScreenTitle = () => {
        closeScreenTitle && closeScreenTitle();
    };

    //
    const handleNext = () => {
        handleChangeTime(ix);

        if (list.length - 1 > ix) {
            history.replaceState("", "", `/short-video/${list[ix + 1].id}`);
            setStateObj((state_obj) => ({
                ...state_obj,
                ix: state_obj.ix + 1,
            }));
        } else {
            history.replaceState("", "", `/short-video/${next_id}`);
            getData(next_id);
        }
    };

    //
    const handlePrev = () => {
        if (ix === 0) {
            return;
        }

        history.replaceState("", "", `/short-video/${list[ix - 1].id}`);
        handleChangeTime(state_obj.ix);
        setStateObj((state_obj) => ({
            ...state_obj,
            ix: state_obj.ix - 1,
        }));
    };

    // ---

    if (ix < 0) {
        return null;
    }

    //
    return (
        <div ref={ref_video_pg}>
            <ShortVideoFullPc
                key={list[ix].id}
                video={list[ix].video}
                currentTime={ref_video_state_arr.current[ix].currentTime}
                paused={ref_video_state_arr.current[ix].paused}
                thumb={list[ix].thumb}
                interacts={list[ix].interacts}
                //
                name={list[ix].name}
                picture={list[ix].picture}
                content={list[ix].content}
                link_to={list[ix].link_to}
                //
                is_fetching={is_fetching}
                show_screen_title={show_screen_title}
                is_has_next={true}
                is_has_prev={ix > 0}
                //
                handleAction={handleAction}
                closeScreenTitle={onCloseScreenTitle}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}

export default ShortVideoFullPgPc;

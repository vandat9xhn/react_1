import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { useMakeBodyHidden } from "../../../_hooks/useMakeBodyHidden";

import {
    getRandomImg,
    getRandomVideo,
} from "../../../_default/_common/default_image";
import {
    default_content_arr,
    getRandomContent,
} from "../../../_default/_common/default_content";
import { getRandomName } from "../../../_default/_common/default_name";
import {
    getRandomId,
    getRandomNumber,
} from "../../../_default/_common/default_id";

import ShortVideoFullPc from "../../../component/short_video_fb/full/pc/_main/ShortVideoFullPc";

//
const handle_API_ShortVideo_R = (id = 0) =>
    new Promise((res) => {
        setTimeout(() => {
            res({
                short_video_obj: {
                    id: id,
                    video: getRandomVideo(),
                    thumb: getRandomImg(),
                    content: getRandomContent(),

                    name: getRandomName(),
                    picture: getRandomImg(),
                    link_to: `/profile/${getRandomNumber()}`,

                    interacts: [
                        {
                            icon_name: "like",
                            count_str: "20K",
                        },
                        {
                            icon_name: "comment",
                            count_str: "500",
                        },
                        {
                            icon_name: "share",
                            count_str: "1K",
                        },
                    ],
                },
                next_id: getRandomId(),
            });
        }, 250);
    });

//
ShortVideoFullPg.propTypes = {};

//
function ShortVideoFullPg(props) {
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
    const ref_time_arr = useRef([]);
    const ref_video_state_arr = useRef([]);

    //
    useMakeBodyHidden({
        hidden_header: true,
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
    const closeScreenTitle = () => {
        console.log("Close");
    };

    //
    const handleNext = () => {
        history.replaceState("", "", `/short-video/${next_id}`);

        handleChangeTime(ix);

        if (list.length - 1 > ix) {
            setStateObj((state_obj) => ({
                ...state_obj,
                ix: state_obj.ix + 1,
            }));
        } else {
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

    console.log(ref_video_state_arr.current);

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
                content={default_content_arr[0]}
                link_to={list[ix].link_to}
                //
                is_fetching={is_fetching}
                show_screen_title={true}
                is_has_next={true}
                is_has_prev={ix > 0}
                //
                handleAction={handleAction}
                closeScreenTitle={closeScreenTitle}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}

export default ShortVideoFullPg;

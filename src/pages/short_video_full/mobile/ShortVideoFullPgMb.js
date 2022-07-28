import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { handle_API_ShortVideo_L } from "../../../_handle_api/short_video/list";

import { useMakeBodyHidden } from "../../../_hooks/useMakeBodyHidden";

import VirtualScroll from "../../../component/virtual_scroll/VirtualScroll";
import SwipeYFull from "../../../component/swipe/y/_main/SwipeYFull";
import ShortVideoFullMb from "../../../component/short_video_fb/full/mb/_main/ShortVideoFullMb";

import "./ShortVideoFullPgMb.scss";

//
ShortVideoFullPgMb.propTypes = {};

//
function ShortVideoFullPgMb({ show_screen_title = false }) {
    //
    const { id } = useParams();

    const [state_obj, setStateObj] = useState({
        list: [],
        ix: 0,
        temp_ix: 0,
        next_id: 0,
        is_fetching: false,
        has_fetched: false,
    });

    const { list, ix, temp_ix, next_id, is_fetching, has_fetched } = state_obj;

    //
    !show_screen_title &&
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

        const { data, next_id } = await handle_API_ShortVideo_L(id);

        setStateObj((state_obj) => ({
            ...state_obj,
            list: [...state_obj.list, ...data],
            next_id: next_id,
            is_fetching: false,
            has_fetched: true,
        }));
    };

    // -----

    const handleChangeIx = (new_ix = 0) => {
        setStateObj((state_obj) => {
            history.replaceState("", "", `/short-video/${list[new_ix].id}`);

            return {
                ...state_obj,
                ix: new_ix,
                temp_ix: new_ix,
            };
        });

        if (list.length - 2 === new_ix) {
            getData(next_id);
        }
    };

    const callbackTouchMove = (per_y_change = 0) => {
        setStateObj((state_obj) => ({
            ...state_obj,
            temp_ix:
                state_obj.ix +
                (per_y_change >= 0.5 ? 1 : per_y_change <= -0.5 ? -1 : 0),
        }));
    };

    //
    const handleAction = (icon_name = "") => {
        console.log(icon_name);
    };

    // ---

    if (!has_fetched) {
        return null;
    }

    //
    return (
        <div className="ShortVideoFullPgMb">
            <SwipeYFull
                handleChangeIx={handleChangeIx}
                callbackTouchMove={callbackTouchMove}
            >
                <React.Fragment>
                    {list.map((item, item_ix) => (
                        <div className="SwipeYFull_item" key={item.id}>
                            <VirtualScroll>
                                <ShortVideoFullMb
                                    video={item.video}
                                    paused={item_ix !== temp_ix}
                                    interacts={item.interacts}
                                    //
                                    name={item.name}
                                    picture={item.picture}
                                    content={item.content}
                                    link_to={item.link_to}
                                    //
                                    is_fetching={is_fetching}
                                    is_has_next={true}
                                    is_has_prev={ix > 0}
                                    //
                                    handleAction={handleAction}
                                />
                            </VirtualScroll>
                        </div>
                    ))}
                </React.Fragment>
            </SwipeYFull>
        </div>
    );
}

export default ShortVideoFullPgMb;

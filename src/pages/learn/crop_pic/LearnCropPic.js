import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { getCropPosition } from '../../../_some_function/getCropPosition';
//
import { useMouseMoveXY } from '../../../_hooks/useMouseMoveXY';
//
import img from '../../../../image/banner_laptop_phone.jpg';
//
import './LearnCropPic.scss';

//
const POINT_MAX_SPACE = 15;

//
LearnCropPic.propTypes = {};

//
function LearnCropPic(props) {
    //
    const [state_obj, setStateObj] = useState({
        point_top_left_obj: { x: 0, y: 0 },
        point_top_right_obj: { x: 0, y: 0 },
        point_bottom_right_obj: { x: 0, y: 0 },
        point_bottom_left_obj: { x: 0, y: 0 },

        pic_height: 0,
        pic_width: 0,
    });

    const {
        point_top_left_obj,
        point_top_right_obj,
        point_bottom_right_obj,
        point_bottom_left_obj,

        pic_width,
        pic_height,
    } = state_obj;

    //
    const ref_point_move = useRef(-1);
    const ref_img = useRef(null);

    //
    // const pic_width = 250;
    // const pic_height = 200;

    const border_top_width = point_top_left_obj.y;
    const border_bottom_width = pic_height - point_bottom_right_obj.y;

    const border_left_width = point_top_left_obj.x;
    const border_right_width = pic_width - point_bottom_right_obj.x;

    const crop_width = pic_width - border_left_width - border_right_width;
    const crop_height = pic_height - border_top_width - border_bottom_width;

    //
    const { handleStart: handleStartTopLeft } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveTopLeft,
    });
    const { handleStart: handleStartTopRight } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveTopRight,
    });
    const { handleStart: handleStartBottomRight } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveBottomRight,
    });
    const { handleStart: handleStartBottomLeft } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveBottomLeft,
    });

    //
    useEffect(() => {
        const { width, height } = ref_img.current.getBoundingClientRect();

        setStateObj({
            ...state_obj,
            point_top_left_obj: { x: 0, y: 0 },
            point_top_right_obj: { x: width, y: 0 },
            point_bottom_right_obj: { x: width, y: height },
            point_bottom_left_obj: { x: 0, y: height },

            pic_height: height,
            pic_width: width,
        });
    }, []);

    // ------

    //
    function handleMouseMoveTopLeft({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_point_top_left_obj = { ...state_obj.point_top_left_obj };
            const new_point_top_right_obj = {
                ...state_obj.point_top_right_obj,
            };
            const new_point_bottom_right_obj = {
                ...state_obj.point_bottom_right_obj,
            };
            const new_point_bottom_left_obj = {
                ...state_obj.point_bottom_left_obj,
            };

            const { x, y } = getCropPosition({
                new_x: new_point_top_left_obj.x + client_x_change,
                new_y: new_point_top_left_obj.y + client_y_change,

                max_x: new_point_bottom_right_obj.x - POINT_MAX_SPACE,
                max_y: new_point_bottom_right_obj.y - POINT_MAX_SPACE,
            });

            new_point_top_left_obj.x = x;
            new_point_top_left_obj.y = y;

            new_point_bottom_left_obj.x = x;
            new_point_top_right_obj.y = y;

            return {
                ...state_obj,
                point_top_left_obj: new_point_top_left_obj,
                point_top_right_obj: new_point_top_right_obj,
                point_bottom_right_obj: new_point_bottom_right_obj,
                point_bottom_left_obj: new_point_bottom_left_obj,
            };
        });
    }

    //
    function handleMouseMoveTopRight({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_point_top_left_obj = { ...state_obj.point_top_left_obj };
            const new_point_top_right_obj = {
                ...state_obj.point_top_right_obj,
            };
            const new_point_bottom_right_obj = {
                ...state_obj.point_bottom_right_obj,
            };
            const new_point_bottom_left_obj = {
                ...state_obj.point_bottom_left_obj,
            };

            const { x, y } = getCropPosition({
                new_x: new_point_top_right_obj.x + client_x_change,
                new_y: new_point_top_right_obj.y + client_y_change,
                max_x: pic_width,
                min_x: new_point_bottom_left_obj.x + POINT_MAX_SPACE,
                max_y: new_point_bottom_left_obj.y - POINT_MAX_SPACE,
            });

            new_point_top_right_obj.x = x;
            new_point_bottom_right_obj.x = x;

            new_point_top_right_obj.y = y;
            new_point_top_left_obj.y = y;

            return {
                ...state_obj,
                point_top_left_obj: new_point_top_left_obj,
                point_top_right_obj: new_point_top_right_obj,
                point_bottom_right_obj: new_point_bottom_right_obj,
                point_bottom_left_obj: new_point_bottom_left_obj,
            };
        });
    }
    //
    function handleMouseMoveBottomRight({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_point_top_left_obj = { ...state_obj.point_top_left_obj };
            const new_point_top_right_obj = {
                ...state_obj.point_top_right_obj,
            };
            const new_point_bottom_right_obj = {
                ...state_obj.point_bottom_right_obj,
            };
            const new_point_bottom_left_obj = {
                ...state_obj.point_bottom_left_obj,
            };

            const { x, y } = getCropPosition({
                new_x: new_point_bottom_right_obj.x + client_x_change,
                new_y: new_point_bottom_right_obj.y + client_y_change,
                max_x: pic_width,
                max_y: pic_height,
                min_x: new_point_top_left_obj.x + POINT_MAX_SPACE,
                min_y: new_point_top_left_obj.y + POINT_MAX_SPACE,
            });

            new_point_bottom_right_obj.x = x;
            new_point_top_right_obj.x = x;

            new_point_bottom_right_obj.y = y;
            new_point_bottom_left_obj.y = y;

            return {
                ...state_obj,
                point_top_left_obj: new_point_top_left_obj,
                point_top_right_obj: new_point_top_right_obj,
                point_bottom_right_obj: new_point_bottom_right_obj,
                point_bottom_left_obj: new_point_bottom_left_obj,
            };
        });
    }
    //
    function handleMouseMoveBottomLeft({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_point_top_left_obj = { ...state_obj.point_top_left_obj };
            const new_point_top_right_obj = {
                ...state_obj.point_top_right_obj,
            };
            const new_point_bottom_right_obj = {
                ...state_obj.point_bottom_right_obj,
            };
            const new_point_bottom_left_obj = {
                ...state_obj.point_bottom_left_obj,
            };

            const { x, y } = getCropPosition({
                new_x: new_point_bottom_left_obj.x + client_x_change,
                new_y: new_point_bottom_left_obj.y + client_y_change,

                min_y: new_point_top_right_obj.y + POINT_MAX_SPACE,

                max_y: pic_height,
                max_x: new_point_top_right_obj.x - POINT_MAX_SPACE,
            });

            new_point_bottom_left_obj.x = x;
            new_point_bottom_left_obj.y = y;

            new_point_top_left_obj.x = x;
            new_point_bottom_right_obj.y = y;

            return {
                ...state_obj,
                point_top_left_obj: new_point_top_left_obj,
                point_top_right_obj: new_point_top_right_obj,
                point_bottom_right_obj: new_point_bottom_right_obj,
                point_bottom_left_obj: new_point_bottom_left_obj,
            };
        });
    }

    //
    return (
        <div className="LearnCropPic user-select-none">
            <div className="display-flex-center">
                <div className="pos-rel">
                    <img
                        ref={ref_img}
                        src={img}
                        alt=""
                        width={250}
                        height={200}
                    />

                    <div
                        className="LearnCropPic_crop pos-abs"
                        style={{
                            top: 0,
                            left: 0,

                            width: `${crop_width}px`,
                            height: `${crop_height}px`,

                            borderWidth: `${border_top_width}px ${border_right_width}px ${border_bottom_width}px ${border_left_width}px`,
                            borderStyle: 'solid',
                            borderColor: 'var(--shadow-5)',
                        }}
                    ></div>

                    <div
                        className="LearnCropPic_border pos-abs"
                        style={{
                            left: point_top_left_obj.x,
                            top: point_top_left_obj.y,

                            width: `${crop_width}px`,
                            height: `${crop_height}px`,
                        }}
                    ></div>

                    {[
                        {
                            ...point_top_left_obj,
                            handleStart: handleStartTopLeft,
                        },
                        {
                            ...point_top_right_obj,
                            handleStart: handleStartTopRight,
                        },
                        {
                            ...point_bottom_right_obj,
                            handleStart: handleStartBottomRight,
                        },
                        {
                            ...point_bottom_left_obj,
                            handleStart: handleStartBottomLeft,
                        },
                    ].map((item, ix) => (
                        <div
                            key={ix}
                            className="LearnCropPic_point"
                            style={{
                                left: item.x,
                                top: item.y,
                            }}
                            onMouseDown={item.handleStart}
                        >
                            <div className="LearnCropPic_point_contain"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LearnCropPic;

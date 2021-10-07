import { useEffect, useState } from 'react';
//
import { getCropPosition } from '../_some_function/getCropPosition';
//
import { useMouseMoveXY } from '../_hooks/useMouseMoveXY';

//
const POINT_MAX_SPACE = 15;

//
export function useCropPic({
    old_point_top_left_obj = { x: 0, y: 0 },
    old_point_top_right_obj = { x: 0, y: 0 },
    old_point_bottom_right_obj = { x: 0, y: 0 },
    old_point_bottom_left_obj = { x: 0, y: 0 },

    pic_height = 0,
    pic_width = 0,

    handleCropEnd,
}) {
    //
    const [state_obj, setStateObj] = useState({
        point_top_left_obj: old_point_top_left_obj,
        point_top_right_obj: old_point_top_right_obj,
        point_bottom_right_obj: old_point_bottom_right_obj,
        point_bottom_left_obj: old_point_bottom_left_obj,
    });

    const {
        point_top_left_obj,
        point_top_right_obj,
        point_bottom_right_obj,
        point_bottom_left_obj,
    } = state_obj;

    const border_top_width = point_top_left_obj.y;
    const border_bottom_width = pic_height - point_bottom_right_obj.y;

    const border_left_width = point_top_left_obj.x;
    const border_right_width = pic_width - point_bottom_right_obj.x;

    const crop_width = pic_width - border_left_width - border_right_width;
    const crop_height = pic_height - border_top_width - border_bottom_width;

    const has_crop = crop_width > 0;

    //
    const { handleStart: handleStartTopLeft } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveTopLeft,
        handleMouseEnd: handleMouseEnd,
    });
    const { handleStart: handleStartTopRight } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveTopRight,
        handleMouseEnd: handleMouseEnd,
    });
    const { handleStart: handleStartBottomRight } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveBottomRight,
        handleMouseEnd: handleMouseEnd,
    });
    const { handleStart: handleStartBottomLeft } = useMouseMoveXY({
        handleMouseMove: handleMouseMoveBottomLeft,
        handleMouseEnd: handleMouseEnd,
    });

    //
    useEffect(() => {
        if (!has_crop) {
            setStateObj({
                ...state_obj,
                point_top_left_obj: { x: 0, y: 0 },
                point_top_right_obj: { x: pic_width, y: 0 },
                point_bottom_right_obj: { x: pic_width, y: pic_height },
                point_bottom_left_obj: { x: 0, y: pic_height },
            });
        }
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
    function handleMouseEnd() {
        setStateObj((state_obj) => {
            handleCropEnd({
                ...state_obj,
            });

            return {
                ...state_obj,
            };
        });
    }

    return {
        point_top_left_obj,
        point_top_right_obj,
        point_bottom_right_obj,
        point_bottom_left_obj,

        has_crop,

        border_top_width,
        border_right_width,
        border_bottom_width,
        border_left_width,

        crop_width,
        crop_height,

        handleStartTopLeft,
        handleStartTopRight,
        handleStartBottomRight,
        handleStartBottomLeft,
    };
}

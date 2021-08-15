import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    SCALE_PIC_RATIO,
    STORY_WIDTH_HEIGHT_RATIO,
} from '../../../../../../_constant/Constant';
//
import {
    data_story_font_arr,
    data_story_text_color_arr,
} from '../../../../../../_data/story/text';
//
import { useWaitingResize } from '../../../../../../_hooks/useWaitingResize';
//
import StoryCommonPcC from '../../../../_components/create/pc/_main/StoryCommonPcC';
import StoryPicLeftPcC from '../left/StoryPicLeftPcC';
import StoryPicRightPcC from '../right/_main/StoryPicRightPcC';

//
StoryCreatePicPc.propTypes = {};

//
function StoryCreatePicPc({
    vid_pic_width,
    vid_pic,
    show_fav,
    permission,

    handleChoosePermission,
    handleCreate,
    handleDiscard,
    handleClose,
}) {
    //
    const [state_obj, setStateObj] = useState({
        story_width: 0,

        vid_pic_obj: {
            vid_pic: vid_pic,
            trans_x: 0,
            trans_y: 0,
            scale: 1,
            rotate: 0, // 0 90 180 270
        },

        text_arr: [] || [
            {
                key: 0,
                text: '',
                color: '',
                font: '',
                trans_x: 0,
                trans_y: 0,
                rotate: 0,
                scale: 1,
            },
        ],

        add_text_obj: {
            is_open: false,
            text: '',
            active_font_ix: 0,
            active_color_ix: 0,
            num: 0,
        },
    });

    const { story_width, vid_pic_obj, text_arr, add_text_obj } = state_obj;
    const { rotate } = vid_pic_obj;
    const { num } = add_text_obj;

    //
    const ref_body_elm = useRef(null);

    //
    useWaitingResize({
        handleResize: calculateWidthStory,
    });

    // //
    useEffect(() => {
        setStateObj({
            ...state_obj,
            story_width: getWidthStory(),
        });
    }, []);

    // /* ----------- */

    //
    function getWidthStory() {
        return (
            ref_body_elm.current.offsetHeight * STORY_WIDTH_HEIGHT_RATIO || 0.1
        );
    }

    //
    function calculateWidthStory() {
        setStateObj((state_obj) => {
            const new_story_width = getWidthStory();
            const ratio_change = new_story_width / state_obj.story_width;
            const new_vid_pic_obj = { ...state_obj.vid_pic_obj };
            const new_text_arr = [...state_obj.text_arr];

            new_vid_pic_obj.trans_x *= ratio_change;
            new_vid_pic_obj.trans_y *= ratio_change;

            new_text_arr.forEach((item) => {
                item.trans_x *= ratio_change;
                item.trans_y *= ratio_change;
                item.scale *= ratio_change;

                return item;
            });

            return {
                ...state_obj,
                story_width: new_story_width,
                vid_pic_obj: new_vid_pic_obj,
            };
        });
    }

    /* ------ ADD TEXT ----- */

    //
    function openAddText(e) {
        e.stopPropagation();

        !add_text_obj.is_open &&
            setStateObj((state_obj) => ({
                ...state_obj,
                add_text_obj: {
                    is_open: true,
                    text: '',
                    active_font_ix: 0,
                    active_color_ix: 0,
                    num: text_arr.length,
                },
            }));
    }

    //
    function handleAddText({ text, active_color_ix, active_font_ix }) {
        if (!text.trim()) {
            if (num == text_arr.length) {
                setStateObj((state_obj) => ({
                    ...state_obj,
                    add_text_obj: {
                        is_open: false,
                        text: '',
                        active_font_ix: 0,
                        active_color_ix: 0,
                        num: 0,
                    },
                }));
            } else {
                const new_text_arr = [...text_arr];
                new_text_arr.splice(add_text_obj.num, 1);

                setStateObj({
                    ...state_obj,
                    text_arr: new_text_arr,
                    add_text_obj: {
                        is_open: false,
                        text: '',
                        active_color_ix: 0,
                        active_font_ix: 0,
                        num: 0,
                    },
                });
            }

            return;
        }

        const new_text_arr = [...text_arr];
        const new_font = data_story_font_arr[active_font_ix];
        const new_color = data_story_text_color_arr[active_color_ix];

        if (num == text_arr.length) {
            new_text_arr.push({
                key: Math.floor(Math.random() * 100000),
                text: text,
                color: new_color,
                font: new_font,
                trans_x: 0,
                trans_y: 0,
                rotate: 0,
                scale: story_width / 200,
            });
        } else {
            new_text_arr[num].text = text;
            new_text_arr[num].color = new_color;
            new_text_arr[num].font = new_font;
        }

        setStateObj({
            ...state_obj,
            text_arr: new_text_arr,
            add_text_obj: {
                is_open: false,
                text: '',
                active_color_ix: 0,
                active_font_ix: 0,
                num: 0,
            },
        });
    }

    //
    function openChangeText(ix) {
        !add_text_obj.is_open &&
            setStateObj({
                ...state_obj,
                add_text_obj: {
                    is_open: true,
                    text: text_arr[ix].text,
                    active_font_ix: data_story_font_arr.findIndex(
                        (item) => item == text_arr[ix].font
                    ),
                    active_color_ix: data_story_text_color_arr.findIndex(
                        (item) => item == text_arr[ix].color
                    ),
                    num: ix,
                },
            });
    }

    /* ------- PIC ------- */

    //
    function handleMovePic({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                vid_pic_obj: {
                    ...state_obj.vid_pic_obj,
                    trans_x: state_obj.vid_pic_obj.trans_x + client_x_change,
                    trans_y: state_obj.vid_pic_obj.trans_y + client_y_change,
                },
            };
        });
    }

    //
    function handleMouseMoveZoom(value_zoom_change) {
        setStateObj((state_obj) => {
            let new_scale =
                state_obj.vid_pic_obj.scale +
                value_zoom_change / SCALE_PIC_RATIO;

            if (new_scale <= 0) {
                new_scale = 0;
            } else if (new_scale >= 100 / SCALE_PIC_RATIO) {
                new_scale = 100 / SCALE_PIC_RATIO;
            }

            return {
                ...state_obj,
                vid_pic_obj: {
                    ...state_obj.vid_pic_obj,
                    scale: new_scale,
                },
            };
        });
    }

    //
    function handleMouseEndZoom() {}

    //
    function handleRotatePic() {
        setStateObj((state_obj) => ({
            ...state_obj,
            vid_pic_obj: {
                ...vid_pic_obj,
                rotate: rotate + 90 == 360 ? 0 : rotate + 90,
            },
        }));
    }

    /* --------- TEXT --------*/

    //
    function handleMoveText({ ix, client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_text_arr = [...state_obj.text_arr];

            new_text_arr[ix].trans_x += client_x_change;
            new_text_arr[ix].trans_y += client_y_change;

            return { ...state_obj, text_arr: new_text_arr };
        });
    }

    //
    function handleResizeText({ ix, scale_change }) {
        setStateObj((state_obj) => {
            const new_text_arr = [...state_obj.text_arr];
            new_text_arr[ix].scale += scale_change;
            new_text_arr[ix].scale <= 0 && (new_text_arr[ix].scale = 0);

            return { ...state_obj, text_arr: new_text_arr };
        });
    }

    //
    function handleRotateText({ ix, rotate_change }) {
        setStateObj((state_obj) => {
            const new_text_arr = [...state_obj.text_arr];
            new_text_arr[ix].rotate += rotate_change;

            return { ...state_obj, text_arr: new_text_arr };
        });
    }

    //
    function handleDeleteText(ix) {
        const new_text_arr = [...text_arr];
        new_text_arr.splice(ix, 1);

        setStateObj({
            ...state_obj,
            text_arr: new_text_arr,
        });
    }

    /* ------------- */

    function onCreate() {
        handleCreate({ ...state_obj });
    }

    // console.log(add_text_obj);
    //
    return (
        <StoryCommonPcC
            show_fav={show_fav}
            permission={permission}
            handleChoosePermission={handleChoosePermission}
            handleCreate={onCreate}
            handleDiscard={handleDiscard}
            handleClose={handleClose}
            //
            children_left={
                <StoryPicLeftPcC
                    openAddText={openAddText}
                    is_open={add_text_obj.is_open}
                />
            }
            children_right={
                <StoryPicRightPcC
                    ref_body_elm={ref_body_elm}
                    story_width={story_width}
                    //
                    vid_pic_obj={vid_pic_obj}
                    text_arr={text_arr}
                    add_text_obj={add_text_obj}
                    value_zoom_pic={vid_pic_obj.scale * SCALE_PIC_RATIO}
                    //
                    openChangeText={openChangeText}
                    handleAddText={handleAddText}
                    //
                    handleMovePic={handleMovePic}
                    handleMoveText={handleMoveText}
                    handleResizeText={handleResizeText}
                    handleRotateText={handleRotateText}
                    handleDeleteText={handleDeleteText}
                    //
                    handleMouseMoveZoom={handleMouseMoveZoom}
                    handleMouseEndZoom={handleMouseEndZoom}
                    handleRotatePic={handleRotatePic}
                />
            }
        />
    );
}

export default StoryCreatePicPc;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { default_vid_pic_arr } from '../../../_default/_common/default_image';
//
import './LearnDnD.scss';

//
LearnDnD.propTypes = {};

//
function LearnDnD(props) {
    //
    const [image_arr, setImageArr] = useState(
        default_vid_pic_arr.map((item, ix) => ({
            img: item,
            content: 'content' + ix,
        }))
    );

    const [c_drag_ix, setCDragIX] = useState(-1);
    const [c_drag_enter, setCDragEnter] = useState(-1);

    //
    function handelDragCommon(ix = -1, callback = () => {}) {
        if (ix == c_drag_ix) {
            c_drag_enter != -1 && setCDragEnter(-1);
            return;
        }

        callback();
    }

    //
    function handleDragStart(e, ix) {
        setCDragIX(ix);
    }

    //
    function handleDragEnd(e, ix) {
        setCDragEnter(-1);
        setCDragIX(-1);
    }

    //
    function handleDragEnter(e, ix) {
        handelDragCommon(ix, () => {
            setCDragEnter(ix);
        });
    }

    //
    function handleDragLeave(e, ix) {
        e.stopPropagation();
        handelDragCommon(ix, () => {
            setCDragEnter(-1);
        });
    }

    //
    function handleDragOver(e, ix) {
        e.preventDefault();
        handelDragCommon(ix, () => {
            ix != c_drag_enter && setCDragEnter(ix);
        });

        return false;
    }

    //
    function handleDrop(e, ix) {
        const drag_img_obj = image_arr[c_drag_ix];
        const over_img_obj = image_arr[ix];

        const new_image_arr = [...image_arr];
        new_image_arr[ix] = drag_img_obj;
        new_image_arr[c_drag_ix] = over_img_obj;

        setImageArr(new_image_arr);
    }

    // console.log('enter:', c_drag_enter, c_drag_ix);
    //
    return (
        <div className="LearnDnD">
            <div className="LearnDnD_row display-flex flex-wrap">
                {image_arr.map((item, ix) => {
                    //
                    const new_ix =
                        c_drag_enter != -1 && ix == c_drag_ix
                            ? c_drag_enter
                            : ix;
                    const item_enter = image_arr[new_ix];

                    //
                    return (
                        <div
                            key={`${ix}`}
                            className={`LearnDnD_item ${
                                c_drag_enter != -1 && ix == c_drag_enter
                                    ? 'bg-ccc'
                                    : ''
                            } ${c_drag_ix != -1 ? 'LearnDnD_item-drag' : ''}`}
                            draggable
                            //
                            onDragStart={(e) => handleDragStart(e, ix)}
                            onDragEnd={(e) => handleDragEnd(e, ix)}
                            //
                            // onDragEnter={(e) => handleDragEnter(e, ix)}
                            // onDragLeave={(e) => handleDragLeave(e, ix)}
                            // onDragExit={(e) => handleDragLeave(e, ix)}
                            //
                            onDragOver={(e) => handleDragOver(e, ix)}
                            onDrop={(e) => handleDrop(e, ix)}
                        >
                            <div
                                className={`${
                                    ix == c_drag_enter ? 'opacity-0' : ''
                                } ${
                                    ix == c_drag_ix && c_drag_enter == -1
                                        ? 'opacity-05'
                                        : ''
                                }`}
                            >
                                <div>
                                    <img
                                        draggable={false}
                                        src={item_enter.img}
                                        alt=""
                                    />
                                </div>

                                <div>{item_enter.content}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LearnDnD;

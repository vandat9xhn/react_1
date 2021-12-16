import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../_some_function/waitingToDoLast';
// 
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryTextContentC.scss';

//
StoryTextContentC.propTypes = {};

//
function StoryTextContentC({ vid_pic, text, font_family, scale }) {
    //
    const [state_obj, setStateObj] = useState({
        is_show_more: false,
    });

    const { is_show_more } = state_obj;

    //
    const ref_text_elm = useRef(null);
    const has_more_text = useRef(false);

    const ref_interval = useRef(false);

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        // waitingToDoLast({
        //     ref_interval: ref_interval,
        //     time: 500,
        //     callback: () => {
                const new_has_more_text =
                    text.trim() &&
                    ref_text_elm.current.scrollHeight >= scale * 22 * 5;

                if (has_more_text.current != new_has_more_text) {
                    has_more_text.current = new_has_more_text;
                    forceUpdate();
                }
            // },
        // });
    }, [text]);

    // -----

    //
    function handleToggleText() {
        ref_text_elm.current.scrollTop = 0;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_show_more: !is_show_more,
        }));
    }

    //
    return (
        <div className="wh-100 pos-rel">
            <img className="wh-100" src={vid_pic} alt="" />

            <div
                className="StoryTextContentC_text pos-abs-center display-flex flex-col justify-content-center w-100per text-white"
                style={{
                    fontFamily: font_family,
                    fontSize: `${scale * 22}px`,
                    lineHeight: `${scale * 22}px`,
                }}
            >
                <div
                    ref={ref_text_elm}
                    className={`StoryTextContentC_text_contain padding-x-8px text-align-center ${
                        is_show_more
                            ? 'overflow-y-auto scroll-thin max-h-100per'
                            : 'StoryTextContentC_text_contain-less wk-box-vertical line-clamp-4 overflow-hidden'
                    }`}
                >
                    <span className="StoryTextContentC_text_contain_item font-700">
                        {text || 'START TYPING'}
                    </span>
                </div>

                {has_more_text.current ? (
                    <div
                        className="width-fit-content padding-8px cursor-pointer"
                        onClick={handleToggleText}
                    >
                        <div className="display-flex align-items-center">
                            <div className="font-14px font-500">
                                {is_show_more ? 'See less' : 'See more'}
                            </div>

                            <div
                                className={`StoryTextContentC_icon_more display-flex-center margin-left-5px wh-16px brs-50 bg-primary ${
                                    is_show_more ? 'rotate--90' : 'rotate-90'
                                }`}
                            >
                                <IconsArrow x={200} size_icon="12px" />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default StoryTextContentC;

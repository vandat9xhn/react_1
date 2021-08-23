import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        const new_has_more_text =
            text.trim() && ref_text_elm.current.scrollHeight >= scale * 22 * 5;

        if (has_more_text.current != new_has_more_text) {
            has_more_text.current = new_has_more_text;
            forceUpdate();
        }
    }, [text]);

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
            <img src={vid_pic} alt="" className="wh-100" />

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
                    className={`StoryTextContentC_text_contain text-align-center ${
                        is_show_more
                            ? 'overflow-y-auto scroll-thin max-h-100per'
                            : 'StoryTextContentC_text_contain-less overflow-hidden'
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
                            <div className="font-14px label-field">
                                {is_show_more ? 'See less' : 'See more'}
                            </div>

                            <div
                                className={`StoryTextContentC_icon_more display-flex-center brs-50 bg-primary ${
                                    is_show_more
                                        ? 'StoryTextContentC_icon_more-less'
                                        : 'StoryTextContentC_icon_more-more'
                                }`}
                            >
                                <IconsArrow x={200} size_icon="0.75rem" />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default StoryTextContentC;

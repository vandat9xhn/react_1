import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import './StoryTextContentC.scss';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';

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
            ref_text_elm.current.clientHeight <
            ref_text_elm.current.scrollHeight;
        // ref_text_elm.current
        //     .getElementsByClassName(
        //         'StoryTextContentC_text_contain_item'
        //     )[0]
        //     .getBoundingClientRect().height;

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

            <div className="StoryTextContentC_text pos-abs-center display-flex flex-col justify-content-center w-100per text-white">
                <div
                    ref={ref_text_elm}
                    className={`StoryTextContentC_text_contain text-align-center ${
                        is_show_more
                            ? 'overflow-y-auto scroll-thin max-h-100per'
                            : 'StoryTextContentC_text_contain-less overflow-hidden'
                    }`}
                    style={{
                        fontFamily: font_family,
                        fontSize: `${scale * 22}px`,
                    }}
                >
                    <span className="StoryTextContentC_text_contain_item">
                        {text}
                    </span>
                </div>

                {has_more_text.current ? (
                    <div
                        className="padding-8px cursor-pointer"
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

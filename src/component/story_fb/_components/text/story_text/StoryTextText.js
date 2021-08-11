import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import './StoryTextText.scss';

//
StoryTextText.propTypes = {};

//
function StoryTextText({ text, font_family, scale }) {
    //
    const [state_obj, setStateObj] = useState({
        is_show_more: false,
        has_more_text: false,
    });

    const { is_show_more, has_more_text } = state_obj;

    //
    const ref_text_elm = useRef(null);

    //
    useEffect(() => {
        const new_has_more_text =
            ref_text_elm.current.scrollHeight <
            ref_text_elm.current
                .getElementsByClassName('StoryTextText_contain_item')[0]
                .getBoundingClientRect().height;

        new_has_more_text &&
            setStateObj({
                ...state_obj,
                has_more_text: true,
            });
    }, []);

    //
    function handleToggleText() {
        ref_text_elm.current.getElementsByClassName(
            'StoryTextText_contain'
        )[0].scrollTop = 0;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_show_more: !is_show_more,
        }));
    }

    //
    return (
        <div
            className="StoryTextText pos-abs-center text-white"
            style={{
                fontFamily: font_family,
                fontSize: `${scale * 18}px`,
            }}
        >
            <div
                ref={ref_text_elm}
                className={`StoryTextText_contain text-align-center ${
                    is_show_more
                        ? 'overflow-y-auto scroll-thin'
                        : 'overflow-hidden'
                }`}
            >
                <span className="StoryTextText_contain_item">{text}</span>
            </div>

            {has_more_text ? (
                <div className="cursor-pointer" onClick={handleToggleText}>
                    <span>{is_show_more ? 'See less' : 'See more'}</span>
                </div>
            ) : null}
        </div>
    );
}

export default StoryTextText;

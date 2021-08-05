import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import StoryFootMobile from '../../../../../../../story_fb/item/foot/mobile/StoryFootMobile';
import StoryFootPc from '../../../../../../../story_fb/item/foot/pc/StoryFootPc';
//
import './ScreenStoryFoot.scss';

//
ScreenStoryFoot.propTypes = {};

//
function ScreenStoryFoot({
    can_like,
    can_rep,
    can_share,

    chooseListTypeLike,
    handleShare,
    handleSend,
}) {
    //
    const [state_obj, setStateObj] = useState({
        text: '',
        is_focus: false,
    });

    const { text, is_focus } = state_obj;

    //
    const ref_foot_elm = useRef(null);

    //
    function handleFocus() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_focus: true,
        }));
    }

    //
    function handleBlur() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_focus: false,
        }));
    }

    //
    function handleChange(value) {
        setStateObj((state_obj) => ({
            ...state_obj,
            text: value,
        }));
    }

    //
    function onSend() {
        if (!text.trim()) {
            return;
        }

        handleSend(text);
        setStateObj((state_obj) => ({
            ...state_obj,
            text: '',
        }));
    }

    //
    function handleClickIconSend() {
        if (!text.trim()) {
            return;
        }

        onSend();
        ref_foot_elm.current.getElementsByTagName('textarea')[0].style.height =
            'auto';
    }

    //
    return (
        <div ref={ref_foot_elm} className="ScreenStoryFoot">
            {IS_MOBILE ? (
                <StoryFootMobile
                    can_share={can_share}
                    can_rep={can_rep}
                    can_like={can_like}
                    //
                    text={text}
                    is_focus={is_focus}
                    handleChange={handleChange}
                    //
                    handleShare={handleShare}
                    onSend={onSend}
                    handleClickIconSend={handleClickIconSend}
                    chooseListTypeLike={chooseListTypeLike}
                />
            ) : (
                <StoryFootPc
                    can_share={can_share}
                    can_rep={can_rep}
                    can_like={can_like}
                    //
                    text={text}
                    is_focus={is_focus}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    //
                    handleShare={handleShare}
                    onSend={onSend}
                    handleClickIconSend={handleClickIconSend}
                    chooseListTypeLike={chooseListTypeLike}
                />
            )}
        </div>
    );
}

export default ScreenStoryFoot;

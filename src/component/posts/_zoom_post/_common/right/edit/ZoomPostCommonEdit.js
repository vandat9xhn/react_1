import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import Textarea from '../../../../../input/textarea/Textarea';
//
import './ZoomPostCommonEdit.scss';

//
ZoomPostCommonEdit.propTypes = {};

//
function ZoomPostCommonEdit({ old_text, handleEdit, cancelEdit }) {
    //
    const [text, setText] = useState(old_text);

    //
    const ref_main = useRef(null);

    //
    useEffect(() => {
        const textarea = ref_main.current.querySelector(
            'textarea.ZoomPostCommonEdit_textarea'
        );

        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;

        textarea.addEventListener('keydown', handleKeyDown);

        return () => {
            textarea.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // -----

    //
    function handleKeyDown(e) {
        if (e.keyCode == 27) {
            cancelEdit();
        }
    }

    //
    function handleChange(new_text) {
        setText(new_text);
    }

    //
    function handleSend() {
        handleEdit(text);
    }

    //
    return (
        <div ref={ref_main}>
            <Textarea
                text={text}
                // placeholder={'Update'}
                textarea_class={'ZoomPostCommonEdit_textarea scroll-thin'}
                // textarea_props={textarea_props}
                onChange={handleChange}
                handleSend={handleSend}
            />

            <div className="user-select-none">
                <div
                    className={`ZoomPostCommonEdit_btn_item text-blue`}
                    onClick={cancelEdit}
                >
                    Cancel
                </div>

                <div
                    className={`ZoomPostCommonEdit_btn_item ${
                        old_text == text ? 'text-smoke' : 'text-blue'
                    }`}
                    onClick={handleSend}
                >
                    Update
                </div>
            </div>
        </div>
    );
}

export default ZoomPostCommonEdit;

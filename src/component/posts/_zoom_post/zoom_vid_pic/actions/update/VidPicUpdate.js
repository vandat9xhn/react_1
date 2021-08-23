import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
// 
import './VidPicUpdate.scss';

//
VidPicUpdate.propTypes = {};

//
function VidPicUpdate({ content, handleUpdate, detectHasChange }) {
    //
    const [new_content, setNewContent] = useState(content);

    //
    function handleChange(value) {
        setNewContent(value);
        detectHasChange(value == content);
    }

    //
    function onUpdate() {
        handleUpdate(new_content);
    }

    //
    return (
        <div className="padding-8px">
            <div>
                <div className="VidPicUpdate_textarea brs-5px padding-8px">
                    <TextareaNotSend
                        text={new_content}
                        placeholder="Write something..."
                        textarea_class="VidPicUpdate_textarea-item scroll-thin"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button
                        className={`w-100per btn btn-hv btn-active padding-8px brs-5px label-field ${
                            content == new_content
                                ? 'bg-ccc text-third pointer-events-none'
                                : 'bg-blue text-white cursor-pointer'
                        }`}
                        onClick={onUpdate}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VidPicUpdate;

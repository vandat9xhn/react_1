import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';

//
CUPostPhotoMb.propTypes = {};

//
function CUPostPhotoMb({ img, text, sticker_obj, handleConfirm }) {
    //
    return (
        <div className="CUPostPhotoMb wh-100">
            <div className="CUPostPhotoMb_contain wh-100">
                <img className="wh-100 object-fit-cover" src={img} alt="" />

                <div className="CUPostPhotoMb_text pos-abs-center w-100per padding-20px">
                    {text}
                </div>

                <div className="pos-abs left-0 top-0 padding-5px">
                    <IconsArrow y={400} size_icon="15px" />
                </div>

                <div className="CUPostPhotoMb_actions pos-abs right-0 top-0 padding-5px text-white font-600">
                    <div className="CUPostPhotoMb_actions_item">Sticker</div>

                    <div className="CUPostPhotoMb_actions_item">Text</div>
                </div>

                <div>
                    <button
                        className="btn padding-x-12px padding-y-4px brs-4px bg-blue text-white font-600"
                        type="button"
                        onClick={handleConfirm}
                    >
                        Done
                    </button>
                </div>
            </div>

            <div className="pos-abs-100 bg-shadow-5">
                <div className="display-flex-center wh-100 padding-20px">
                    <TextareaNotSend
                        text={text}
                        placeholder="TYPE"
                        textarea_class="max-h-100per overflow-y-auto"
                        onChange={handleChange}
                    />
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default CUPostPhotoMb;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
//
import './CUPostPhotoMb.scss';

//
CUPostPhotoMb.propTypes = {};

//
function CUPostPhotoMb({
    img,
    text,
    sticker_obj,

    handleConfirm,
    handleBackHome,
}) {
    //
    const [value, setValue] = useState(text);
    const [open_edit_ix, setOpenEditIx] = useState(0);

    // ----

    function openEditText() {
        setOpenEditIx(1);
    }

    function closeEdit() {
        setOpenEditIx(0);
    }

    // ------

    //
    function onConfirm() {
        handleConfirm({ caption: value });
    }

    //
    return (
        <div className="CUPostPhotoMb wh-100v pos-rel bg-black">
            <div className="CUPostPhotoMb_contain pos-rel display-flex-center wh-100">
                <img className="w-100per max-h-100per" src={img} alt="" />
            </div>

            <div className="pos-abs-100 bg-shadow-2"></div>

            {value && open_edit_ix == 0 ? (
                <div className="CUPostPhotoMb_text pos-abs-center w-100per padding-x-20px text-align-center font-16px text-white font-600">
                    {value}
                </div>
            ) : null}

            <div className={`${open_edit_ix >= 1 ? 'display-none' : ''}`}>
                <div
                    className="pos-abs left-0 top-0 padding-12px"
                    onClick={handleBackHome}
                >
                    <IconsArrow y={400} size_icon="20px" />
                </div>

                <div className="CUPostPhotoMb_actions pos-abs right-0 top-0 padding-top-10px text-white font-600">
                    <div className="CUPostPhotoMb_actions_item">
                        <div className="CUPostPhotoMb_actions_item_title">
                            Sticker
                        </div>

                        <IconsInput size_icon="20px" />
                    </div>

                    <div
                        className="CUPostPhotoMb_actions_item"
                        onClick={openEditText}
                    >
                        <div className="CUPostPhotoMb_actions_item_title">
                            Text
                        </div>

                        <div>Aa</div>
                    </div>
                </div>

                <div className="pos-abs right-0 bottom-0 padding-10px">
                    <button
                        className="btn padding-x-12px padding-y-5px brs-4px bg-blue text-white font-600"
                        type="button"
                        onClick={onConfirm}
                    >
                        Done
                    </button>
                </div>
            </div>

            {open_edit_ix >= 1 ? (
                <div className="pos-abs-100 bg-shadow-5">
                    <div
                        className="pos-abs left-0 top-0 padding-12px z-index-lv1"
                        onClick={closeEdit}
                    >
                        <IconsArrow x={200} y={200} />
                    </div>
                </div>
            ) : null}

            {open_edit_ix == 1 ? (
                <div className="pos-abs-100 display-flex-center padding-20px bg-shadow-5">
                    <TextareaNotSend
                        text={value}
                        placeholder="Start typing"
                        textarea_class="max-h-100per text-align-center font-16px font-600 text-white overflow-y-auto"
                        onChange={setValue}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default CUPostPhotoMb;

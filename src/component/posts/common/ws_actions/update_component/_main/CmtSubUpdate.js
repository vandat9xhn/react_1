import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { getTypeVidOrPic } from '../../../../../../_some_function/VideoOrImage';
//
import InputFile from '../../../../../input/input_file/InputFile';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
import ButtonRipple from '../../../../../button/button_ripple/ButtonRipple';
import ImgVidPreviewItem from '../../../../../input_img_vid_preview/img_vid_preview/_item/ImgVidPreviewItem';
//
import './CmtSubUpdate.scss';
import './CmtSubUpdateRes.scss';

//
CmtSubUpdate.propTypes = {
    text: PropTypes.string,
    vid_pic_obj: PropTypes.string,
    handleUpdate: PropTypes.func,
    detectHasChange: PropTypes.func,
};

//
function CmtSubUpdate({ text, vid_pic, handleUpdate, detectHasChange }) {
    //
    const [update_state, setUpdateState] = useState({
        new_text: text,
        file: '',
        url: vid_pic,
        type: getTypeVidOrPic(vid_pic),
    });

    const { new_text, file, url, type } = update_state;

    //
    function hasChangeUpdate() {
        if (text != new_text || file != '' || vid_pic != url) {
            return true;
        }

        return false;
    }

    //
    function handleChangeText(value) {
        setUpdateState({
            ...update_state,
            new_text: value,
        });
    }

    //
    function handleChangeFile(e) {
        const new_file = e.target.files[0];

        if (new_file) {
            const reader = new FileReader();

            reader.onload = () => {
                setUpdateState((update_state) => ({
                    ...update_state,
                    url: reader.result,
                    type: new_file.type,
                }));
            };

            reader.readAsDataURL(new_file);
        }
    }

    //
    function handleDeleteFile() {
        setUpdateState({
            ...update_state,
            file: '',
            url: '',
            type: '',
        });
    }

    //
    function onUpdate() {
        handleUpdate(update_state);
    }

    //
    const has_change = hasChangeUpdate();
    detectHasChange(has_change);

    //
    return (
        <div className="CmtSubUpdate">
            <div className="CmtSubUpdate_body padding-8px">
                <div className="CmtSubUpdate_div-textarea brs-5px">
                    <TextareaNotSend
                        text={new_text}
                        placeholder="Write something..."
                        textarea_class="CmtSubUpdate__textarea scroll-thin"
                        onChange={handleChangeText}
                    />
                </div>

                <div className="CmtSubUpdate_pic">
                    <div className="CmtSubUpdate_pic_contain">
                        <div className="display-flex justify-content-center">
                            <div
                                className={
                                    url
                                        ? 'CmtSubUpdate_pic-item brs-5px'
                                        : 'display-none'
                                }
                            >
                                <ImgVidPreviewItem
                                    item_ix={0}
                                    urls={[{ url: url, type: type || 'image' }]}
                                    url={url}
                                    type={type || 'image'}
                                    deleteAnItem={handleDeleteFile}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CmtSubUpdate_footer">
                <div className="CmtSubUpdate_file">
                    <div className="CmtSubUpdate_file-row">
                        <div className="CmtSubUpdate_file-item">
                            <InputFile
                                accept="image/*, video/*"
                                onChange={handleChangeFile}
                            >
                                <IconsInput size_icon="1rem" />
                            </InputFile>
                        </div>
                    </div>
                </div>

                <div>
                    <ButtonRipple disabled={!has_change} onClick={onUpdate}>
                        Update
                    </ButtonRipple>
                </div>
            </div>
        </div>
    );
}

export default CmtSubUpdate;

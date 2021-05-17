import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
import ButtonRipple from '../../../../../button/button_ripple/ButtonRipple';
import InputFile from '../../../../../input/input_file/InputFile';
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
import ImgVidPreviewItem from '../../../../../input_img_vid_preview/img_vid_preview/_item/ImgVidPreviewItem';
//
import './CmtSubUpdate.scss';

//
CmtSubUpdate.propTypes = {
    text: PropTypes.string,
    vid_pic_obj: PropTypes.string,
    handleUpdate: PropTypes.func,
};

//
function CmtSubUpdate(props) {
    const { text, vid_pic, handleUpdate } = props;
    //
    const [new_text, setNewText] = useState(text);
    const [file, setFile] = useState('');
    const [vid_pic_obj, setVidPicObj] = useState({
        url: vid_pic,
        type: vid_pic.search('.mp4') > 0 ? 'video' : 'image',
    });

    //
    function handleChangeText(value) {
        setNewText(value);
    }

    //
    function handleChangeFile(e) {
        const new_file = e.target.files[0];
        if (new_file) {
            const reader = new FileReader();
            
            reader.onload = () => {
                vid_pic_obj.url = reader.result;
                vid_pic_obj.type = new_file.type;
                setFile(new_file);
            };
            reader.readAsDataURL(new_file);
        }
    }

    //
    function handleDeleteFile() {
        setFile('');
        setVidPicObj({
            url: '',
            type: '',
        })
    }

    //
    function onUpdate() {
        handleUpdate({
            text: new_text,
            file: file,
            vid_pic_obj: vid_pic_obj,
        });
    }

    //
    return (
        <div className="CmtSubUpdate">
            <div>
                <div className="CmtSubUpdate_main">
                    <div className="CmtSubUpdate_div-textarea brs-5px">
                        <TextareaNotSend
                            text={new_text}
                            placeholder="Write something..."
                            textarea_class="CmtSubUpdate__textarea scroll-thin"
                            onChange={handleChangeText}
                        />
                    </div>

                    <div className="CmtSubUpdate_pic">
                        <div className="CmtSubUpdate_pic-contain">
                            <div className="display-flex justify-content-center">
                                <div className={vid_pic_obj.url ? 'CmtSubUpdate_pic-item brs-5px' : 'display-none'}>
                                    <ImgVidPreviewItem
                                        item_ix={0}
                                        urls={[vid_pic_obj]}
                                        url={vid_pic_obj.url}
                                        type={vid_pic_obj.type}
                                        deleteAnItem={handleDeleteFile}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="CmtSubUpdate_file">
                    <div className="CmtSubUpdate_file-row">
                        <div className="CmtSubUpdate_file-item">
                            <InputFile
                                accept="image/*, video/*"
                                onChange={handleChangeFile}
                            >
                                <IconsInput size_icon="1rem"/>
                            </InputFile>
                        </div>
                    </div>
                </div>

                <div>
                    <ButtonRipple
                        disabled={new_text.trim() + vid_pic_obj.url == ''}
                        onClick={onUpdate}
                    >
                        Update
                    </ButtonRipple>
                </div>
            </div>
        </div>
    );
}

export default CmtSubUpdate;

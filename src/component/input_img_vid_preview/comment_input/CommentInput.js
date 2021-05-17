import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import InputFile from '../../input/input_file/InputFile';
import IconsInput from '../../../_icons_svg/Icons_input/IconsInput';
import ImgVidPreview from '../img_vid_preview/ImgVidPreview';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
import FetchingDiv from '../../some_div/fetching/FetchingDiv';
import Textarea from '../../input/textarea/Textarea';
//
import './CommentInput.scss';

//
CommentInput.propTypes = {
    file_multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    // func send
    handleSend: PropTypes.func,
};

CommentInput.defaultProps = {
    file_multiple: false,
    placeholder: 'Comment...',
};

//
function CommentInput(props) {
    const { file_multiple, placeholder, handleSend } = props;
    //
    const [cmt_obj, setCmtObj] = useState({
        text: '',
        urls: [],
        files: [],
    });
    const [file_reading, setFileReading] = useState(false);
    const [force_render, setForceRender] = useState(false);
    // 
    const ref_comment_input = useRef(null)


    /* -------------------------------- INPUT -------------------------------------- */

    //
    function onChangeCmt(value) {
        setCmtObj((cmt_obj) => ({
            ...cmt_obj,
            text: value,
        }));
    }

    // get urls when choose files
    function getVidPicChange(new_files) {
        const { files, urls } = cmt_obj;
        return new Promise((res) => {
            let i = 1;
            // comment in posts: it allows to choose 1 image or video
            if (!file_multiple) {
                urls.pop();
                files.pop();
            }
            //
            for (const file of new_files) {
                files.push({ [file.type.split('/')[0]]: file });
                const reader = new FileReader();
                reader.onload = () => {
                    urls.push({ url: reader.result, type: file.type });
                };
                reader.readAsDataURL(file);
                //
                if (i == new_files.length) {
                    setTimeout(() => {
                        res();
                    }, 500);
                } else {
                    i += 1;
                }
            }
        });
    }

    // onChange image
    async function onChooseFile(event) {
        const new_files = event.target.files;
        if (new_files.length) {
            setFileReading(true);
            await getVidPicChange(new_files);
            setFileReading(false);
        }
    }

    // delete image video preview
    function deleteAnItemPreview(index) {
        const { files, urls } = cmt_obj;
        files.splice(index, 1);
        urls.splice(index, 1);
        setForceRender(!force_render);
    }

    //
    function onSendCmt() {
        const { text, files, urls } = cmt_obj;
        if (text.trim() || files.length > 0) {
            handleSend(text, files, urls);
            setCmtObj({
                text: '',
                files: [],
                urls: [],
            });
            ref_comment_input.current.querySelector('textarea.Textarea').style.height =
                'auto';
        }
    }

    //
    const { text, urls } = cmt_obj;
    //
    return (
        <div className="CommentInput position-rel">
            <div className="CommentInput_contain position-rel">
                <div className="CommentInput_input" ref={ref_comment_input}>
                    <Textarea
                        text={text}
                        placeholder={placeholder}
                        textarea_class="CommentInput_textarea scroll-thin"
                        onChange={onChangeCmt}
                        handleSend={onSendCmt}
                    />
                </div>

                <div className="CommentInput_files">
                    <div className="CommentInput_files-row">
                        <div className="CommentInput_files-col">
                            <InputFile
                                onChange={onChooseFile}
                                file_multiple={file_multiple}
                                accept="image/*,video/*"
                                title="Choose images/videos"
                            >
                                <IconsInput />
                            </InputFile>
                        </div>

                        <div className="CommentInput_files-col CommentInput__send">
                            <div
                                className={
                                    text.trim() || urls.length
                                        ? 'nav-active'
                                        : ''
                                }
                                onClick={onSendCmt}
                                title="Send message"
                            >
                                <IconsAction x={200} y={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* image video preview */}
            <div className="CommentInput_preview">
                <ImgVidPreview
                    urls={urls || []}
                    show_all={true}
                    deleteAnItem={deleteAnItemPreview}
                    delete_in_pic={true}
                    video_controls={false}
                />
                <FetchingDiv open_fetching={file_reading} />
            </div>
        </div>
    );
}

export default CommentInput;

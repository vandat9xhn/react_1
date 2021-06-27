import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { loadFile } from '../../../_some_function/loadFile';
//
import { useMounted } from '../../../_hooks/useMounted';
//
import IconsInput from '../../../_icons_svg/Icons_input/IconsInput';
import IconsAction from '../../../_icons_svg/icons_action/IconsAction';
//
import InputFile from '../../input/input_file/InputFile';
import ImgVidPreview from '../img_vid_preview/ImgVidPreview';
import FetchingDiv from '../../some_div/fetching/FetchingDiv';
import Textarea from '../../input/textarea/Textarea';
//
import './CommentInput.scss';

//
CommentInput.propTypes = {
    file_multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    handleSend: PropTypes.func,
    deps_reset: PropTypes.any,
};

CommentInput.defaultProps = {
    file_multiple: false,
    placeholder: 'Comment...',
    deps_reset: '',
};

//
function CommentInput(props) {
    const { file_multiple, placeholder, handleSend, deps_reset } = props;

    //
    const [cmt_obj, setCmtObj] = useState({
        text: '',
        urls: [],
        files: [],
        file_reading: false,
    });

    const { text, urls, files, file_reading } = cmt_obj;

    //
    ;
    const ref_comment_input = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        mounted &&
            setCmtObj({
                text: '',
                urls: [],
                files: [],
                file_reading: false,
            });
    }, [deps_reset]);

    /* -------------------------------- INPUT -------------------------------------- */

    //
    function onChangeCmt(value) {
        setCmtObj((cmt_obj) => ({
            ...cmt_obj,
            text: value,
        }));
    }

    //
    async function onChooseFile(event) {
        const new_files = event.target.files;

        if (new_files.length) {
            setCmtObj((cmt_obj) => ({
                ...cmt_obj,
                file_reading: true,
            }));

            const { files: load_files, vid_pics } = await loadFile(
                new_files,
                'url'
            );

            setCmtObj((cmt_obj) => ({
                ...cmt_obj,
                urls: file_multiple ? [...urls, ...vid_pics] : vid_pics,
                files: file_multiple ? [...files, ...load_files] : new_files,
                file_reading: false,
            }));
        }
    }

    //
    function deleteAnItemPreview(index) {
        const new_files = [...files];
        const new_urls = [...urls];

        new_files.splice(index, 1);
        new_urls.splice(index, 1);

        setCmtObj((cmt_obj) => ({
            ...cmt_obj,
            files: new_files,
            urls: new_urls,
        }));
    }

    //
    function onSendCmt() {
        if (text.trim() || files.length) {
            handleSend(text, files, urls);
            setCmtObj({
                text: '',
                files: [],
                urls: [],
            });
            ref_comment_input.current.querySelector(
                'textarea.CommentInput_textarea'
            ).style.height = 'auto';
        }
    }

    //
    return (
        <div className="CommentInput position-rel">
            <div className="CommentInput_contain position-rel">
                <div className="display-flex align-items-center">
                    <div className="CommentInput_input" ref={ref_comment_input}>
                        <div className="display-flex align-items-center">
                            <Textarea
                                text={text}
                                placeholder={placeholder}
                                textarea_class="CommentInput_textarea scroll-thin"
                                onChange={onChangeCmt}
                                handleSend={onSendCmt}
                            />
                        </div>
                    </div>

                    <div className="CommentInput_files">
                        <div className="CommentInput_files-row display-flex-center">
                            <div className="CommentInput_files-col">
                                <InputFile
                                    onChange={onChooseFile}
                                    file_multiple={file_multiple}
                                    accept="image/*,video/*"
                                    title="Choose images/videos"
                                >
                                    <IconsInput size_icon="1rem" />
                                </InputFile>
                            </div>

                            <div className="CommentInput_files-col CommentInput__send">
                                <div
                                    className={`display-flex ${
                                        text.trim() || urls.length
                                            ? 'nav-active'
                                            : ''
                                    }`}
                                    onClick={onSendCmt}
                                >
                                    <IconsAction x={200} y={200} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CommentInput_preview">
                <div className="display-flex">
                    <ImgVidPreview
                        urls={urls || []}
                        show_all={true}
                        deleteAnItem={deleteAnItemPreview}
                        delete_in_pic={true}
                        video_controls={false}
                    />

                    <FetchingDiv is_fetching={file_reading} />
                </div>
            </div>
        </div>
    );
}

export default CommentInput;

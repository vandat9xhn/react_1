import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
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
    old_text: PropTypes.string,
    old_urls: PropTypes.arrayOf(
        PropTypes.shape({
            vid_pic: PropTypes.string,
            type: PropTypes.string,
        })
    ),
    file_multiple: PropTypes.bool,
    placeholder: PropTypes.string,
    handleSend: PropTypes.func,
};

CommentInput.defaultProps = {
    old_text: '',
    old_urls: [],
    file_multiple: false,
    placeholder: 'Comment...',
};

//
function CommentInput({
    old_text = '',
    old_urls = [] || [{ vid_pic: '', type: '' }],
    file_multiple,
    placeholder,

    handleSend,
}) {
    //
    const [state_obj, setStateObj] = useState({
        text: old_text,
        urls: old_urls,
        files: [],
        file_reading: false,
    });

    const { text, urls, files, file_reading } = state_obj;

    //
    const ref_comment_input = useRef(null);

    // -------

    //
    function onChangeCmt(value) {
        setStateObj((state_obj) => ({
            ...state_obj,
            text: value,
        }));
    }

    //
    function handleStartLoadFile() {
        setStateObj((state_obj) => ({
            ...state_obj,
            file_reading: true,
        }));
    }

    //
    function onChooseFile(data_files) {
        const { files: load_files, vid_pics } = data_files;

        setStateObj((state_obj) => ({
            ...state_obj,
            urls: file_multiple ? [...urls, ...vid_pics] : vid_pics,
            files: file_multiple ? [...files, ...load_files] : load_files,
            file_reading: false,
        }));
    }

    //
    function deleteAnItemPreview(index) {
        const new_files = [...files];
        const new_urls = [...urls];

        new_files.splice(index, 1);
        new_urls.splice(index, 1);

        setStateObj((state_obj) => ({
            ...state_obj,
            files: new_files,
            urls: new_urls,
        }));
    }

    //
    function onSendCmt() {
        if (text.trim() || files.length) {
            handleSend(text, files, urls);

            setStateObj({
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
        <div className="CommentInput pos-rel">
            <div className="CommentInput_contain pos-rel padding-right-5px bg-fb">
                <div className="display-flex align-items-center">
                    <div
                        ref={ref_comment_input}
                        className="CommentInput_input flex-grow-1 overflow-hidden"
                    >
                        <div className="display-flex align-items-center">
                            <Textarea
                                text={text}
                                placeholder={placeholder}
                                textarea_class="CommentInput_textarea scroll-thin padding-0"
                                onChange={onChangeCmt}
                                handleSend={onSendCmt}
                            />
                        </div>
                    </div>

                    <div className="CommentInput_files">
                        <div className="CommentInput_files-row display-center align-items-center">
                            <div className="CommentInput_files-col">
                                <InputFile
                                    handleChange={onChooseFile}
                                    handleStartLoadFile={handleStartLoadFile}
                                    file_multiple={file_multiple}
                                    accept="image/*,video/*"
                                    title="Choose images/videos"
                                >
                                    <IconsInput size_icon="1rem" />
                                </InputFile>
                            </div>

                            {IS_MOBILE ? (
                                <div className="CommentInput_files-col">
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
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="CommentInput_preview max-w-100per overflow-x-auto">
                <div className="display-flex">
                    <ImgVidPreview
                        urls={urls}
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

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../../../_icons_svg/Icons_input/IconsInput';
//
import InputFile from '../../../../../../component/input/input_file/InputFile';
import ImgVidPreview from '../../../../../../component/input_img_vid_preview/img_vid_preview/ImgVidPreview';
//
import './PLCommentsInput.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
PLCommentsInput.propTypes = {};

//
function PLCommentsInput({
    img_preview_arr,
    chooseImages,
    deleteImg,
    sendComment,
}) {
    //
    const ref_textarea = useRef(null);

    //
    function onSendComment() {
        const content = ref_textarea.current.value;

        if (content.trim()) {
            sendComment(content);

            ref_textarea.current.value = '';
        }
    }

    //
    return (
        <div className="PLCommentsInput brs-5px border-blur line-16px overflow-hidden">
            <textarea
                ref={ref_textarea}
                className="PLCommentsInput_textarea w-100per padding-10px border-none outline-none scroll-thin"
                rows={5}
                placeholder="Viết bình luận..."
            />

            <div className="flex-between-center padding-x-10px padding-y-5px border-top-blur">
                <div className="display-flex align-items-center">
                    <InputFile
                        name="images"
                        vid_pic_key="url"
                        file_multiple={true}
                        accept="image/**"
                        face_circle={false}
                        should_reset={true}
                        handleChange={chooseImages}
                    >
                        <div className="inline-flex align-items-center text-blue cursor-pointer">
                            <IconsInput size_icon="16px" />

                            <span className="margin-left-5px">Gửi ảnh</span>
                        </div>
                    </InputFile>

                    {IS_MOBILE ? null : (
                        <React.Fragment>
                            <div className="margin-x-10px text-third">|</div>

                            <Link to="/phone-laptop/comment-guide">
                                Quy định đăng bình luận
                            </Link>
                        </React.Fragment>
                    )}
                </div>

                <button
                    className="btn btn-hv btn-active padding-y-6px padding-x-20px brs-3px bg-blue text-white text-upper cursor-pointer"
                    type="button"
                    onClick={onSendComment}
                >
                    Gửi
                </button>
            </div>

            {img_preview_arr.length ? (
                <div className="padding-10px">
                    <ImgVidPreview
                        urls={img_preview_arr}
                        show_all={true}
                        deleteAnItem={deleteImg}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default PLCommentsInput;

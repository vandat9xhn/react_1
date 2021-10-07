import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import InputFile from '../../../../../../../../input/input_file/InputFile';
import IconsInput from '../../../../../../../../../_icons_svg/Icons_input/IconsInput';
import IconsAction from '../../../../../../../../../_icons_svg/icons_action/IconsAction';
//
import CUPostVideoRadio from '../../../../../_components/video_radio/CUPostVideoRadio';
//
import './CUPFVLThumnailUpload.scss';

//
CUPFVLThumnailUpload.propTypes = {};

//
function CUPFVLThumnailUpload({
    thumbnail_ix,
    thumbnail_upload,

    chooseThumbnail,
    changeThumbnailUpload,
    deleteThumbnailUpload,
}) {
    //
    const ref_input = useRef(null);

    // -----

    //
    function clickChange() {
        ref_input.current.click();
    }

    //
    return (
        <div className="CUPFVLThumnailUpload">
            <div>
                <CUPostVideoRadio
                    ix={1}
                    is_active={thumbnail_ix == 1}
                    handleChoose={chooseThumbnail}
                >
                    <div className="cu-post-detail-sub">Upload image</div>
                </CUPostVideoRadio>
            </div>

            {thumbnail_ix == 1 ? (
                <div>
                    <div className="cu-post-detail-info">
                        Upload a high-resolution image that best represents your
                        video.
                    </div>

                    <div className="CUPFVLThumnailUpload_upload margin-top-10px brs-6px border-blur">
                        <div
                            className={`wh-100 font-600 ${
                                thumbnail_upload
                                    ? 'display-none'
                                    : 'display-flex-center'
                            }`}
                        >
                            <InputFile
                                file_multiple={false}
                                accept="image/**"
                                face_circle={false}
                                vid_pic_key="img"
                                handleChange={changeThumbnailUpload}
                            >
                                <div
                                    ref={ref_input}
                                    className="display-flex-center padding-x-10px padding-y-7px brs-6px bg-ccc cursor-pointer hv-bg-hv"
                                >
                                    <IconsInput size_icon="18px" />

                                    <div className="margin-left-10px">
                                        Upload Image
                                    </div>
                                </div>
                            </InputFile>
                        </div>

                        {thumbnail_upload ? (
                            <div className="wh-100 pos-rel">
                                <img
                                    className="wh-100 brs-6px object-fit-cover"
                                    src={thumbnail_upload}
                                    alt=""
                                />

                                <div className="pos-abs right-0 top-0 display-flex padding-10px">
                                    <div
                                        className="display-flex-center padding-y-10px padding-x-15px bg-ccc brs-8px cursor-pointer"
                                        onClick={clickChange}
                                    >
                                        <IconsInput size_icon="16px" />
                                    </div>

                                    <div
                                        className="display-flex-center margin-left-10px padding-y-10px padding-x-15px bg-ccc brs-8px cursor-pointer"
                                        onClick={deleteThumbnailUpload}
                                    >
                                        <IconsAction size_icon="16px" />
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default CUPFVLThumnailUpload;

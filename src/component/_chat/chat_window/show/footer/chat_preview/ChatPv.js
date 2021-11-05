import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconDraw from '../../../../../../_icons_svg/icon_draw/IconDraw';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import ImgVidPreview from '../../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview';
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import './ChatPv.scss';

//
ChatPv.propTypes = {
    current_canvas: PropTypes.string,
    urls: PropTypes.array,
    file_reading: PropTypes.bool,
    deleteCanvasDraw: PropTypes.func,
    deleteAnItemPreview: PropTypes.func,
};

ChatPv.defaultProps = {
    file_reading: false,
};

//
function ChatPv({
    current_canvas,
    urls,
    file_reading,

    letDrawCanvas,
    deleteCanvasDraw,
    deleteAnItemPreview,
}) {
    //
    const [show_preview, setShowPreview] = useState(true);

    //
    function togglePreview() {
        setShowPreview(!show_preview);
    }

    //
    return (
        <div className="ChatPv pos-rel">
            <div
                className={`ChatPv_toggle pos-abs x-center font-500 cursor-pointer hv-opacity ${
                    show_preview ? 'ChatPv_toggle-show' : 'ChatPv_toggle-hide'
                }`}
                onClick={togglePreview}
            >
                {show_preview ? 'Hide' : 'Show'}
            </div>

            <div
                className={`ChatPv_contain pos-rel bg-shadow-8 ${
                    show_preview ? 'ChatPv_show' : 'ChatPv_hide'
                } `}
            >
                <div
                    className={`ChatPv_draw pos-rel margin-5px ${
                        current_canvas ? '' : 'display-none'
                    }`}
                >
                    <img
                        className="brs-8px object-fit-cover"
                        src={current_canvas}
                        alt=""
                        width="60"
                        height="60"
                    />

                    <div className="ChatPv_face pos-abs-100">
                        <div
                            className="ChatPv_face_contain wh-100 brs-8px cursor-pointer"
                            onClick={letDrawCanvas}
                            title="Edit draw"
                        >
                            <IconDraw size_icon="60px" />
                        </div>
                    </div>

                    <div className="ChatPv_close pos-abs-0">
                        <div
                            className="ChatPv_close_contain display-flex-center brs-50 bg-shadow-8 cursor-pointer hv-opacity"
                            onClick={deleteCanvasDraw}
                            title="Delete draw"
                        >
                            <IconsArrow y={400} size_icon="1rem" />
                        </div>
                    </div>
                </div>

                <div className="ChatPv_files margin-5px">
                    <ImgVidPreview
                        urls={urls}
                        show_all={true}
                        deleteAnItem={deleteAnItemPreview}
                        delete_in_pic={true}
                        video_controls={false}
                    />
                </div>

                <div className="ChatPv_fetching">
                    <FetchingDiv is_fetching={file_reading} />
                </div>
            </div>
        </div>
    );
}

export default ChatPv;

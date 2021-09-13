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
                className={`ChatPv_toggle hv-opacity ${
                    show_preview ? 'ÇhatPv_toggle-show' : 'ChatPv_toggle-hide'
                }`}
            >
                <div className="ChatPv_toggle-elm" onClick={togglePreview}>
                    {show_preview ? 'Hide' : 'Show'}
                </div>
            </div>

            <div
                className={`ChatPv_contain pos-rel bg-shadow-9 ${
                    show_preview ? 'ChatPv_show' : 'ChatPv_hide'
                } `}
            >
                <div
                    className={current_canvas ? 'ChatPv_draw' : 'display-none'}
                >
                    <div className="ChatPv__item">
                        <div className="ChatPv__draw-img">
                            <img src={current_canvas} alt="" />
                        </div>

                        <div className="ChatPv__face">
                            <div
                                className="ChatPv__face-elm brs-5px"
                                onClick={letDrawCanvas}
                                title="Edit draw"
                            >
                                <IconDraw size_icon="4rem" />
                            </div>
                        </div>

                        <div className="ChatPv__close">
                            <div
                                className="ChatPv__close-elm hv-opacity brs-50 bg-shadow-9"
                                onClick={deleteCanvasDraw}
                                title="Delete draw"
                            >
                                <IconsArrow y={400} size_icon="1rem" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ChatPv_files">
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

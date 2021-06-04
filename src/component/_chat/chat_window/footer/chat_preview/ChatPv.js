import React from 'react';
import PropTypes from 'prop-types';
//
import IconDraw from '../../../../../_icons_svg/icon_draw/IconDraw';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import ImgVidPreview from '../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview';
import FetchingDiv from '../../../../some_div/fetching/FetchingDiv';
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
function ChatPv(props) {
    const {
        current_canvas,
        urls,
        file_reading,
        
        letDrawCanvas,
        deleteCanvasDraw,
        deleteAnItemPreview,
        
        showPreview,
        show_preview,
    } = props;

    return (
        <div className="ChatPv">
            {/* hide preview */}
            <div
                className={`ChatPv_toggle hv-opacity ${
                    show_preview ? 'ÇhatPv_toggle-show' : 'ChatPv_toggle-hide'
                } ${current_canvas || urls.length ? '' : 'display-none'}`}
            >
                <div className="ChatPv_toggle-elm" onClick={showPreview}>
                    {show_preview ? 'Hide' : 'Show'}
                </div>
            </div>

            <div
                className={`ChatPv_contain bg-loader ${
                    show_preview ? 'ChatPv_show' : 'ChatPv_hide'
                } ${
                    (current_canvas || urls.length) && show_preview
                        ? 'ChatPv_padding-show'
                        : 'ChatPv_padding-hide'
                }`}
            >
                <div
                    className={current_canvas ? 'ChatPv_draw' : 'display-none'}
                >
                    {/* canvas draw */}
                    <div className="ChatPv__item">
                        <div className="ChatPv__draw-img">
                            <img src={current_canvas} alt="" />
                        </div>

                        {/* face for draw */}
                        <div className="ChatPv__face">
                            <div
                                className="ChatPv__face-elm brs-5px"
                                onClick={letDrawCanvas}
                                title="Edit draw"
                            >
                                <IconDraw size_icon="4rem" />
                            </div>
                        </div>

                        {/* delete draw */}
                        <div className="ChatPv__close">
                            <div
                                className="ChatPv__close-elm hv-opacity brs-50 bg-loader"
                                onClick={deleteCanvasDraw}
                                title="Delete draw"
                            >
                                <IconsArrow y={400} size_icon="1rem" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* vid pic */}
                <div className="ChatPv_files">
                    <ImgVidPreview
                        urls={urls}
                        show_all={true}
                        deleteAnItem={deleteAnItemPreview}
                        delete_in_pic={true}
                        video_controls={false}
                    />
                </div>

                {/* loading vid pic */}
                <div className="ChatPv_fetching">
                    <FetchingDiv is_fetching={file_reading} />
                </div>
            </div>
        </div>
    );
}

export default ChatPv;

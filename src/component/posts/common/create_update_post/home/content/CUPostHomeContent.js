import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import ImgVidPreview from '../../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview';
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import './CUPostHomeContent.scss';
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
CUPostHomeContent.propTypes = {};

//
function CUPostHomeContent({
    last_name,
    main_content,
    urls_preview,
    is_loading,
    //
    handleChangeMainContent,
    showFixAll,
    delAllVidPic,
}) {
    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        if (ref_main_elm.current) {
            const textarea = ref_main_elm.current.getElementsByClassName(
                'CUPostHomeContent_textarea'
            )[0];

            if (textarea.value) {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            }
        }
    }, [urls_preview.length > 0]);

    //
    return (
        <div
            ref={ref_main_elm}
            className="CUPostHomeContent brs-5px-md scroll-thin"
        >
            <div className="CUPostHomeContent_input">
                <TextareaNotSend
                    text={main_content}
                    placeholder={`What's on your mind, ${last_name}?`}
                    textarea_class={`CUPostHomeContent_textarea w-100per outline-none border-none padding-8px ${
                        urls_preview.length ? '' : 'font-24px'
                    }`}
                    onChange={handleChangeMainContent}
                />
            </div>

            <div
                className={`CUPostHomeContent_preview pos-rel ${
                    urls_preview.length ? '' : 'display-none'
                }`}
            >
                <div className="CUPostHomeContent_preview_contain brs-5px">
                    <ImgVidPreview
                        urls={urls_preview}
                        use_vid_pic_grid={true}
                    />
                </div>

                <div className="CUPostHomeContent_preview_bg pos-abs-100 bg-shadow-1 display-none"></div>

                <div className="CUPostHomeContent_loading pos-abs x-center top-0 padding-top-20px">
                    <FetchingDiv is_fetching={is_loading} />
                </div>

                <div className="CUPostHomeContent_fix display-none">
                    <button
                        className="CUPostHomeContent_edit pos-abs display-flex-center padding-x-12px padding-y-6px bg-primary brs-4px btn font-600 cursor-pointer hv-bg-blur"
                        type="button"
                        onClick={showFixAll}
                    >
                        <IconsEdit size_icon="16px" color="currentColor" />

                        <span className="margin-left-5px">Edit All</span>
                    </button>

                    <button
                        className="CUPostHomeContent_del pos-abs display-flex-center padding-0px brs-50 bg-primary btn cursor-pointer hv-bg-blur"
                        type="button"
                        onClick={delAllVidPic}
                    >
                        <IconsArrow y={400} size_icon="15px" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeContent;

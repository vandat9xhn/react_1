import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { getBgColorOrImg } from '../../../../../../_some_function/getBgColorOrImg';
// 
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ImgVidPreview from '../../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview';
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import CUPostHomeBg from '../bg_color/_main/CUPostHomeBg';
//
import './CUPostHomeContent.scss';

//
CUPostHomeContent.propTypes = {};

//
function CUPostHomeContent({
    last_name,
    main_content,
    vid_pics,
    has_vid_pic,

    bg_arr,
    bg_ix,
    is_loading,

    handleChangeMainContent,
    handleChooseBg,
    openBg,
    openFixAll,
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
    }, [has_vid_pic]);

    // ----

    //
    function focusTextarea() {
        ref_main_elm.current.getElementsByTagName('textarea')[0].focus();
    }

    //
    return (
        <div ref={ref_main_elm} className="CUPostHomeContent pos-rel brs-5px">
            <div
                className={`CUPostHomeContent_input brs-4px ${
                    bg_ix >= 1
                        ? 'CUPostHomeContent_input-bg display-flex-center'
                        : has_vid_pic
                        ? 'CUPostHomeContent_input-img'
                        : ''
                }`}
                style={{
                    ...getBgColorOrImg({
                        is_bg_img: bg_arr[bg_ix].is_bg_img,
                        bg: bg_arr[bg_ix].bg,
                    }),
                    color: bg_arr[bg_ix].color,
                }}
                onClick={focusTextarea}
            >
                <TextareaNotSend
                    text={main_content}
                    placeholder={`What's on your mind, ${last_name}?`}
                    textarea_class={`CUPostHomeContent_textarea w-100per outline-none border-none padding-8px ${
                        has_vid_pic ? '' : 'font-24px'
                    }`}
                    onChange={handleChangeMainContent}
                />
            </div>

            {has_vid_pic ? null : (
                <div className="pos-abs bottom-0 left-0 max-w-100per padding-x-10px padding-bottom-10px">
                    <CUPostHomeBg
                        bg_arr={bg_arr}
                        bg_ix={bg_ix}
                        handleChooseBg={handleChooseBg}
                        openBg={openBg}
                    />
                </div>
            )}

            <div
                className={`CUPostHomeContent_preview pos-rel ${
                    has_vid_pic ? '' : 'display-none'
                }`}
            >
                <div className="CUPostHomeContent_preview_contain brs-5px">
                    <ImgVidPreview urls={vid_pics} use_vid_pic_grid={true} />
                </div>

                <div className="CUPostHomeContent_preview_bg pos-abs-100 bg-shadow-1 display-none"></div>

                <div className="CUPostHomeContent_loading pos-abs x-center top-0 padding-top-20px">
                    <FetchingDiv is_fetching={is_loading} />
                </div>

                <div className="CUPostHomeContent_fix display-none">
                    <button
                        className="CUPostHomeContent_edit pos-abs display-flex-center padding-x-12px padding-y-6px bg-primary brs-4px btn font-600 cursor-pointer hv-bg-blur"
                        type="button"
                        onClick={openFixAll}
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

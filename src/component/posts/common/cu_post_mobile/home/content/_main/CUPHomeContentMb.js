import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { makeElmAutoHeight } from '../../../../../../../_some_function/makeAutoHeight';
import { getBgColorOrImg } from '../../../../../../../_some_function/getBgColorOrImg';
//
import TextareaNotSend from '../../../../../../input/textarea/TextareaNotSend';
//
import PostBgChoice from '../../../../bg_choice/PostBgChoice';
//
import './CUPHomeContentMb.scss';

//
CUPHomeContentMb.propTypes = {};

//
function CUPHomeContentMb({
    main_content,
    vid_pic_count,
    bg_arr,
    bg_ix,

    changeMainContent,
    handleChooseBg,
}) {
    //
    const ref_textarea = useRef(null);

    //
    useEffect(() => {
        makeElmAutoHeight(
            ref_textarea.current.getElementsByTagName('textarea')[0]
        );
    }, [bg_ix >= 1]);

    //
    return (
        <div className="CUPHomeContentMb border-blur">
            <div
                ref={ref_textarea}
                className={`CUPHomeContentMb_input ${
                    bg_ix >= 1
                        ? 'CUPHomeContentMb_input-bg display-flex-center font-600 font-16px'
                        : 'CUPHomeContentMb_input-color'
                }`}
                style={{
                    ...getBgColorOrImg({
                        is_bg_img: bg_arr[bg_ix].is_bg_img,
                        bg: bg_arr[bg_ix].bg,
                    }),
                    color: bg_arr[bg_ix].color,
                }}
            >
                <TextareaNotSend
                    text={main_content}
                    placeholder="What's on your mind?"
                    textarea_class="CUPHomeContentMb_textarea padding-5px"
                    onChange={changeMainContent}
                />
            </div>

            {vid_pic_count ? null : (
                <div className="padding-y-10px padding-x-8px">
                    <div className="display-flex overflow-x-auto scroll-height-0">
                        {bg_arr.map((item, ix) => (
                            <div
                                key={ix}
                                className="CUPHomeContentMb_bg_item flex-shrink-0 margin-x-8px"
                            >
                                <PostBgChoice
                                    ix={ix}
                                    is_active={ix == bg_ix}
                                    is_bg_img={item.is_bg_img}
                                    bg={item.bg}
                                    handleChooseBg={handleChooseBg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CUPHomeContentMb;

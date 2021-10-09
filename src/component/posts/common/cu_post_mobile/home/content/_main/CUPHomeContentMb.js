import React from 'react';
import PropTypes from 'prop-types';
//
import TextareaNotSend from '../../../../../../input/textarea/TextareaNotSend';
//
import CUPHomeBgItemMb from '../bg_item/CUPHomeBgItemMb';
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
    return (
        <div className="CUPHomeContentMb border-blur">
            <div
                className={`CUPHomeContentMb_input ${
                    bg_ix >= 1
                        ? 'CUPHomeContentMb_input-bg display-flex-center font-600 font-16px'
                        : 'CUPHomeContentMb_input-color'
                }`}
                style={{
                    backgroundColor: bg_arr[bg_ix].is_bg_img
                        ? undefined
                        : bg_arr[bg_ix].bg,
                    backgroundImage: bg_arr[bg_ix].is_bg_img
                        ? `url(${bg_arr[bg_ix].bg})`
                        : undefined,
                }}
            >
                <TextareaNotSend
                    text={main_content}
                    placeholder="What's on your mind?"
                    textarea_class="CUPHomeContentMb_textarea padding-5px"
                    onChange={changeMainContent}
                    textarea_props={{
                        style: {
                            color: bg_arr[bg_ix].color,
                        },
                    }}
                />
            </div>

            {vid_pic_count ? null : (
                <div className="padding-y-10px padding-x-8px">
                    <div className="display-flex overflow-x-auto scroll-height-0">
                        {bg_arr.map((item, ix) => (
                            <div key={ix} className="padding-x-8px">
                                <CUPHomeBgItemMb
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

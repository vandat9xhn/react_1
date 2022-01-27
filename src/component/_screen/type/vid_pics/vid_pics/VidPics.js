import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { scrollItemToCenter } from '../../../../../_some_function/scrollItemToCenter';
import { getTypeVidOrPic } from '../../../../../_some_function/VideoOrImage';
//
import Video from '../../../../vid_pic/video/_main/Video';
import VidPicItem from '../vid_pic_item/VidPicItem';
//
import './VidPics.scss';

//
function getVidPicItem(item) {
    return item.url || item.vid_pic || item;
}

//
VidPics.propTypes = {
    urls: PropTypes.array,
    current: PropTypes.number,
};

VidPics.defaultProps = {
    urls: [],
    current: 0,
};

//
function VidPics({ urls, current, changeCurrent }) {
    //
    const vid_pic = getVidPicItem(urls[current]);
    const video_or_img = getTypeVidOrPic(vid_pic, urls[current].type);

    //
    const ref_all = useRef(null);

    //
    useEffect(() => {
        scrollAllToCenter({ scroll_smooth: false });
    }, []);

    //
    useEffect(() => {
        if (!IS_MOBILE) {
            scrollAllToCenter({ scroll_smooth: true });
        }
    }, [current]);

    // -----

    //
    function scrollAllToCenter({ scroll_smooth = false }) {
        if (urls.length <= 1) {
            return;
        }

        const c_vid_pic =
            ref_all.current.getElementsByClassName('VidPicItem_item')[current];

        scrollItemToCenter({
            scroll_elm: ref_all.current,
            item_elm: c_vid_pic,
            scroll_smooth: scroll_smooth,
        });
    }

    //
    return (
        <div className="VidPics pos-rel wh-100 z-index-lv5">
            <div className="VidPics_blur wh-100 pos-abs">
                <div
                    className="VidPics_blur_img wh-100"
                    style={{
                        backgroundImage: `url(${
                            video_or_img == 'img'
                                ? vid_pic
                                : urls[current].thumbnail
                        })`,
                    }}
                ></div>
            </div>

            <div className="VidPics_bg wh-100 pos-abs bg-shadow-9"></div>

            <div className="VidPics_current">
                <div className="VidPics_current_contain display-flex-center wh-100">
                    {video_or_img == 'img' ? (
                        <img
                            className="VidPics_current_img"
                            src={vid_pic}
                            alt=""
                        />
                    ) : (
                        <Video video={vid_pic} />
                    )}
                </div>
            </div>

            <div className={urls.length > 1 ? 'VidPics_all' : 'display-none'}>
                <div
                    ref={ref_all}
                    className="VidPics_all_contain scroll-height-0"
                >
                    <div className="VidPics_all_row display-flex">
                        {urls.map((item, ix) => (
                            <VidPicItem
                                key={ix}
                                item_ix={ix}
                                is_active={current == ix}
                                //
                                url={getVidPicItem(item)}
                                type={getTypeVidOrPic(item, item.type)}
                                changeCurrent={changeCurrent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VidPics;

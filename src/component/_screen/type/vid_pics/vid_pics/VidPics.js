import React from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../../../_some_function/VideoOrImage';
//
import './VidPics.scss';
//
import VidPicItem from '../vid_pic_item/VidPicItem';

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
    return (
        <div className="VidPics position-rel wh-100">
            <div className="VidPics_blur wh-100 position-abs">
                <div
                    className="VidPics_blur-img wh-100"
                    style={{
                        backgroundImage: `url(${
                            urls[current].url ||
                            urls[current].vid_pic ||
                            urls[current]
                        })`,
                    }}
                ></div>
            </div>
            
            <div className="VidPics_bg wh-100 position-abs bg-loader"></div>

            <div className="VidPics_current">
                <div className="VidPics_current-contain display-flex-center wh-100">
                    {VideoOrImage(
                        urls[current].url || urls[current].vid_pic,
                        urls[current].type,
                        <video
                            src={urls[current].url}
                            alt=""
                            controls
                            preload="metadata"
                        />
                    )}
                </div>
            </div>

            <div className={urls.length > 1 ? 'VidPics_all' : 'display-none'}>
                <div className="VidPics_all-contain">
                    <div className="VidPics_all-row display-flex">
                        {urls.map((item, index) => (
                            <VidPicItem
                                key={`VidPics_${index}`}
                                item_ix={index}
                                is_active={current == index}
                                changeCurrent={changeCurrent}
                                url={item.url || item.vid_pic}
                                type={item.type}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VidPics;

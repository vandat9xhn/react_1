import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../_some_function/VideoOrImage';
//
import './VidPics.scss';
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
function VidPics(props) {
    //
    const { urls, current, changeCurrent } = props;

    //
    return (
        <div className="VidPics">
            <div className="VidPics_contain">
                {/* bg blur */}
                <div className="VidPics_blur">
                    <div
                        className="VidPics_blur-img"
                        style={{ backgroundImage: `url(${urls[current].url})` }}
                    ></div>
                </div>
                <div className="VidPics_bg bg-loader"></div>

                {/* current */}
                <div className="VidPics_current">
                    <div className="VidPics_current-contain">
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

                {/* all */}
                <div
                    className={urls.length > 1 ? 'VidPics_all' : 'display-none'}
                >
                    <div className="VidPics_all-contain">
                        <div className="VidPics_all-row">
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
        </div>
    );
}


export default VidPics;

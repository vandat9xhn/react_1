import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../../_context/ContextAPI';
//
import { VideoOrImage } from '../../../../../../../../../_some_function/VideoOrImage';
//
import { openScreenVidPic } from '../../../../../../../../../component/_screen/type/vid_pics/_main/ZoomVidPics';
// 
import './FashionRateVidPic.scss';

//
FashionRateVidPic.propTypes = {};

//
function FashionRateVidPic({ vid_pics }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function handleZoomVidPics(vid_pic_ix) {
        openScreenVidPic({
            openScreenFloor: openScreenFloor,
            urls: vid_pics,
            current: vid_pic_ix,
        });
    }

    //
    return (
        <div className="FashionRateVidPic">
            <div className="FashionRateVIdPic_row display-flex">
                {vid_pics.map((vid_pic, vid_pic_ix) => (
                    <div
                        key={`${vid_pic_ix}`}
                        className="FashionRateVidPic_image"
                        onClick={() => handleZoomVidPics(vid_pic_ix)}
                    >
                        {VideoOrImage(
                            vid_pic.vid_pic || vid_pic.url,
                            vid_pic.vid_pic || vid_pic.type
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionRateVidPic;

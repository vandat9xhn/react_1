import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicObserve from '../../../vid_pic/observe/VidPicObserve';
// 
import './BgImgItem.scss';

//
BgImgItem.propTypes = {};

//
function BgImgItem({ ix, is_active, bg_img, handleChooseBg }) {
    //
    function onChooseBg() {
        handleChooseBg(ix);
    }

    //
    return (
        <VidPicObserve
            vid_pic={bg_img}
            type="img"
            img_props={{
                onClick: onChooseBg,

                className: `BgImgItem wh-100 brs-50 ${
                    is_active
                        ? 'BgImgItem-active pointer-events-none'
                        : 'BgImgItem-inactive cursor-pointer'
                }`,
            }}
        />
    );
}

export default BgImgItem;

import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicObserve from '../../../../component/vid_pic/observe/VidPicObserve';

//
FsFaceVidPic.propTypes = {
    img: PropTypes.string,
    flash_img: PropTypes.string,
};

//
function FsFaceVidPic({ img, flash_img }) {
    //
    return (
        <React.Fragment>
            <VidPicObserve
                vid_pic={img}
                type="img"
                img_props={{
                    className: 'pos-abs-100 wh-100 object-fit-cover',
                }}
            />

            {flash_img ? (
                <VidPicObserve
                    vid_pic={flash_img}
                    type="img"
                    img_props={{
                        className: 'pos-abs-100 wh-100',
                    }}
                />
            ) : null}
        </React.Fragment>
    );
}

export default FsFaceVidPic;

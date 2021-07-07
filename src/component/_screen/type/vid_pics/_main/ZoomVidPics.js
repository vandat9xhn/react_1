import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import VidPics from '../vid_pics/VidPics';
import ScreenFixed from '../../../components/frame/has_title/_main/ScreenFixed';
// 
import './ZoomVidPics.scss';

//
export function openScreenVidPic({
    openScreenFloor,

    urls,
    current,
}) {
    openScreenFloor({
        FloorComponent: ZoomVidPics,
        urls: urls,
        current: current,
    });
}

//
ZoomVidPics.propTypes = {
    closeScreen: PropTypes.func,
    urls: PropTypes.array,
    current: PropTypes.number,
};

ZoomVidPics.defaultProps = {
    current: 0,
};

//
function ZoomVidPics({ closeScreen, urls, current: initial_current }) {
    //
    const [vid_pic_state, setVidPicState] = useState({
        current: initial_current,
    });

    const { current } = vid_pic_state;

    //
    function changeCurrent(new_current) {
        setVidPicState({
            ...vid_pic_state,
            current: new_current,
        });
    }

    //
    return (
        <div className="ZoomVidPics">
            <ScreenFixed url={urls[current].url} closeScreenFixed={closeScreen}>
                <VidPics
                    urls={urls}
                    current={current}
                    changeCurrent={changeCurrent}
                />
            </ScreenFixed>
        </div>
    );
}

export default ZoomVidPics;

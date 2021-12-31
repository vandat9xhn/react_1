import React from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../_some_function/VideoOrImage';
//
import './PicSquareDiv.scss';

//
PicSquareDiv.propTypes = {
    vid_pic: PropTypes.string,
};

//
function PicSquareDiv({ vid_pic }) {
    //
    return (
        <div className="PicSquareDiv pos-rel w-100per padding-top-100per brs-8px border-blur overflow-hidden">
            <div className="pos-abs-100">{VideoOrImage(vid_pic, '')}</div>
        </div>
    );
}

export default PicSquareDiv;

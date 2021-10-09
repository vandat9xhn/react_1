import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';
//
import CUPostBtnPreviewMb from '../btn_preview/CUPostBtnPreviewMb';

//
CUPostVideoPreviewMb.propTypes = {};

//
function CUPostVideoPreviewMb({ video, video_size, handleDel }) {
    //
    return (
        <div className="CUPostVideoPreviewMb pos-rel wh-100 brs-6px overflow-hidden">
            <video
                className="wh-100 object-fit-cover"
                src={video}
                alt=""
                preload="metadata"
            />

            <div className="pos-abs-100 bg-shadow-2"></div>

            <div className="pos-abs top-0 right-0 padding-5px">
                <CUPostBtnPreviewMb handleClick={handleDel}>
                    <IconsAction size_icon="14px" />
                </CUPostBtnPreviewMb>
            </div>

            <div className="pos-abs bottom-0 left-0 w-100per">
                <div className="display-flex-center padding-5px bg-shadow-5 text-white font-400 font-12px">
                    {video_size}
                </div>
            </div>
        </div>
    );
}

export default CUPostVideoPreviewMb;

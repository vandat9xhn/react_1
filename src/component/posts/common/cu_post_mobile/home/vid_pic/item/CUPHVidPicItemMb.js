import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostPhotoPreviewMb from '../../../_components/photo_preview/CUPostPhotoPreviewMb';
import CUPostVideoPreviewMb from '../../../_components/video_preview/CUPostVideoPreviewMb';
// 
import './CUPHVidPicItemMb.scss';

//
CUPHVidPicItemMb.propTypes = {};

//
function CUPHVidPicItemMb({
    ix,
    
    type,
    vid_pic,
    size,

    handleDel,
    openEditPhoto,
}) {
    //
    function handleEdit() {
        openEditPhoto(ix);
    }

    //
    function onDel() {
        handleDel(ix);
    }

    //
    return (
        <div className="CUPHVidPicItemMb">
            {type.startsWith('image') ? (
                <CUPostPhotoPreviewMb
                    img={vid_pic}
                    handleEdit={handleEdit}
                    handleDel={onDel}
                />
            ) : (
                <CUPostVideoPreviewMb
                    video={vid_pic}
                    video_size={size}
                    handleDel={onDel}
                />
            )}
        </div>
    );
}

export default CUPHVidPicItemMb;

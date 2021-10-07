import React from 'react';
import PropTypes from 'prop-types';
//
import TextareaCaption from '../../../../../../../input/textarea_caption/TextareaCaption';
//
import CUPFVideoLeftThumbnail from '../thumbnail/_main/CUPFVideoLeftThumbnail';
import CUPFVideoLeftSrt from '../srt/CUPFVideoLeftSrt';

//
CUPFixVideoLeft.propTypes = {};

//
function CUPFixVideoLeft({
    caption,
    vid_pic_count,
    thumbnail_ix,
    thumbnail_upload,

    handleChangeCaption,
    handleChangeSrt,

    chooseThumbnail,
    changeThumbnailUpload,
    deleteThumbnailUpload,
}) {
    //
    return (
        <div className="CUPFixVideoLeft display-flex flex-col">
            {vid_pic_count > 1 ? (
                <div className="CUPFixVideoLeft_part margin-bottom-15px">
                    <TextareaCaption
                        caption="Caption"
                        value={caption}
                        onChange={handleChangeCaption}
                    />
                </div>
            ) : null}

            <div className="CUPFixVideoLeft_part margin-bottom-15px">
                <CUPFVideoLeftThumbnail
                    thumbnail_ix={thumbnail_ix}
                    thumbnail_upload={thumbnail_upload}
                    //
                    chooseThumbnail={chooseThumbnail}
                    changeThumbnailUpload={changeThumbnailUpload}
                    deleteThumbnailUpload={deleteThumbnailUpload}
                />
            </div>

            <div>
                <CUPFVideoLeftSrt handleChangeSrt={handleChangeSrt} />
            </div>
        </div>
    );
}

export default CUPFixVideoLeft;

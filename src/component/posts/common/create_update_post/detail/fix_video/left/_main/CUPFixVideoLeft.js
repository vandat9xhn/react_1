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
    thumbnail_suggested_arr,
    thumbnail_suggested_ix,

    handleChangeCaption,
    handleChangeSrt,

    chooseThumbnail,
    changeThumbnailUpload,
    deleteThumbnailUpload,
    nextThumbnailSuggested,
    prevThumbnailSuggested,
}) {
    //
    return (
        <div className="CUPFixVideoLeft display-flex flex-col">
            {vid_pic_count > 1 ? (
                <div className="CUPFixVideoLeft_part margin-bottom-15px">
                    <TextareaCaption
                        textarea_class="padding-x-16px padding-y-3px scroll-thin"
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
                    thumbnail_suggested_arr={thumbnail_suggested_arr}
                    thumbnail_suggested_ix={thumbnail_suggested_ix}
                    //
                    chooseThumbnail={chooseThumbnail}
                    changeThumbnailUpload={changeThumbnailUpload}
                    deleteThumbnailUpload={deleteThumbnailUpload}
                    nextThumbnailSuggested={nextThumbnailSuggested}
                    prevThumbnailSuggested={prevThumbnailSuggested}
                />
            </div>

            <div>
                <CUPFVideoLeftSrt handleChangeSrt={handleChangeSrt} />
            </div>
        </div>
    );
}

export default CUPFixVideoLeft;

import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../../../_hooks/useBool';
//
import CUPostFixChoice from '../../../../../_components/fix_choice/CUPostFixChoice';
import CUPFVLThumnailUpload from '../upload/CUPFVLThumnailUpload';
import CUPFVLThumnailSuggested from '../suggested/CUPFVLThumnailSuggested';
import CUPFVLThumnailVideo from '../from_video/CUPFVLThumnailVideo';

//
CUPFVideoLeftThumbnail.propTypes = {};

//
function CUPFVideoLeftThumbnail({
    thumbnail_ix,
    thumbnail_upload,
    thumbnail_suggested_arr,
    thumbnail_suggested_ix,

    chooseThumbnail,
    changeThumbnailUpload,
    deleteThumbnailUpload,
    nextThumbnailSuggested,
    prevThumbnailSuggested,
}) {
    //
    const { is_true, toggleBool } = useBool();

    //
    return (
        <div className="CUPFVideoLeftThumbnail">
            <div className="font-17px font-600">
                <CUPostFixChoice
                    title="Change thumbnail"
                    Icon={null}
                    ix={0}
                    is_active={is_true}
                    has_sub={true}
                    clickFixChoice={toggleBool}
                />
            </div>

            {is_true ? (
                <div className="margin-top-15px">
                    <div>
                        <CUPFVLThumnailSuggested
                            thumbnail_ix={thumbnail_ix}
                            thumbnail_suggested_arr={thumbnail_suggested_arr}
                            thumbnail_suggested_ix={thumbnail_suggested_ix}
                            //
                            chooseThumbnail={chooseThumbnail}
                            nextThumbnailSuggested={nextThumbnailSuggested}
                            prevThumbnailSuggested={prevThumbnailSuggested}
                        />
                    </div>

                    <div>
                        <CUPFVLThumnailUpload
                            thumbnail_ix={thumbnail_ix}
                            thumbnail_upload={thumbnail_upload}
                            //
                            chooseThumbnail={chooseThumbnail}
                            changeThumbnailUpload={changeThumbnailUpload}
                            deleteThumbnailUpload={deleteThumbnailUpload}
                        />
                    </div>

                    <div>
                        <CUPFVLThumnailVideo
                            thumbnail_ix={thumbnail_ix}
                            chooseThumbnail={chooseThumbnail}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default CUPFVideoLeftThumbnail;

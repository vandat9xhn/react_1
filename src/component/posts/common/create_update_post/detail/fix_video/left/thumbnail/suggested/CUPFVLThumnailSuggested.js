import React from 'react';
import PropTypes from 'prop-types';
//
import BtnNexPrev from '../../../../../../../../button/next_prev/BtnNexPrev';
//
import CUPostVideoRadio from '../../../../../_components/video_radio/CUPostVideoRadio';
//
import './CUPFVLThumnailSuggested.scss';

//
CUPFVLThumnailSuggested.propTypes = {};

//
function CUPFVLThumnailSuggested({
    thumbnail_ix,
    thumbnail_suggested_arr,
    thumbnail_suggested_ix,

    chooseThumbnail,
    nextThumbnailSuggested,
    prevThumbnailSuggested,
}) {
    //
    return (
        <div className="CUPFVLThumnailSuggested">
            <div>
                <CUPostVideoRadio
                    ix={0}
                    is_active={thumbnail_ix == 0}
                    handleChoose={chooseThumbnail}
                >
                    <div className="cu-post-detail-sub">Choose suggested</div>
                </CUPostVideoRadio>
            </div>

            {thumbnail_ix == 0 ? (
                <div className="padding-top-15px">
                    <div className="cu-post-detail-info margin-y-15px">
                        Choose one of these suggested images to show before your
                        video starts playing.
                    </div>

                    <div className="CUPFVLThumnailSuggested_thumbnail pos-rel margin-top-10px brs-6px border-blur">
                        <img
                            className="wh-100 object-fit-cover brs-6px"
                            src={thumbnail_suggested_arr[thumbnail_suggested_ix]}
                            alt=""
                        />

                        <div className="pos-abs bottom-0 right-0 display-flex padding-10px">
                            <BtnNexPrev
                                is_next={false}
                                btn_class={`CUPFVLThumnailSuggested_btn ${
                                    thumbnail_suggested_ix <= 0
                                        ? 'CUPFVLThumnailSuggested_btn-disable'
                                        : 'CUPFVLThumnailSuggested_btn-active'
                                }`}
                                size_icon="16px"
                                disabled={thumbnail_suggested_ix == 0}
                                handleClick={prevThumbnailSuggested}
                            />

                            <BtnNexPrev
                                is_next={true}
                                btn_class={`CUPFVLThumnailSuggested_btn margin-left-10px ${
                                    thumbnail_suggested_ix >=
                                    thumbnail_suggested_arr.length - 1
                                        ? 'CUPFVLThumnailSuggested_btn-disable'
                                        : 'CUPFVLThumnailSuggested_btn-active'
                                }`}
                                size_icon="16px"
                                disabled={
                                    thumbnail_suggested_ix >=
                                    thumbnail_suggested_arr - 1
                                }
                                handleClick={nextThumbnailSuggested}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default CUPFVLThumnailSuggested;

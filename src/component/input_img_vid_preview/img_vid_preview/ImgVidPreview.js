import React from 'react';
import PropTypes from 'prop-types';
//
import ImgVidPreviewItem from './_item/ImgVidPreviewItem';
//
import './ImgVidPreview.scss';

//
function ImgVidPreview({
    urls,
    show_all,
    vid_pic_count,

    video_controls,
    video_preload,

    deleteAnItem,
}) {
    //
    const count_url = urls.length;

    //
    return (
        <div
            className={`ImgVidPreview ${vid_pic_count ? 'VidPics_count' : ''}`}
        >
            {(show_all ? urls : urls.slice(0, 4)).map((item, index) => (
                <div
                    key={`image_preview_${index}`}
                    className={`ImgVidPreview__elm ${
                        vid_pic_count
                            ? `VidPics_count_${count_url > 4 ? 5 : count_url}`
                            : ''
                    }`}
                    data-length={
                        index == 3 && count_url > 4 ? count_url - 4 : undefined
                    }
                >
                    <ImgVidPreviewItem
                        item_ix={index}
                        urls={urls}
                        url={item.url || item.vid_pic}
                        type={item.type}
                        deleteAnItem={deleteAnItem}
                        video_controls={video_controls}
                        video_preload={video_preload}
                    />
                </div>
            ))}
        </div>
    );
}

//
ImgVidPreview.propTypes = {
    urls: PropTypes.array,
    show_all: PropTypes.bool,
    vid_pic_count: PropTypes.bool,

    deleteAnItem: PropTypes.func,

    video_controls: PropTypes.bool,
    video_preload: PropTypes.string,
};

ImgVidPreview.defaultProps = {
    show_all: false,
    delete_in_pic: false,

    vid_pic_count: false,
};

export default ImgVidPreview;

import React from 'react';
import PropTypes from 'prop-types';
//
import ImgVidPreview from '../../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview';
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import './CUPostHomeContent.scss';

//
CUPostHomeContent.propTypes = {};

//
function CUPostHomeContent({
    main_content,
    urls_preview,
    is_loading,
    //
    showFixAll,
    handleChangeMainContent,
    // deleteAnItem,
}) {
    //
    return (
        <div className="CUPostHomeContent brs-5px-md scroll-thin">
            <div className="CUPostHomeContent_input">
                <div className="CUPostHomeContent_input_contain brs-5px">
                    <textarea
                        className="CUPostHomeContent__textarea scroll-thin"
                        rows="4"
                        value={main_content}
                        placeholder=""
                        onChange={handleChangeMainContent}
                    />
                </div>
            </div>

            <div className="CUPostHomeContent_preview">
                <div className="CUPostHomeContent_preview_contain brs-5px">
                    <ImgVidPreview
                        urls={urls_preview}
                        vid_pic_count={true}
                        // deleteAnItem={deleteAnItem}
                    />
                </div>

                <div className="CUPostHomeContent_loading">
                    <FetchingDiv is_fetching={is_loading} />
                </div>

                <h3
                    className={`display-none margin-0 ${
                        urls_preview.length
                            ? 'CUPostHomeContent__fixAll pos-abs-0 bg-loader brs-5px hv-opacity text-white cursor-pointer'
                            : ''
                    }`}
                    onClick={showFixAll}
                >
                    Fix All
                </h3>

                <div
                    className={
                        urls_preview.length == 0
                            ? 'CUPostHomeContent__no-pic pos-abs-center w-100per'
                            : 'display-none'
                    }
                >
                    <h2 className="text-align-center text-secondary font-500">
                        No picture, video
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeContent;

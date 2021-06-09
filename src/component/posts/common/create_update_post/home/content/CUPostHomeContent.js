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
function CUPostHomeContent(props) {
    const {
        main_content,
        urls_preview,
        is_loading,
        //
        showFixAll,
        handleChangeMainContent,
        deleteAnItem,
    } = props;

    //
    return (
        <div className="CUPostHomeContent scroll-thin">
            <div className="CUPostHomeContent_input">
                <div className="CUPostHomeContent_input-contain brs-5px">
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
                <div className="CUPostHomeContent_preview-contain brs-5px">
                    <ImgVidPreview
                        urls={urls_preview}
                        vid_pic_count={true}
                        deleteAnItem={deleteAnItem}
                    />
                </div>

                <div className="CUPostHomeContent_loading">
                    <FetchingDiv is_fetching={is_loading} />
                </div>

                <div
                    className={
                        urls_preview.length
                            ? 'CUPostHomeContent__fixAll brs-5px hv-opacity'
                            : 'display-none'
                    }
                    onClick={showFixAll}
                >
                    Fix All
                </div>

                <div
                    className={
                        urls_preview.length == 0
                            ? 'CUPostHomeContent__no-pic'
                            : 'display-none'
                    }
                >
                    No picture, video
                </div>
            </div>
        </div>
    );
}

export default CUPostHomeContent;

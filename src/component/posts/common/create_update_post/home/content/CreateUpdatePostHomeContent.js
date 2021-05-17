import React from 'react';
import PropTypes from 'prop-types';
//
import ImgVidPreview from '../../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview';
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import './CreateUpdatePostHomeContent.scss';

//
CreateUpdatePostHomeContent.propTypes = {};

//
function CreateUpdatePostHomeContent(props) {
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
        <div className="CreateUpdatePostHomeContent scroll-thin">
            <div className="CreateUpdatePostHomeContent_input">
                <div className="CreateUpdatePostHomeContent_input-contain brs-5px">
                    <textarea
                        className="CreateUpdatePostHomeContent__textarea scroll-thin"
                        rows="4"
                        value={main_content}
                        placeholder=""
                        onChange={handleChangeMainContent}
                    />
                </div>
            </div>

            <div className="CreateUpdatePostHomeContent_preview">
                <div className="CreateUpdatePostHomeContent_preview-contain brs-5px">
                    <ImgVidPreview
                        urls={urls_preview}
                        vid_pic_count={true}
                        deleteAnItem={deleteAnItem}
                    />
                </div>

                <div className="CreateUpdatePostHomeContent_loading">
                    <FetchingDiv open_fetching={is_loading} />
                </div>

                <div
                    className={
                        urls_preview.length
                            ? 'CreateUpdatePostHomeContent__fixAll brs-5px hv-opacity'
                            : 'display-none'
                    }
                    onClick={showFixAll}
                >
                    Fix All
                </div>

                <div
                    className={
                        urls_preview.length == 0
                            ? 'CreateUpdatePostHomeContent__no-pic'
                            : 'display-none'
                    }
                >
                    No picture, video
                </div>
            </div>
        </div>
    );
}

export default CreateUpdatePostHomeContent;

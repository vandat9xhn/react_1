import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import PictureName from '../../../../../picture_name/pic_name/PictureName';
import CUPostHomeContent from '../content/CUPostHomeContent';
import CUPostHomeMoreInput from '../more_input/CUPostHomeMoreInput';
//
import './CUPostHome.scss';

//
CUPostHome.propTypes = {};

//
function CUPostHome({
    main_content,
    vid_pics,
    title_action,

    has_file,
    has_text,
    is_loading,

    showFixAll,
    handleChangeMainContent,
    deleteAnItem,
    handleChooseFiles,
    handleCUPost,
}) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div>
            <div className="CUPostHome_user">
                <PictureName user={user} />
            </div>

            <div>
                <CUPostHomeContent
                    main_content={main_content}
                    urls_preview={vid_pics}
                    is_loading={is_loading}
                    //
                    showFixAll={showFixAll}
                    handleChangeMainContent={handleChangeMainContent}
                    deleteAnItem={deleteAnItem}
                />
            </div>

            <div className="CUPostHome_footer">
                <div className="CUPostHome_files-tag">
                    <CUPostHomeMoreInput
                        handleChooseFiles={handleChooseFiles}
                    />
                </div>

                {/* btn post */}
                <div>
                    <button
                        className={`CUPostHome_post brs-5px ${
                            !has_text && !has_file
                                ? 'CUPostHome_post-disable'
                                : 'CUPostHome_post-active'
                        }`}
                        disabled={!has_text && !has_file}
                        title={title_action}
                        onClick={handleCUPost}
                    >
                        {title_action}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CUPostHome;

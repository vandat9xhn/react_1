import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
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

    has_change,
    is_loading,

    showFixAll,
    handleChangeMainContent,
    // deleteAnItem,
    handleChooseFiles,
    handleCUPost,
}) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div>
            <div className="CUPostHome_user">
                <PicNameContent user={user} />
            </div>

            <div>
                <CUPostHomeContent
                    main_content={main_content}
                    urls_preview={vid_pics}
                    is_loading={is_loading}
                    //
                    showFixAll={showFixAll}
                    handleChangeMainContent={handleChangeMainContent}
                    // deleteAnItem={deleteAnItem}
                />
            </div>

            <div className="CUPostHome_footer">
                <div className="CUPostHome_files-tag">
                    <CUPostHomeMoreInput
                        handleChooseFiles={handleChooseFiles}
                    />
                </div>

                <div>
                    <button
                        className={`CUPostHome_post w-100per padding-8px brs-5px text-secondary label-field text-align-center ${
                            !has_change
                                ? 'bg-ccc opacity-5'
                                : 'bg-blue text-white cursor-pointer'
                        }`}
                        disabled={!has_change}
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

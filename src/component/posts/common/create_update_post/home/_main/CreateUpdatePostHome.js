import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import PictureName from '../../../../../picture_name/pic_name/PictureName';
import CreateUpdatePostHomeContent from '../content/CreateUpdatePostHomeContent';
import CreateUpdatePostHomeMoreInput from '../more_input/CreateUpdatePostHomeMoreInput';
//
import './CreateUpdatePostHome.scss';

//
CreateUpdatePostHome.propTypes = {};

//
function CreateUpdatePostHome(props) {
    //
    const { user } = useContext(context_api);
    //
    const {
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
        handleCreateUpdatePost,
    } = props;

    //
    return (
        <div>
            <div className="CreateUpdatePostHome_user">
                <PictureName user={user} />
            </div>

            <div>
                <CreateUpdatePostHomeContent
                    main_content={main_content}
                    urls_preview={vid_pics}
                    is_loading={is_loading}
                    //
                    showFixAll={showFixAll}
                    handleChangeMainContent={handleChangeMainContent}
                    deleteAnItem={deleteAnItem}
                />
            </div>

            <div className="CreateUpdatePostHome_footer">
                <div className="CreateUpdatePostHome_files-tag">
                    <CreateUpdatePostHomeMoreInput
                        handleChooseFiles={handleChooseFiles}
                    />
                </div>

                {/* btn post */}
                <div>
                    <button
                        className={`CreateUpdatePostHome_post brs-5px ${
                            !has_text && !has_file
                                ? 'CreateUpdatePostHome_post-disable'
                                : 'CreateUpdatePostHome_post-active'
                        }`}
                        disabled={!has_text && !has_file}
                        title={title_action}
                        onClick={handleCreateUpdatePost}
                    >
                        {title_action}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateUpdatePostHome;

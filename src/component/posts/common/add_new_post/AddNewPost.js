import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
// 
import { openScreenUpdate } from '../../../_screen/type/update/_main/ScreenUpdate';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
//
import UCPost from '../create_update_post/_main/CUPost';
//
import './AddNewPost.scss';

//
AddNewPost.propTypes = {
    title: PropTypes.string,
    handleCreatePost: PropTypes.func,
};
AddNewPost.defaultProps = {
    title: "What 's on your mind?",
};

//
function AddNewPost({ handleCreatePost, title }) {
    const { user, openScreenFloor } = useContext(context_api);

    //
    function onOpenScreenUpdate() {
        openScreenUpdate({
            openScreenFloor: openScreenFloor,

            title: 'Create',
            UpdateComponent: UCPost,

            main_content: '',
            vid_pics: [],
            title_action: 'Post',
            handleCUPost: handleCreatePost,
        });
    }

    function handleLinkToProfile(e) {
        e.stopPropagation();
    }

    //
    return (
        <div
            className="AddNewPost padding-8px bg-primary box-shadow-1 brs-5px-md"
            onClick={onOpenScreenUpdate}
        >
            <div className="AddNewPost_row">
                <div className="AddNewPost_head">
                    <div className="display-flex align-items-center">
                        <div>
                            <Link
                                to={`/profile/${user.id}`}
                                onClick={handleLinkToProfile}
                            >
                                <img
                                    className="brs-50"
                                    src={user.picture}
                                    alt=""
                                    width="40"
                                    height="40"
                                />
                            </Link>
                        </div>

                        <div className="AddNewPost_head-right bg-fb flex-grow-1">
                            <div className="AddNewPost_head-right_title text-nowrap opacity-05">
                                {title}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="AddNewPost_foot">
                    <div className="AddNewPost_foot-row display-flex">
                        <div className="AddNewPost_foot-item flex-grow-1 display-flex-center">
                            <IconsInput size_icon="1rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewPost;

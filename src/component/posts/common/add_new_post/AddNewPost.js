import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
//
import UpdateCreatePost from '../create_update_post/_main/CreateUpdatePost';
//
import './AddNewPost.scss';
import { Link } from 'react-router-dom';

//
AddNewPost.propTypes = {
    title: PropTypes.string,
    handleCreatePost: PropTypes.func,
};
AddNewPost.defaultProps = {
    title: 'How do you feel?',
};

//
function AddNewPost(props) {
    const { user, openScreenUpdate } = useContext(context_api);

    //
    const { handleCreatePost, title } = props;

    //
    function onOpenScreenUpdate() {
        openScreenUpdate('Create', UpdateCreatePost, {
            handleCreateUpdatePost: handleCreatePost,
        });
    }

    function handleLinkToProfile(e) {
        e.stopPropagation();
    }

    //
    return (
        <div
            className="AddNewPost box-shadow-1 brs-5px"
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

                        <div className="AddNewPost_head-right flex-grow-1">
                            <div className="AddNewPost_head-right_title opacity-5">
                                {user.last_name}! {title}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="AddNewPost_foot">
                    <div className="AddNewPost_foot-row">
                        <div className="AddNewPost_foot-item">
                            <IconsInput size_icon="1rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewPost;

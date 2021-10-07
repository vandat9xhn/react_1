import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { openScreenWithElm } from '../../../_screen/type/with_elm/ScreenWithElm';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
//
import UCPost from '../create_update_post/_main/CUPost';
//
import './AddNewPost.scss';

//
const FOOT_ARR = [
    {
        Icon: <IconsInput size_icon="18px" />,
        title: 'Live video',
        component_props: {},
    },
    {
        Icon: <IconsInput size_icon="18px" />,
        title: 'Photo/Video',
        component_props: { chosen_vid_pic: true },
    },
    {
        Icon: <IconsInput size_icon="18px" />,
        title: 'Feeling/Activities',
        component_props: {},
    },
];

//
AddNewPost.propTypes = {
    title: PropTypes.string,
    handleCreatePost: PropTypes.func,
};
AddNewPost.defaultProps = {
    title: "What's on your mind?",
};

//
function AddNewPost({ title, handleCreatePost }) {
    const { user, openScreenFloor } = useContext(context_api);

    //
    function onOpenScreenUpdate(component_props = {}) {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <UCPost
                    title="Create post"
                    main_content=""
                    vid_pics={[]}
                    title_action="Post"
                    handleCUPost={handleCreatePost}
                    {...component_props}
                />
            ),
        });
    }

    //
    return (
        <div className="AddNewPost padding-x-16px padding-y-12px bg-primary brs-8px">
            <div className="AddNewPost_head display-flex align-items-center padding-bottom-12px border-bottom-blur">
                <Link to={`/profile/${user.id}`}>
                    <img
                        className="brs-50"
                        src={user.picture}
                        alt=""
                        width="40"
                        height="40"
                    />
                </Link>

                <div
                    className="AddNewPost_head_title flex-grow-1 margin-left-12px padding-x-12px padding-y-8px bg-fb text-nowrap text-third font-17px cursor-pointer hv-bg-hv"
                    onClick={onOpenScreenUpdate}
                >
                    {title}
                </div>
            </div>

            <div className="AddNewPost_foot flex-between-center margin-top-10px font-600 text-third">
                {FOOT_ARR.map((item, ix) => (
                    <div
                        key={ix}
                        className="AddNewPost_foot_part display-flex-center padding-y-8px brs-5px cursor-pointer hv-bg-hv"
                        onClick={() => onOpenScreenUpdate(item.component_props)}
                    >
                        <IconsInput size_icon="18px" />

                        <div className="AddNewPost_foot_part_right">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddNewPost;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { openScreenWithElm } from '../../../../_screen/type/with_elm/ScreenWithElm';
//
import IconsProfile from '../../../../../_icons_svg/icons_profile/IconsProfile';
import IconsInput from '../../../../../_icons_svg/Icons_input/IconsInput';
//
import CUPost from '../../create_update_post/_main/CUPost';
import CUPostMb from '../../cu_post_mobile/_main/CUPostMb';
//
import './AddNewPost.scss';

//
const FOOT_ARR = IS_MOBILE
    ? [
          {
              Icon: <IconsInput size_icon="14px" />,
              title: 'Text',
              component_props: {},
          },
          {
              Icon: <IconsInput size_icon="14px" />,
              title: 'Live video',
              component_props: {},
          },
          {
              Icon: <IconsProfile size_icon="14px" />,
              title: 'Location',
              component_props: {},
          },
      ]
    : [
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
              component_props: { chosen_emoji: true },
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
        const ComponentCUPost = IS_MOBILE ? CUPostMb : CUPost;
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <ComponentCUPost
                    title="Create post"
                    main_content=""
                    vid_pics={[]}
                    title_action="Post"
                    user_tag_arr={[]}
                    handleCUPost={handleCreatePost}
                    {...component_props}
                />
            ),
        });
    }

    //
    function openWithChoosePhoto() {
        onOpenScreenUpdate({ chosen_vid_pic: true });
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
                    className="AddNewPost_title flex-grow-1 margin-left-12px padding-x-12px padding-y-8px bg-fb text-nowrap text-third font-17px cursor-pointer hv-bg-hv"
                    onClick={onOpenScreenUpdate}
                >
                    {title}
                </div>

                {IS_MOBILE ? (
                    <div className="padding-y-8px font-12px text-third font-600">
                        <div
                            className="AddNewPost_photo display-flex-center flex-col padding-x-10px"
                            onClick={openWithChoosePhoto}
                        >
                            <div>
                                <IconsInput size_icon="18px" />
                            </div>

                            <div className="margin-top-5px">Photo</div>
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="AddNewPost_foot flex-between-center margin-top-10px font-600 text-third">
                {FOOT_ARR.map((item, ix) => (
                    <div
                        key={ix}
                        className="AddNewPost_foot_part display-flex-center padding-y-8px brs-5px cursor-pointer hv-bg-hv"
                        onClick={() => onOpenScreenUpdate(item.component_props)}
                    >
                        <IconsInput size_icon="18px" />

                        <div className="margin-left-10px">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddNewPost;

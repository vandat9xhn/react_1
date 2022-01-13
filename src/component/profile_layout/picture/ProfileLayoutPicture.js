import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import HasLinkOrNot from '../../link/has_link_or_not/HasLinkOrNot';
import ActionsMultiList from '../../actions_multi_list/_main/ActionsMultiList';
import ActionsMultiListItem from '../../actions_multi_list/item/ActionsMultiListItem';
//
import './ProfileLayoutPicture.scss';

//
const ProfilePicture = ({ picture, has_new_story, has_seen_story }) => {
    return (
        <div
            className={`ProfileLayoutPicture_pic pos-abs-100 brs-50 box-shadow-1 ${
                has_new_story
                    ? `ProfileLayoutPicture_pic-story cursor-pointer active-scale-sm ${
                          has_seen_story
                              ? 'ProfileLayoutPicture_pic-story_seen'
                              : 'ProfileLayoutPicture_pic-story_new'
                      }`
                    : ''
            }`}
        >
            <div className="ProfileLayoutPicture_pic_contain wh-100 brs-50">
                <img
                    className="ProfileLayoutPicture_img wh-100 brs-50 bg-primary object-fit-cover"
                    src={picture}
                    alt=""
                />
            </div>
        </div>
    );
};

//
const ComponentItem = ({
    name,
    Icon,
    title,
    info,
    link_to,

    handleAction,
    handleClose,
}) => {
    return (
        <Link className="color-inherit" to={link_to}>
            <ActionsMultiListItem
                name={name}
                Icon={Icon}
                title={title}
                info={info}
                //
                stop_propagation={false}
                //
                handleAction={handleAction}
                handleClose={handleClose}
            />
        </Link>
    );
};

//
ProfileLayoutPicture.propTypes = {};

//
function ProfileLayoutPicture({
    link_to,
    picture,

    has_new_story,
    has_seen_story,

    handleAction,
}) {
    //
    function handle_API_L() {
        return [
            [
                {
                    name: 'view_story',
                    title: 'View story',
                    link_to: '/stories?i=1',
                },
                {
                    name: 'view_picture',
                    title: 'View profile picture',
                    link_to: '/posts/1',
                },
            ],
        ];
    }

    //
    return (
        <div className="ProfileLayoutPicture pos-rel h-100per">
            <div className="ProfileLayoutPicture_contain pos-abs left-0 w-100per">
                <HasLinkOrNot
                    class_link="ProfileLayoutPicture_link"
                    has_link={!!link_to}
                    link_to={link_to}
                >
                    <div className="pos-rel padding-top-100per">
                        {has_new_story ? (
                            <ActionsMultiList
                                title_action={
                                    <ProfilePicture
                                        picture={picture}
                                        has_new_story={has_new_story}
                                        has_seen_story={has_seen_story}
                                    />
                                }
                                y_always={'top'}
                                ComponentItem={ComponentItem}
                                //
                                handleAction={handleAction}
                                handle_API_L={handle_API_L}
                            />
                        ) : (
                            <ProfilePicture
                                picture={picture}
                                has_new_story={has_new_story}
                                has_seen_story={has_seen_story}
                            />
                        )}
                    </div>
                </HasLinkOrNot>
            </div>
        </div>
    );
}

export default ProfileLayoutPicture;

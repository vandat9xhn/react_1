import React from 'react';
import PropTypes from 'prop-types';
//
import HasLinkOrNot from '../../link/has_link_or_not/HasLinkOrNot';
//
import './ProfileLayoutPicture.scss';

//
ProfileLayoutPicture.propTypes = {};

//
function ProfileLayoutPicture({
    link_to,
    picture,
    has_new_story,
    has_seen_story,

    openPicture,
}) {
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
                            onClick={has_new_story ? openPicture : undefined}
                        >
                            <img
                                className="ProfileLayoutPicture_img wh-100 brs-50 bg-primary object-fit-cover"
                                src={picture}
                                alt=""
                            />
                        </div>
                    </div>
                </HasLinkOrNot>
            </div>
        </div>
    );
}

export default ProfileLayoutPicture;

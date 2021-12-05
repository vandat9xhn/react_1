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
    openPicture,
}) {
    //
    return (
        <div className="ProfileLayoutPicture pos-rel h-100per">
            <div className="ProfileLayoutPicture_contain pos-abs bottom-0 left-0 w-100per">
                <HasLinkOrNot
                    className={`ProfileLayoutPicture_link display-block w-100per brs-50 box-shadow-1 ${
                        has_new_story ? 'ProfileLayoutPicture_link-story' : ''
                    }`}
                    has_link={!!link_to}
                    link_to={link_to}
                >
                    <img
                        className="ProfileLayoutPicture_img w-100per brs-50 bg-primary object-fit-cover"
                        src={picture}
                        // width="160"
                        height="160"
                        alt=""
                        onClick={openPicture}
                    />
                </HasLinkOrNot>
            </div>
        </div>
    );
}

export default ProfileLayoutPicture;

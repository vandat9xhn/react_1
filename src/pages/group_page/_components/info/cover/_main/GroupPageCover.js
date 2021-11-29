import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutCover from '../../../../../../component/profile_layout/cover/_main/ProfileLayoutCover';
import GroupPageAffiliation from '../affiliation/GroupPageAffiliation';

//
GroupPageCover.propTypes = {};

//
function GroupPageCover({
    picture,
    bg_btn,
    affiliation_obj,

    openCoverPicture,
}) {
    //
    return (
        <ProfileLayoutCover
            cover={picture}
            link_to={`/post/1`}
            openCoverPicture={openCoverPicture}
        >
            {affiliation_obj.id > 0 ? (
                <div className="pos-abs bottom-0 left-0 w-100per">
                    <GroupPageAffiliation
                        bg_btn={bg_btn}
                        affiliation_obj={affiliation_obj}
                    />
                </div>
            ) : null}
        </ProfileLayoutCover>
    );
}

export default GroupPageCover;

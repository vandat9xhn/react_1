import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../../_some_function/UnitNumber';
//
import IconFollow from '../../../../../../../_icons_svg/follow/IconFollow';
//
import ProfileLayoutAboutPreviewItem from '../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem';

//
FPHomeAboutFollow.propTypes = {};

//
function FPHomeAboutFollow({ follow_obj }) {
    //
    const { count } = follow_obj;

    //
    return (
        <div className="FPHomeAboutFollow">
            <ProfileLayoutAboutPreviewItem Icon={<IconFollow />}>
                <div>{UnitNumber(count)} people follow this</div>
            </ProfileLayoutAboutPreviewItem>
        </div>
    );
}

export default FPHomeAboutFollow;

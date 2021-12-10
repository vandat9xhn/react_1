import React from 'react';
import PropTypes from 'prop-types';
//
import IconTablePhone from '../../../../../../../_icons_svg/icon_table_phone/IconTablePhone';
//
import ProfileLayoutAboutPreviewItem from '../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem';

//
FPHomeAboutPhone.propTypes = {};

//
function FPHomeAboutPhone({ phone_obj }) {
    //
    const { num_phone } = phone_obj;

    //
    return (
        <div className="FPHomeAboutPhone">
            <ProfileLayoutAboutPreviewItem Icon={<IconTablePhone />}>
                <div>{num_phone}</div>
            </ProfileLayoutAboutPreviewItem>
        </div>
    );
}

export default FPHomeAboutPhone;

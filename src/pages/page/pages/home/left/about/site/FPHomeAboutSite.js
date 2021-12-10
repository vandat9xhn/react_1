import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconPublic from '../../../../../../../_icons_svg/icon_public/IconPublic';
//
import ProfileLayoutAboutPreviewItem from '../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem';

//
FPHomeAboutSite.propTypes = {};

//
function FPHomeAboutSite({ site_obj }) {
    //
    const { link_to, link_title } = site_obj;

    //
    return (
        <div className="FPHomeAboutSite">
            <ProfileLayoutAboutPreviewItem Icon={<IconPublic />}>
                <a className="hv-underline" href={link_to} target="_blank">
                    {link_title}
                </a>
            </ProfileLayoutAboutPreviewItem>
        </div>
    );
}

export default FPHomeAboutSite;

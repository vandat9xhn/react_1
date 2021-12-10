import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconsAction from '../../../../../../../_icons_svg/icons_action/IconsAction';
//
import ProfileLayoutAboutPreviewItem from '../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem';

//
FPHomeAboutInfo.propTypes = {};

//
function FPHomeAboutInfo({ info_obj }) {
    //
    const { content, link_to, link_title } = info_obj;

    //
    return (
        <div className="FPHomeAboutInfo">
            <ProfileLayoutAboutPreviewItem Icon={<IconsAction x={600} />}>
                <div>{content}</div>

                {link_to ? (
                    <div>
                        <a
                            className="hv-underline"
                            href={link_to}
                            target="_blank"
                        >
                            {link_title}
                        </a>
                    </div>
                ) : null}
            </ProfileLayoutAboutPreviewItem>
        </div>
    );
}

export default FPHomeAboutInfo;

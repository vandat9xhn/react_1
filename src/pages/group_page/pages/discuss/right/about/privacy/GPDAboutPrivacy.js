import React from 'react';
import PropTypes from 'prop-types';
//
import IconPublic from '../../../../../../../_icons_svg/icon_public/IconPublic';
import IconPrivate from '../../../../../../../_icons_svg/icon_private/IconPrivate';
//
import GroupPageAboutPart from '../../../../../_components/about_part/GroupPageAboutPart';

//
GPDAboutPrivacy.propTypes = {};

//
function GPDAboutPrivacy({ privacy }) {
    //
    const is_public = privacy.toUpperCase() == 'PUBLIC';

    //
    return (
        <div className="GPDAboutPrivacy">
            <GroupPageAboutPart
                Icon={is_public ? <IconPublic /> : <IconPrivate />}
                title={privacy}
                info={
                    is_public
                        ? "Anyone can see who's in the group and what they post."
                        : "Only members can see who's in the group and what they post."
                }
            />
        </div>
    );
}

export default GPDAboutPrivacy;

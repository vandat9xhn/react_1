import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageAboutPart from '../../../../../_components/about_part/GroupPageAboutPart';
import IconsEye from '../../../../../../../_icons_svg/icons_eye/IconsEye';

//
GPDAboutVisibility.propTypes = {};

//
function GPDAboutVisibility({ visibility }) {
    //
    const is_visible = visibility.toUpperCase() == 'VISIBLE';

    //
    return (
        <div className="GPDAboutVisibility">
            <GroupPageAboutPart
                Icon={<IconsEye close_eye={!is_visible} />}
                title={visibility}
                info={
                    is_visible
                        ? 'Anyone can find this group.'
                        : 'Only members can find this group.'
                }
            />
        </div>
    );
}

export default GPDAboutVisibility;

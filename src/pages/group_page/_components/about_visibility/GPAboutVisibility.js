import React from 'react';
import PropTypes from 'prop-types';
//
import IconsEye from '../../../../_icons_svg/icons_eye/IconsEye';
// 
import GroupPageAboutPart from '../about_part/GroupPageAboutPart';

//
GPAboutVisibility.propTypes = {};

//
function GPAboutVisibility({ visibility }) {
    //
    const is_visible = visibility.toUpperCase() == 'VISIBLE';

    //
    return (
        <div className="GPAboutVisibility">
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

export default GPAboutVisibility;

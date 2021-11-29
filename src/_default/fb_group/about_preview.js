import React from 'react';
//
import IconGroup from '../../_icons_svg/icon_group/IconGroup';
//
import { getRandomContent } from '../_common/default_content';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_fb_group_about_preview_obj = () => {
    return {
        description: getRandomContent(),
        visibility: getRandomFromArr(['Visible', 'Hidden']),
        type_obj: { name: 'general', title: 'General', Icon: <IconGroup /> },
        privacy: getRandomFromArr(['Public', 'Private']),
    };
};

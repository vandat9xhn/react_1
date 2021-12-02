import React from 'react';
// 
import IconGroup from '../../_icons_svg/icon_group/IconGroup';
// 
import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomPage, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const getRandomUserPage = () => {
    return getRandomBool()
        ? {
              ...getRandomUser().user,
              type: 'user',
          }
        : {
              ...getRandomPage().page_obj,
              type: 'page',
          };
};

//
export const default_fb_group_page_about_obj = () => {
    const member_count = getRandomNumber(2, 200);

    const friend_arr = getDefaultArr(
        getRandomUserPage,
        member_count <= 7 ? 0 : 1,
        member_count <= 7 ? member_count : 7
    );
    const friend_name_str = 'Nguyen and My are members.';

    const admin_arr = getDefaultArr(
        getRandomUserPage,
        member_count <= 7 ? 0 : 1,
        member_count <= 7 ? member_count : 7
    );
    const admin_name_str = 'Nam is admin. Phuong is moderate.';

    return {
        id: getRandomId(),
        description: getRandomContent(),
        privacy: getRandomFromArr(['Public', 'Private']),
        visibility: getRandomFromArr(['Visible', 'Invisible']),
        type_obj: { name: 'general', title: 'General', Icon: <IconGroup /> },

        member_count: member_count,
        created_time: new Date(2018, 2).toString(),
        recommended_count: getRandomNumber(4, 6),

        friend_arr: friend_arr,
        friend_name_str: friend_name_str,
        admin_arr: admin_arr,
        admin_name_str: admin_name_str,

        post_day_count: getRandomNumber(5, 10),
        post_month_count: getRandomNumber(150, 300),
        member_week_count: getRandomNumber(0, member_count - 1),
    };
};

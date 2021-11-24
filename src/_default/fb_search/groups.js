import { getRandomBool } from '../_common/default_bool';
import { getRandomContent } from '../_common/default_content';
import { getRandomNumber } from '../_common/default_id';
import { getRandomGroup } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
const default_fb_search_group_obj = () => {
    const action_case = getRandomFromArr([
        'joined',
        'sent_request',
        'not_joined',
    ]);

    return {
        ...getRandomGroup().group_obj,

        privacy: getRandomFromArr(['Public', 'Private']),
        count_member: getRandomNumber(1, 20) * 1000,

        info_arr: [
            getRandomFromArr([
                { title: getRandomContent().slice(0, 100), icon_name: '' },
                {
                    title: `${getRandomNumber(2, 4)} friends are members`,
                    icon_name: 'friends',
                },
            ]),
            ...(getRandomBool()
                ? []
                : [
                      getRandomFromArr([
                          {
                              title: `${getRandomNumber(2, 4)} unread posts`,
                              icon_name: '',
                          },
                          {
                              title: `${getRandomNumber(2, 10)} posts a day`,
                              icon_name: '',
                          },
                          {
                              title: `${getRandomNumber(2, 10)} posts a week`,
                              icon_name: '',
                          },
                      ]),
                  ]),
        ],
        action_case: action_case,
    };
};

export const default_fb_search_group_arr = () => {
    return getDefaultArr(default_fb_search_group_obj, 16, 16);
};

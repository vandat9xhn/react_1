import { default_define_user } from '../login/DefaultLogin';
import { getRandomBool } from '../_common/default_bool';

//
const default_fb_other_action_arr = (user_id) => {
    //
    if (user_id == default_define_user.id) {
        return [
            [
                {
                    name: 'search',
                    title: 'Search profile',
                },
                {
                    name: 'status',
                    title: 'Account status',
                },
                {
                    name: 'archive',
                    title: 'Archive',
                },
                {
                    name: 'activity',
                    title: 'Activity log',
                },
                {
                    name: 'profile_tag_setting',
                    title: 'Profile and tagging settings',
                },
            ],
        ];
    }

    return getRandomBool()
        ? [
              [
                  {
                      name: 'audio_call',
                      title: 'Audio call',
                  },
                  {
                      name: 'video_chat',
                      title: 'Video chat',
                  },
                  {
                      name: 'search',
                      title: 'Search profile',
                  },
                  {
                      name: 'friend_ship',
                      title: 'See friend ship',
                  },
                  {
                      name: 'support',
                      title: 'Find support or report profile',
                  },
                  {
                      name: 'block',
                      title: 'Block',
                  },
              ],
          ]
        : [
              [
                  {
                      name: 'follow',
                      title: 'Follow',
                  },
                  {
                      name: 'remove',
                      title: 'Remove this notification',
                  },
                  {
                      name: 'support',
                      title: 'Find support or report profile',
                  },
                  {
                      name: 'block',
                      title: 'Block',
                  },
              ],
          ];
};

//
const default_fb_friend_action_arr = () => {
    return [
        [
            {
                name: 'favourites',
                title: 'Favourites',
            },
            {
                name: 'edit',
                title: 'Edit Friend List',
            },
            {
                name: 'unfollow',
                title: 'Unfollow',
            },
            {
                name: 'unfriend',
                title: 'Unfriend',
            },
        ],
    ];
};

//
const default_fb_reply_request_action_arr = () => {
    return [
        [
            {
                name: 'confirm_request',
                title: 'Confirm',
            },
            {
                name: 'delete_request',
                title: 'Delete request',
            },
        ],
    ];
};

// ----------

//
export const default_fb_action_arr = ({ user_id, type }) => {
    if (type == 'other') {
        return default_fb_other_action_arr(user_id);
    }

    if (type == 'friend') {
        return default_fb_friend_action_arr();
    }

    if (type == 'reply_request') {
        return default_fb_reply_request_action_arr();
    }
};

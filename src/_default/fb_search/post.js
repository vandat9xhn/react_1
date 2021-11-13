import { getRandomBool } from '../_common/default_bool';

//
export const default_fb_search_post_action_arr = () => {
    return getRandomBool()
        ? [
              [
                  {
                      name: 'save',
                      title: 'Save Post',
                      info: 'Add this to your save items.',
                  },
              ],
          ]
        : [
              [
                  {
                      name: 'save',
                      title: 'Save Post',
                      info: 'Add this to your save items.',
                  },
              ],
              [
                  {
                      name: 'support_report',
                      title: 'Find support or report post.',
                      info: "I'm concerned about this post.",
                  },
              ],
          ];
};

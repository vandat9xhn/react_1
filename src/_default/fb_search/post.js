import { data_fb_post_action_obj } from '../../_data/post/actions';
import { getRandomBool } from '../_common/default_bool';

//
export const default_fb_search_post_action_arr = () => {
    return getRandomBool()
        ? [[data_fb_post_action_obj.save]]
        : [
              [data_fb_post_action_obj.save],
              [data_fb_post_action_obj.support_report],
          ];
};

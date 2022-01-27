import { default_zoom_vid_pic_action_l } from '../../_default/zoom_vid_pic/actions';

//
export function handle_API_PostVidPicAction_L({ vid_pic_id = 0, params = {} }) {
    //
    return new Promise((res) => {
        setTimeout(() => {
            res(
                default_zoom_vid_pic_action_l({
                    video_or_img: params['video_or_img'],
                })
            );
        }, 250);
    });
}

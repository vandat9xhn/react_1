import { default_short_video_obj } from "../../_default/short_video/item";
import { getRandomId } from "../../_default/_common/default_id";

//
export const handle_API_ShortVideo_R = (id = 0) =>
    new Promise((res) => {
        setTimeout(() => {
            res({
                short_video_obj: default_short_video_obj(id),

                next_id: getRandomId(),
            });
        }, 250);
    });

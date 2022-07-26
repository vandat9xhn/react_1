import { getRandomId } from "../../_default/_common/default_id";
import { default_short_video_arr } from "../../_default/short_video/item";

//
export const handle_API_ShortVideo_L = (id) =>
    new Promise((res) => {
        setTimeout(() => {
            res({
                data: default_short_video_arr(id),
                next_id: getRandomId(),
            });
        }, 250);
    });

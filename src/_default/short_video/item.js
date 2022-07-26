import { getRandomContent } from "../../_default/_common/default_content";
import {
    getRandomId,
    getRandomNumber,
} from "../../_default/_common/default_id";
import { getRandomName } from "../../_default/_common/default_name";
import {
    getRandomImg,
    getRandomVideo,
} from "../../_default/_common/default_image";
import { getDefaultArr } from "../../_default/_common/getDefaultArr";

//
export const default_short_video_obj = (id) => {
    return {
        id: id ? id : getRandomId(),
        video: getRandomVideo(),
        thumb: getRandomImg(),
        content: getRandomContent(),

        name: getRandomName(),
        picture: getRandomImg(),
        link_to: `/profile/${getRandomNumber()}`,

        interacts: [
            {
                icon_name: "like",
                count_str: "20K",
            },
            {
                icon_name: "comment",
                count_str: "500",
            },
            {
                icon_name: "share",
                count_str: "1K",
            },
        ],
    };
};

//
export const default_short_video_arr = (id) => {
    return [
        default_short_video_obj(id),
        ...getDefaultArr(default_short_video_obj, 5, 5),
    ];
};

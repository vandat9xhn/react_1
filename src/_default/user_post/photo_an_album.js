import { default_post_obj, post_vid_pic_obj } from '../post/DefaultPosts';
import { getRandomContent } from '../_common/default_content';
import { getRandomAlbumName } from '../_common/default_name';

//
export const default_fb_profile_photo_an_album_r = () => {
    //
    const post_obj_1 = default_post_obj({ post_where: 'user', to_user: false });

    const post_arr = [
        {
            ...post_obj_1,
            bg_obj: null,
            vid_pics: [post_vid_pic_obj(), ...post_obj_1.vid_pics],
            vid_pic_count: post_obj_1.vid_pic_count + 1,
        },
    ];

    const pic_arr = [];
    post_arr.forEach((post) => {
        pic_arr.push(
            ...post.vid_pics.map((item) => ({ id: item.id, img: item.vid_pic }))
        );
    });
    const pic_count = pic_arr.length;

    //
    return {
        album_name: getRandomAlbumName(),
        description: getRandomContent().slice(0, 20),
        // mode_view: getRandomFromArr(['grid', 'feed']),
        permission: post_obj_1.permission_post,

        post_count: post_arr.length,
        item_count: post_obj_1.vid_pic_count + 1,

        reacted_count: 0,
        reacted_ix_arr: [],
        user_reacted_ix: -1,

        enabled_like: true,
        enabled_cmt: true,
        enabled_share: true,

        count_comment: 0,
        count_share: 0,

        post_arr: post_arr,
        pic_arr: pic_arr,
        pic_count: pic_count,
    };
};

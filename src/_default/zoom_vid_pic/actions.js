//
export const default_zoom_vid_pic_action_l = ({ video_or_img }) => {
    if (video_or_img == 'img') {
        return [
            [
                {
                    name: 'save_post',
                    title: 'Save Post',
                    info: 'Add this to your saved item',
                },
            ],
            [
                { name: 'history', title: 'View edit history' },
                { name: 'audience', title: 'Edit post audience' },
                { name: 'edit_alt', title: 'Change alt text' },
                { name: 'delete', title: 'Delete photo' },
            ],
            [{ name: 'report', title: 'Find support or report photo' }],
        ];
    }

    return [
        [
            {
                name: 'save_video',
                title: 'Save Video',
                info: 'Add this to your saved item',
            },
        ],
        [
            { name: 'history', title: 'View edit history' },
            { name: 'audience', title: 'Edit post audience' },
            { name: 'edit_alt', title: 'Change alt text' },
            { name: 'delete', title: 'Delete video' },
        ],
        [{ name: 'report', title: 'Find support or report video' }],
    ];
};

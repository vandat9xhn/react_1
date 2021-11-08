//
export const default_chat_emoji_arr = () => {
    //
    return [
        {
            name: 'like',
        },
        {
            name: 'sad',
        },
        {
            name: 'heart',
        },
        {
            name: 'laugh',
        },
        {
            name: 'angry',
        },
    ];
};

//
export const default_chat_list_emoji_row_arr = () => {
    //
    return [
        {
            title: 'Recently used',
            emoji_row_arr: [[{ name: 'sad' }, { name: 'angry' }]],
        },
        {
            title: 'Smileys & people',
            emoji_row_arr: [
                [
                    { name: 'laugh' },
                    { name: 'sad' },
                    { name: 'heart' },
                    { name: 'angry' },
                ],
            ],
        },
        {
            title: 'Animals & nature',
            emoji_row_arr: [
                [
                    { name: 'laugh' },
                    { name: 'sad' },
                    { name: 'heart' },
                    { name: 'angry' },
                ],
            ],
        },
    ];
};

const DEFAULT_EMOJI_ARR = [
    // CELEBRATING
    {
        id: 101,
        type: 'celebrating',
        title: 'Celebrating...',
        name: 'a birthday',
        icon: null,
    },
    {
        id: 102,
        type: 'celebrating',
        title: 'Celebrating...',
        name: 'friendship',
        icon: null,
    },
    {
        id: 103,
        type: 'celebrating',
        title: 'Celebrating...',
        name: 'victory',
        icon: null,
    },
    {
        id: 104,
        type: 'celebrating',
        title: 'Celebrating...',
        name: 'Christmas',
        icon: null,
    },

    // EATING
    {
        id: 201,
        type: 'eating',
        title: 'Eating...',
        name: 'break first',
        icon: null,
    },
    {
        id: 202,
        type: 'eating',
        title: 'Eating...',
        name: 'lunch',
        icon: null,
    },
    {
        id: 203,
        type: 'eating',
        title: 'Eating...',
        name: 'chicken',
        icon: null,
    },

    // WATCHING
    {
        id: 301,
        type: 'watching',
        title: 'Watching...',
        name: 'tv',
        icon: null,
    },
    {
        id: 302,
        type: 'watching',
        title: 'Watching...',
        name: 'film',
        icon: null,
    },
    {
        id: 303,
        type: 'watching',
        title: 'Watching...',
        name: 'football',
        icon: null,
    },

    // FEELING
    {
        id: 1,
        type: 'feeling',
        name: 'happy',
        icon: null,
    },
    {
        id: 2,
        type: 'feeling',
        name: 'love',
        icon: null,
    },
    {
        id: 3,
        type: 'feeling',
        name: 'sad',
        icon: null,
    },
    {
        id: 4,
        type: 'feeling',
        name: 'crazy',
        icon: null,
    },
];

//
export const default_post_emoji_type_arr = () => [
    {
        id: 1,
        type: 'celebrating',
        title: 'Celebrating...',
        icon: null,
    },
    {
        id: 2,
        type: 'watching',
        title: 'Watching...',
        icon: null,
    },
    {
        id: 3,
        type: 'eating',
        title: 'Eating...',
        icon: null,
    },
];

//
export const default_post_emoji_arr = (type = '') => {
    return type == ''
        ? DEFAULT_EMOJI_ARR
        : DEFAULT_EMOJI_ARR.filter((item) => item.type == type);
};

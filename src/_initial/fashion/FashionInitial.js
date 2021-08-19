//
export const initial_fashion_info_right = () => ({
    name: '',
    description: '',
    new_price: 0,
    old_price: 0,
    total_add_cart: 0,
    quantity: 0,
});

//
export const initial_fashion_shop = () => ({
    id: 0,
    name: '',
    picture: '',
    banner: '',
    address: '',
    info: '',
    time_online: '',
    vid_pics: [],
    profile_model: 0,
    owner_info: [
        {
            title: 'Rating',
            value: 0,
        },
        {
            title: 'Reply chat',
            value: '',
        },
        {
            title: 'Time joined',
            value: '',
        },
        {
            title: 'Products',
            value: 0,
        },
        {
            title: 'Reply time',
            value: 0,
        },
        {
            title: 'Follow',
            value: 0,
        },
    ],
});

//
export const initial_fashion_search_products_obj = {
    0: [
        {
            id: 0,
            vid_pics: [
                {
                    id: 0,
                    vid_pic: '',
                },
            ],
            count_rate: 0,
            total_rate: 0,
            address: '',
            brand: '',
            type: '',
            hashtag: '',
            name: '',
            new_price: 0,
            old_price: 0,
            discount: 0,
            sold: 0,
        },
    ],
};

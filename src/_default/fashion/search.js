//
export const default_fs_search_filter_arr = () => {
    return [
        {
            name: 'category',
            title: 'Danh mục',
            order: 0,
            arr: [
                {
                    id: 1,
                    title: 'Quần áo',
                    checked: false,
                },
                {
                    id: 2,
                    title: 'Thời trang nam',
                    checked: false,
                },
                {
                    id: 3,
                    title: 'Thời trang hè',
                    checked: false,
                },
                {
                    id: 4,
                    title: 'Áo phông',
                    checked: false,
                },
            ],
        },

        {
            name: 'area',
            title: 'Nơi bán',
            order: 0,
            arr: [
                { id: 1, title: 'Ha Noi', checked: false },
                { id: 2, title: 'HCM', checked: false },
                { id: 3, title: 'Da Nang', checked: false },
            ],
        },

        {
            name: 'transporter',
            title: 'Đợn vị vận chuyển',
            order: 0,
            arr: [
                { id: 1, title: 'Hỏa tốc', checked: false },
                { id: 2, title: 'Nhanh', checked: false },
                { id: 3, title: 'Tiết kiệm', checked: false },
            ],
        },

        {
            name: 'brand',
            title: 'Thương hiệu',
            order: 0,
            arr: [
                { id: 1, title: 'Chanel', checked: false },
                { id: 2, title: 'Gucci', checked: false },
                { id: 3, title: 'Adiddas', checked: false },
            ],
        },

        {
            name: 'type_shop',
            title: 'Loại shop',
            order: 5,
            arr: [
                { id: 1, title: 'Yêu thích', checked: false },
                { id: 2, title: 'Yêu thích +', checked: false },
                { id: 3, title: 'Mall', checked: false },
            ],
        },

        {
            name: 'service',
            title: 'Dịch vụ & khuyến mãi',
            order: 6,
            arr: [
                { id: 1, title: 'FreeShip Xtra', checked: false },
                { id: 2, title: 'Hoàn xu Xtra', checked: false },
                { id: 3, title: 'Đang giảm giá', checked: false },
                { id: 4, title: 'Miễn phí vận chuyện', checked: false },
                { id: 5, title: 'Gì cũng rẻ', checked: false },
                { id: 6, title: 'Hàng có sẵn', checked: false },
                { id: 7, title: 'Buôn sỉ', checked: false },
            ],
        },
    ];
};

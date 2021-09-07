// 
export const initial_fs_transport_arr = () => {
    return [
        {
            id: -1,
            name: '',
            price: 0,
            options: [
                {
                    option_id: 0,
                    name: '',
                    short_name: '',
                    description: '',
                },
            ],

            delay_obj: {
                delay_message: '',
                min_day: 0,
                max_day: 0,
                by_time: false,
                str_date_from: '',
                str_date_to: '',
            },
        },
    ];
};

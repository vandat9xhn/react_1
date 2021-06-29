import image_loading from '../../../../image/my_image.png';
import naruto_x_hinata from '../../../../image/naruto_x_hinata.jpg';

/* ------------------ CITY --------------- */

//
export const default_arr_city = [
    {
        user: {
            id: 1,
            first_name: 'My',
            last_name: 'My',
            picture: image_loading,
        },
        city: 'Ha Noi',
        street: 'Nguyen Trai',
        quote: 'This is a street of Ha Noi',
        bg_color: 'bg-linear-45-success-tear.text-white',
        image: image_loading,
        is_user: true,
        count_his: 2,
    },
];

//
export const default_arr_city_histories = [
    {
        city: 'Ha Noi',
        street: 'Nguyen Trai',
        quote: 'This is a street of Ha Noi',
        bg_color: 'bg-linear-45-success-tear.text-white',
        image: image_loading,
        created_time: '2021-06-29T06:51:05.370Z',
    },
    {
        city: '',
        street: 'Ha Dong',
        quote: '',
        bg_color: 'text-secondary.bg-active-fb',
        image: '',
        created_time: '2021-06-27T00:51:05.370Z',
    },
    {
        city: '',
        street: '',
        quote: 'This is a street of Ha Noi, ...',
        bg_color: 'bg-primary.text-primary',
        image: naruto_x_hinata,
        created_time: '2021-06-24T00:51:05.370Z',
    },
];

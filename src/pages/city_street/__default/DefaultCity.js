import * as Yup from 'yup';
// 
import image_loading from '../../../../image/my_image.png';


/* ------------------ FORMIK YUP--------------- */

// validation schema
export const validationSchema = Yup.object().shape({
    city: Yup.string()
        .required('City is required')
        .min(3, 'At least 3 letters')
        .max(50, 'max 50 letters'),

    street: Yup.string()
        .required('City is required')
        .min(3, 'At least 3 letters')
        .max(50, 'max 50 letters'),
    image: Yup.mixed().required('Image is required'),
});

// initial values
export const initialValues = {
    city: '',
    street: '',
    image: '',
};

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
        street: 'Duong lua',
        image: image_loading,
        is_user: true,
        count_his: 2,
    },
];

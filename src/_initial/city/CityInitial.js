import * as Yup from 'yup';

/* ------------------ FORMIK YUP--------------- */

//
export const validationSchema = Yup.object().shape({
    city: Yup.string()
        .required('City is required')
        .min(3, 'At least 3 letters')
        .max(50, 'max 50 letters'),

    street: Yup.string()
        .required('City is required')
        .min(3, 'At least 3 letters')
        .max(50, 'max 50 letters'),
    quote: Yup.string()
        .required('Quote is required')
        .min(5, 'At least 5 letters'),
    // bg_color: Yup.string(),
    image: Yup.mixed().required('Image is required'),
});

//
export const initialValues = {
    city: '',
    street: '',
    bg_color: 'bg-primary.text-primary',
    quote: '',
    image: '',
};

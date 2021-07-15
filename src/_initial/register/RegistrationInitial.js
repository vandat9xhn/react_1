import * as Yup from 'yup';

// const
export const initialValues = {
    username: '',
    password: '',
    password_confirm: '',
    email: '',
    first_name: '',
    last_name: '',
};

export const validationSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[a-zA-Z0-9]{5,15}$/, 'Username is invalid')
        .required(),

    password: Yup.string()
        .matches(/^[a-zA-Z0-9]{5,15}$/ && /[A-Z]/, 'Password is invalid')
        .required(),

    password_confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password is not right')
        .required(),

    email: Yup.string()
        .email('Invalid email')
        .matches(/^\S{4,10}@[a-z]mail\.com$/, 'Invalid email')
        .required(),

    first_name: Yup.string()
        .matches(/^\S/, 'First name is invalid')
        .min(1, 'First name is invalid')
        .max(20, 'First name is invalid')
        .trim('First name is invalid')
        .required(),

    last_name: Yup.string()
        .matches(/^\S/, 'First name is invalid')
        .min(1, 'Last name is invalid')
        .max(20, 'Last name is invalid')
        .trim('Last name is invalid')
        .required(),
});

//
export const fields = [
    {
        name: 'username',
        type: 'text',
        label: 'Username',
        help: '5-15 english letters and no space',
        max_length: 15,
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        help: '5-15 english letters, no space and at least 1 uppercase letter',
        max_length: 15,
    },
    {
        name: 'password_confirm',
        type: 'password',
        label: 'Password confirm',
        help: 'Confirm your password',
        max_length: 15,
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        help: '****@*mail.com',
    },
    {
        name: 'first_name',
        type: 'text',
        label: 'First name',
        help: '1-20 letters, spaces and start with a letter',
        max_length: 20,
    },
    {
        name: 'last_name',
        type: 'text',
        label: 'Last name',
        help: '1-15 letters, spaces and start with a letter',
        max_length: 15,
    },
];

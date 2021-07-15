import * as Yup from 'yup';

//
export const register_step_obj = {
    0: { part: 'name', fields: ['first_name', 'last_name'], form_valid: true },
    1: { part: 'birth', fields: ['birth'], form_valid: false },
    2: { part: 'email', fields: ['email'], form_valid: true },
    3: { part: 'account', fields: ['username', 'password'], form_valid: true },
};

export const register_step_count = Object.keys(register_step_obj).length;

//
export const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirm: '',
};

//
const name_validation = {
    first_name: Yup.string()
        .matches(/^\S/, 'First name is invalid')
        .min(1, 'First name is invalid')
        .max(20, 'First name is invalid')
        .trim('First name is invalid')
        .required('First name is required'),

    last_name: Yup.string()
        .matches(/^\S/, 'Last name is invalid')
        .min(1, 'Last name is invalid')
        .max(20, 'Last name is invalid')
        .trim('Last name is invalid')
        .required('Last name is required'),
};
const email_validation = {
    email: Yup.string()
        .email('Invalid email')
        .matches(/^\S{4,30}@[a-z]mail\.com$/, 'Invalid email')
        .required('Email is required'),
};
const account_validation = {
    username: Yup.string()
        .matches(/^[a-zA-Z0-9]{5,15}$/, 'Username is invalid')
        .required('Username is required'),

    password: Yup.string()
        .matches(/^[a-zA-Z0-9]{5,15}$/, 'Password is invalid')
        .matches(/[A-Z]/, 'Password is invalid')
        .required('Password is required'),
};

export const validationSchema = Yup.object().shape({
    ...name_validation,
    ...email_validation,
    ...account_validation,

    password_confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password is not right')
        .required('Confirm password is required'),
});

//
export const field_username = {
    name: 'username',
    type: 'text',
    label: 'Username',
    help: '5-15 english letters and no space',
    max_length: 15,
};

const field_password = {
    name: 'password',
    type: 'password',
    label: 'Password',
    help: '5-15 english letters, no space and at least 1 uppercase letter',
    max_length: 15,
};

const field_password_confirm = {
    name: 'password_confirm',
    type: 'password',
    label: 'Password confirm',
    help: 'Confirm your password',
    max_length: 15,
};

const field_email = {
    name: 'email',
    type: 'email',
    label: 'Email',
    help: '****@*mail.com',
};

const field_first_name = {
    name: 'first_name',
    type: 'text',
    label: 'First name',
    help: '1-20 letters, spaces and start with a letter',
    max_length: 20,
};

const field_last_name = {
    name: 'last_name',
    type: 'text',
    label: 'Last name',
    help: '1-15 letters, spaces and start with a letter',
    max_length: 15,
};

//
export const fields = [
    field_username,
    field_password,
    field_password_confirm,
    field_email,
    field_first_name,
    field_last_name,
];

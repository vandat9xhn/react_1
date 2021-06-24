//
export const actionLocationRegister = (is_register = false) => {
    return {
        type: 'REGISTER',
        payload: is_register,
    };
};

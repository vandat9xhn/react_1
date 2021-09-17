import { handle_API_ProfileUser_R } from '../_handle_api/profile/ProfileHandleAPI';

//
export const PATTERN_PASSWORD = /^\w{5,}$/;

//
export function detectPasswordPattern(
    password = '',
    pattern = PATTERN_PASSWORD
) {
    if (pattern.test(password)) {
        return true;
    }

    return false;
}

//
export async function detectPasswordIsReal(password = '') {
    await handle_API_ProfileUser_R({});
    return true;
}

//
export async function detectPasswordIsOk(
    password = '',
    pattern = PATTERN_PASSWORD
) {
    if (detectPasswordPattern(password, pattern)) {
        const is_ok = await detectPasswordIsReal(password);

        return is_ok;
    }

    return false;
}

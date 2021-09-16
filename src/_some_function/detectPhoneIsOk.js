//
export function detectPhoneIsOk(phone = '') {
    if (/^\d{10}$/.test(phone)) {
        return true;
    }

    return false;
}

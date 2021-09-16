import { handle_API_ProfileUser_R } from '../_handle_api/profile/ProfileHandleAPI';

//
export async function detectNewEmailIsOk(new_email = '') {
    if (/^\w{5,}@\wmail\.com$/.test(new_email)) {
        // 
        await handle_API_ProfileUser_R({});

        return true;
    }

    return false;
}

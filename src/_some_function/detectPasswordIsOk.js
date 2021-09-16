import { handle_API_ProfileUser_R } from "../_handle_api/profile/ProfileHandleAPI";

//
export async function detectPasswordIsOk(password = '') {
    if (/^\w{5,}$/.test(password)) {
        // 
        await handle_API_ProfileUser_R({});

        return true;
    }

    return false;
}

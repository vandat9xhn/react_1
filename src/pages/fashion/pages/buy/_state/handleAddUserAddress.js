import { handle_API_FsUserInfoBuy_C } from '../../../../../_handle_api/fashion/user_info';

//
export async function handleAddUserAddress({
    new_user_info = {
        address_str_arr: ['', '', ''],
        checked_default: false,
        phone: '',
        specific: '',
        type: '',
        user_name: '',
    },

    setStateObj = () => {},
    handleScreenFetching = () => new Promise(),
    closeScreenFloor = () => {},
}) {
    setStateObj((state_obj) => {
        const new_user_info_arr = [...state_obj.user_info_arr];

        if (new_user_info.checked_default) {
            new_user_info_arr.find(
                (item) => item.is_default
            ).is_default = false;
        }

        new_user_info_arr.push({
            id: -new_user_info_arr.length,
            name: new_user_info.user_name,
            phone: new_user_info.phone,
            address: `${new_user_info.specific}, ${new_user_info.address_str_arr
                .reverse()
                .join(', ')}`,
            type: new_user_info.type,
            is_default: new_user_info.checked_default,
        });

        return {
            ...state_obj,
            user_info_arr: new_user_info_arr,
        };
    });

    await handleScreenFetching(() =>
        handle_API_FsUserInfoBuy_C({
            data: new_user_info,
        })
    );

    closeScreenFloor();
}

import { API_FsUserInfoBuy_LC } from '../../api/api_django/fashion/user_info';

//
export async function handle_API_FsUserInfoBuy_L({ c_count = 0, params = {} }) {
    const res = await API_FsUserInfoBuy_LC({
        method: 'GET',
        params: {
            page: 1,
            size: 5,
            c_count: c_count,
            ...params,
        },
    });

    const data = res.data.data.map((item) => {
        return {
            id: item.id,
            name: item.name,
            phone: item.phone,
            address: `${item.specific}, ${item.commune}, ${item.district}, ${item.province}`,
            type: item.type,
            is_active: item.is_active,
            is_default: item.is_default,
        };
    });

    return { ...res.data, data: data };
}

export async function handle_API_FsUserInfoBuy_C({ data = {} }) {
    const res = await API_FsUserInfoBuy_LC({
        method: 'POST',
        data: data,
    });

    return res.data;
}

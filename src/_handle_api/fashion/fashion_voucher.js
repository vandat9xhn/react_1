import { API_FsVoucher_L } from '../../api/api_django/fashion/fashion_voucher';

//
export async function handle_API_FsVoucher_L({ c_count = 0 }) {
    const res = await API_FsVoucher_L({
        method: 'GET',
        params: {
            page: 1,
            size: 5,
            c_count: c_count,
        },
    });

    return res.data;
}

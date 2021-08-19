import {
    API_FashionHomeMallVidPic_L,
    API_FashionHomeMall_L,
    API_FashionHomeSearch_L,
    API_FashionHomeTrend_L,
} from '../../api/api_django_no_token/fashion/trend_mall_selling_home';

//
export async function handle_API_FashionHomeTrend_L(c_count = 0) {
    const res = await API_FashionHomeTrend_L({
        page: 1,
        size: 5,
        c_count: c_count,
    });

    return res.data;
}

//
export async function handle_API_FashionHomeSearch_L(c_count = 0) {
    const res = await API_FashionHomeSearch_L({
        page: 1,
        size: 5,
        c_count: c_count,
    });

    return res.data;
}

//
export async function handle_API_FashionHomeMall_L(c_count = 0) {
    const res = await API_FashionHomeMall_L({
        page: 1,
        size: 5,
        c_count: c_count,
    });

    return res.data;
}

//
export async function handle_API_FashionHomeMallVidPic_L(c_count = 0) {
    const res = await API_FashionHomeMallVidPic_L({
        page: 1,
        size: 5,
        c_count: c_count,
    });

    return res.data;
}

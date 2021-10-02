import { API_PLBannerHot_R } from '../../api/api_django_no_token/phone_laptop/home_banner_hot';

//
export async function handle_API_PLBannerHot_R({ params = {} }) {
    const res = await API_PLBannerHot_R({
        ...params,
    });

    return res.data;
}

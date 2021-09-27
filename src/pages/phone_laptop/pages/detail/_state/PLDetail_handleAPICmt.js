import { API_PLComment_L } from '../../../../../api/api_django_no_token/phone_laptop/comment';

//
export async function PLDetail_handleAPICmt({ product_id, page }) {
    try {
        const res = await API_PLComment_L({
            product_model: product_id,
            page: page,
            size: 10,
        });

        const new_data = res.data.data.map((item) => {
            return {
                ...item,
                open_reply: false,
                img_preview_arr: [],
                files: [],
            };
        });

        return { ...res.data, data: new_data };
    } catch (e) {
        console.log(e);
    }
}

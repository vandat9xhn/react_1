import { API_FashionComment_C } from '../../../../../api/api_django/fashion/APIFashionToken';
import {
    API_FashionComment_L,
    API_FashionUserContentComment_R,
} from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
//
import makeFormData from '../../../../../_some_function/makeFormData';
//
import { params_fashion_cmt_l } from '../../../__params/item/comment/FashionCmtParams';

//
export async function handle_API_FashionComment_L({
    product_model,
    c_count,
    ...rest_params
}) {
    const res = await API_FashionComment_L({
        ...params_fashion_cmt_l,
        ...rest_params,
        product_model: product_model,
        c_count: c_count,
    });

    return res.data;
}

export async function handle_API_FashionComment_C({
    content = '',
    files = [],
}) {
    const res = await API_FashionComment_C(
        makeFormData({
            content: content,
            'vid_pics[]': files,
        })
    );

    return res.data;
}

export async function handle_API_FashionContentComment_R({
    comment_model,
    is_user = 0,
}) {
    const res = await API_FashionUserContentComment_R({
        comment_model: comment_model,
        is_user: is_user,
    });
    const {
        content_obj: { content },
    } = res.data;

    return content;
}

export async function handle_API_FashionUserContentComment_R({
    comment_model,
}) {
    return handle_API_FashionContentComment_R({
        comment_model: comment_model,
        is_user: 1,
    });
}

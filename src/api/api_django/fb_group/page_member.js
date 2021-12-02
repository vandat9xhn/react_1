import axiosDjangoClient from '../_axios/AxiosDjango';
//
import { API_FakeReal } from '../../_ConstAPI';
//
import { default_fb_group_page_member_obj } from '../../../_default/fb_group/page_member';

//
export const API_FBGroupPageMember_R = (params) =>
    API_FakeReal(
        default_fb_group_page_member_obj(),
        () =>
            axiosDjangoClient({
                url: 'api/facebook/fb-group-page-member-r/',
                method: 'GET',
                params: params,
            }),
        params
    );

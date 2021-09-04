import axiosClientNoToken from "../_axios/AxiosNoToken";
// 
import { API_FakeReal } from "../../_ConstAPI";
// 
import { default_full_address_arr } from "../../../_default/address/full_address";

 
// 
export const API_FullAddress_L = (params = {}) =>
    API_FakeReal(
        default_full_address_arr(),
        () =>
            axiosClientNoToken({
                url: 'api/address/address-l/',
                method: 'GET',
                params: params,
            }),
        params
    );
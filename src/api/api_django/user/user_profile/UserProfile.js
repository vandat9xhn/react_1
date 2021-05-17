import { API_FakeReal } from '../../../_ConstAPI';
import axiosDjangoClient from '../../_axios/AxiosDjango';
//
import { default_user_r } from '../../../../pages/user_profile/__default/DefaultUserProfile';

// Retrieve Update Personal
export const API_UserProfile_RU = (pk, method, data = {}) =>
    API_FakeReal(
        default_user_r.find((item) => item.id == pk) || default_user_r[2],
        () =>
            axiosDjangoClient({
                url: '/user/ru-profile/' + pk + '/',
                method: method,
                data: data,
            })
    );

// Retrieve Update Contact
export const RU_UserContact = (pk, method, data = {}) =>
    axiosDjangoClient({
        url: '/user/ru-contact/' + pk + '/',
        method: method,
        data: data,
    });

// Retrieve Update Work
export const RU_UserWork = (pk, method, data = {}) =>
    axiosDjangoClient({
        url: '/user/ru-work/' + pk + '/',
        method: method,
        data: data,
    });

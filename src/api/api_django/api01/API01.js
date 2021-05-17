import { API_FakeReal } from '../../_ConstAPI';
import axiosDjangoClient from '../_axios/AxiosDjango';

// Create
export const API_City_C = (data) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/api01/c-city/',
            method: 'POST',
            data: data,
        })
    );

// Retrieve Update Delete
export const API_City_UD = (pk, method, data = {}) =>
    API_FakeReal({}, () =>
        axiosDjangoClient({
            url: '/api01/ud-city/' + pk + '/',
            method: method,
            data: data,
        })
    );

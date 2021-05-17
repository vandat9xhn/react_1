import axiosClientHeroku from '../axios/axiosClient';

// 
export const API_Heroku1_Phone_L = (params) =>
    axiosClientHeroku({
        url: 'phone/list/',
        method: 'GET',
        params: params,
    });

//
export const API_Heroku1_Phone_R = (id) =>
    axiosClientHeroku({
        url: `phone/${id}/`,
        method: 'GET',
    });

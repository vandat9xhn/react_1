import naruto_x_hinata from '../../../image/naruto_x_hinata.jpg';

// 
export const default_define_user = {
    id: 1,
    first_name: 'Ngoc',
    last_name: 'My',
    picture: naruto_x_hinata,
}

// 
export const default_login = {
    ...default_define_user,
    access: '',
    life_time: new Date().getTime()
}

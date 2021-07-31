/* ------- FAKE API -------- */
export const is_api_fake = true;
export const baseURL = is_api_fake
    ? 'http://localhost:8000/'
    : 'https://react-django-heroku.herokuapp.com/';

//
const API_Fake = ({ data, followed_size, params = {} }) =>
    new Promise((res) => {
        const is_pagination = 'page' in params;
        const size = params['size'] || 10;

        setTimeout(() => {
            res(
                is_pagination
                    ? {
                          data: {
                              data: data,
                              pages: 10,
                              count: followed_size
                                  ? data.length < size
                                      ? data.length
                                      : size * 3 + 6
                                  : 222,
                          },
                      }
                    : { data: data }
            );
        }, 250);
    });

//
export const API_FakeReal = (
    data,
    API_Real = () => new Promise(),
    params = {},
    followed_size = false
) =>
    is_api_fake
        ? API_Fake({ data: data, params: params, followed_size: followed_size })
        : API_Real();

/* --------- CSRF TOKEN --------- */

export const csrftoken = () =>
    document.cookie &&
    document.cookie
        .split(';')
        .filter((str) => str.startsWith('csrftoken='))[0]
        .slice(10);

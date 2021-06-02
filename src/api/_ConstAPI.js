/* ------------------ FAKE API ----------------- */
export const is_api_fake = true;

//
const API_Fake = (new_data, params = {}) =>
    new Promise((res) => {
        const data = JSON.parse(JSON.stringify(new_data));

        const is_pagination = 'page' in params;
        const is_arr = Array.isArray(data);
        const is_obj = typeof data == 'object';

        setTimeout(() => {
            const res_data = is_arr
                ? data.map((item, ix) => {
                      item.id =
                          ix +
                          1 +
                          (params['c_count'] + 1 || params['page'] * 20);
                      return item;
                  })
                : is_obj
                ? { ...data, id: Math.round(Math.random() * 10000) }
                : data;

            res(
                is_pagination
                    ? { data: { data: res_data, pages: 8, count: 22 } }
                    : { data: res_data }
            );
        }, 500);
    });

//
export const API_FakeReal = (data, API_Real = () => new Promise(), params) =>
    is_api_fake ? API_Fake(data, params) : API_Real();

/* ------------------ CSRF TOKEN ----------------- */

export const csrftoken = () =>
    document.cookie &&
    document.cookie
        .split(';')
        .filter((str) => str.startsWith('csrftoken='))[0]
        .slice(10);

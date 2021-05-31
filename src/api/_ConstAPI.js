/* ------------------ FAKE API ----------------- */
export const is_api_fake = true;

//
const API_Fake = (new_data, params = {}) =>
    new Promise((res) => {
        const is_pagination = 'page' in params;
        const data = JSON.parse(JSON.stringify(new_data));
        const is_arr = Array.isArray(data);

        setTimeout(() => {
            const res_data = is_arr
                ? data.map((item, ix) => {
                      item.id =
                          ix +
                          1 +
                          (params['c_count'] + 1 || params['page'] * 20);
                      return item;
                  })
                : data;

            res(
                is_pagination
                    ? { data: { data: res_data, pages: 8, count: 22 } }
                    : is_arr || typeof res_data != 'object'
                    ? { data: res_data }
                    : {
                          data: {
                              ...res_data,
                              id: Math.round(Math.random() * 10000),
                          },
                      }
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

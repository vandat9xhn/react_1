/* ------------------ FAKE API ----------------- */
export const is_api_fake = true;

//
const API_Fake = (new_data, params = {}) =>
    new Promise((res) => {
        // const data = JSON.parse(JSON.stringify(new_data));
        const is_pagination = 'page' in params;

        setTimeout(() => {
            res(
                is_pagination
                    ? { data: { data: new_data, pages: 10, count: 222 } }
                    : { data: new_data }
            );
        }, 250);
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

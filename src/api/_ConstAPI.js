/* ------------------ FAKE API ----------------- */
export const is_api_fake = true;

//
const API_Fake = (new_data, is_pagination = false) =>
    new Promise((res) => {
        const data = JSON.parse(JSON.stringify(new_data))
        
        setTimeout(() => {
            is_pagination
                ? res({ data: { data: data, pages: 8, count: 22 } })
                : res({ data: data });
        }, 500);
    });

//
export const API_FakeReal = (data, API_Real = () => new Promise(), params) =>
    is_api_fake
        ? API_Fake(data, params ? 'page' in params : false)
        : API_Real();

/* ------------------ CSRF TOKEN ----------------- */

export const csrftoken = () =>
    document.cookie &&
    document.cookie
        .split(';')
        .filter((str) => str.startsWith('csrftoken='))[0]
        .slice(10);

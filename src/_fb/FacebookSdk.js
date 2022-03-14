//
export const promisesFB = {
    init: () => {
        return new Promise((resolve, reject) => {
            if (typeof FB !== 'undefined') {
                resolve();
            } else {
                window.fbAsyncInit = () => {
                    FB.init({
                        appId: '234967228001181',
                        cookie: true,
                        xfbml: true,
                        version: 'v2.5',
                    });
                    resolve();
                };
                (function (d, s, id) {
                    var js,
                        fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = '//connect.facebook.net/en_US/sdk.js';
                    fjs.parentNode.insertBefore(js, fjs);
                })(document, 'script', 'facebook-jssdk');
            }
        });
    },
    checkLoginState: () => {
        return new Promise((resolve) => {
            FB.getLoginStatus((response) => {
                resolve(response);
            });
        });
    },

    login: () => {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                response.status === 'connected'
                    ? resolve(response)
                    : reject(response);
            });
        });
    },

    logout: () => {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                response.authResponse ? resolve(response) : reject(response);
            });
        });
    },

    fetch: () => {
        return new Promise((resolve, reject) => {
            FB.api(
                '/me',
                { fields: 'first_name, last_name, gender, picture' },
                (response) =>
                    response.error ? reject(response) : resolve(response)
            );
        });
    },
};

//
export async function checkStatusFb() {
    try {
        await promisesFB.init();
        const res = await promisesFB.checkLoginState();

        console.log(res);

        if (res.status !== 'connected') {
            return 'not_authorized';
        }
        //
        else if (res.status === 'connected') {
            const res_fetch = await promisesFB.fetch();

            return res_fetch;
        }
    } catch (err) {
        throw err;
    }
}

//
export async function doLoginFb() {
    try {
        await promisesFB.init();
        const res_login = await promisesFB.login();
        console.log(res_login);

        const res = await promisesFB.fetch();

        return res;
    } catch (err) {
        throw err;
    }
}

//
export async function doLogoutFb() {
    try {
        await promisesFB.init();
        const res = await promisesFB.logout();

        return res;
    } catch (err) {
        throw err;
    }
}

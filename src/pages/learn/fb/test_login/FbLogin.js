import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    promisesFB,
    Facebook,
    checkStatusFb,
    doLoginFb,
    doLogoutFb,
} from '../../../../_fb/FacebookSdk';
//

//
FbLogin.propTypes = {};

//
function FbLogin(props) {
    //
    const [fb_state, setFbState] = useState({
        picture: '',
    });

    const { picture } = fb_state;

    //
    useEffect(() => {
        location.protocol === 'https:' && loginToFb();
    }, []);

    //
    async function loginToFb() {
        try {
            const res = await checkStatusFb();

            if (res === 'not_authorized') {
                const res_login = await doLoginFb();

                setFbState({
                    picture: res_login.picture.data.url,
                });
            } else {
                setFbState({
                    picture: res.picture.data.url,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    //
    async function logoutFromFb() {
        try {
            await doLogoutFb();

            setFbState({
                picture: '',
            });
        } catch (err) {
            console.log(err);
        }
    }

    //
    return (
        <div>
            <div>
                <img
                    className="brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width="100"
                    height="100"
                />
            </div>

            <div>
                <div className="cursor-pointer" onClick={logoutFromFb}>
                    Logout
                </div>
            </div>
        </div>
    );
}

export default FbLogin;

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
const use_fb = false;

//
FbLogin.propTypes = {};

//
function FbLogin(props) {
    //
    const [fb_state, setFbState] = useState({
        // status: '',
        picture: '',
    });

    const { picture } = fb_state;

    //
    useEffect(() => {
        // location.protocol === 'https:' && use_fb && loginToFb();
        loginToFb();
    }, []);

    //
    async function loginToFb() {
        try {
            const res = await checkStatusFb();

            console.log(res);

            setFbState({
                picture: res.picture.data.url,
            });
            
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

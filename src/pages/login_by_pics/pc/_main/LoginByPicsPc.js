import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { useLoginRecently } from "../../hooks/useLoginRecently";

import LoginByPicItemPc from "../../pc/item/LoginByPicItemPc";

import "./LoginByPicsPc.scss";

//
LoginByPicsPc.propTypes = {};

//
function LoginByPicsPc(props) {
    //
    const { user_arr, has_fetched, handleLogin } = useLoginRecently();

    // ----

    if (!has_fetched) {
        return null;
    }

    if (has_fetched && user_arr.length === 0) {
        return <Redirect to={"/login-form"} />;
    }

    //
    return (
        <div className="LoginByPicsPc display-flex-center padding-y-20px">
            <div>
                <div className="margin-bottom-20px">
                    <h1 className="LoginByPicsPc_title">Recent logins</h1>

                    <div>Click your picture to login.</div>
                </div>

                <div className="LoginByPicsPc_list">
                    <div className="display-flex-center flex-wrap">
                        {user_arr.map((item, ix) => (
                            <div key={item.id} className="margin-right-20px">
                                <LoginByPicItemPc
                                    ix={ix}
                                    last_name={item.last_name}
                                    picture={item.picture}
                                    handleLogin={handleLogin}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="margin-top-20px">
                    <Link to={"/login-form"}>Login another account</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginByPicsPc;

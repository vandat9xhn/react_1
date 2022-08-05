import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useLoginRecently } from "../../hooks/useLoginRecently";

import { LOG_ANOTHER } from "../../constant";
import LoginByPicItemPc from "../../pc/item/LoginByPicItemPc";
import LoginByPicItemPlPc from "../item/LoginByPicItemPlPc";

import "./LoginByPicsPc.scss";

//
LoginByPicsPc.propTypes = {};

//
function LoginByPicsPc(props) {
    //
    const { user_arr, has_fetched, handleLogin, handleDel } =
        useLoginRecently();

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
                                    handleDel={handleDel}
                                />
                            </div>
                        ))}
                    </div>

                    {has_fetched ? (
                        user_arr.length === 0 ? (
                            <div className="font-17px font-500 text-555">
                                No recently logins
                            </div>
                        ) : null
                    ) : (
                        <LoginByPicItemPlPc />
                    )}
                </div>

                <div className="margin-top-20px">
                    <Link to={"/login-form"}>{LOG_ANOTHER}</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginByPicsPc;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import IconPlusSubtract from "../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract";
import IconsInput from "../../../../_icons_svg/Icons_input/IconsInput";

import { useLoginRecently } from "../../hooks/useLoginRecently";

import { LOG_ANOTHER } from "../../constant";
import LoginByPicItemMb from "../item/LoginByPicItemMb";
import LoginByPicItemPlMb from "../item/LoginByPicItemPlMb";
import LoginByPicLinkMb from "../link/LoginByPicLinkMb";

import "./LoginByPicsMb.scss";

//
LoginByPicsMb.propTypes = {};

//
function LoginByPicsMb(props) {
    //
    const { user_arr, has_fetched, handleDel, handleLogin } =
        useLoginRecently();

    //
    return (
        <div className="LoginByPicsMb">
            {has_fetched && user_arr.length === 0 ? null : (
                <div className="padding-y-4px padding-x-8px">
                    <div className="text-555">
                        Tap your profile picture to login
                    </div>
                </div>
            )}

            <div className="LoginByPicsMb_list">
                {user_arr.map((item, ix) => (
                    <div key={item.id} className="">
                        <LoginByPicItemMb
                            ix={ix}
                            last_name={item.last_name}
                            picture={item.picture}
                            handleLogin={handleLogin}
                            handleDel={handleDel}
                        />
                    </div>
                ))}

                {has_fetched ? (
                    user_arr.length === 0 ? (
                        <div className="padding-y-10px font-600 text-555 text-align-center">
                            No recently logins
                        </div>
                    ) : null
                ) : (
                    <LoginByPicItemPlMb />
                )}
            </div>

            <div className="margin-top-15px padding-x-10px">
                <div>
                    <LoginByPicLinkMb
                        Icon={
                            <IconPlusSubtract
                                size_icon="14px"
                                stroke="currentColor"
                            />
                        }
                        title={LOG_ANOTHER}
                        to={"/login-form"}
                    />
                </div>

                <div className="margin-top-15px">
                    <LoginByPicLinkMb
                        Icon={<IconsInput size_icon="14px" y={200} />}
                        title={"Find Your Account"}
                        to={"/find-account"}
                    />
                </div>
            </div>

            <div className="display-flex-center margin-top-20px">
                <Link className="text-white font-600" to="/registration-form">
                    <div className="padding-y-4px padding-x-10px bg-green">
                        Create New Account
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default LoginByPicsMb;

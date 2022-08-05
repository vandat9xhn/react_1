import React from "react";
import { ActionsMultiList } from "react-portal-actions";
import PropTypes from "prop-types";

import "./LoginByPicItemMb.scss";

//
const API_L = () =>
    new Promise((res) => {
        setTimeout(() => {
            res([[{ title: "Remove this account", name: "delete" }]]);
        }, 250);
    });

//
LoginByPicItemMb.propTypes = {};

//
function LoginByPicItemMb({
    ix,
    first_name,
    last_name,
    picture,
    
    handleLogin,
    handleDel,
}) {
    //
    async function handle_API_L() {
        const data = await API_L();

        return data;
    }

    //
    function onLogin() {
        handleLogin(ix);
    }

    //
    function handleAction(action_name = "") {
        if (action_name === "delete") {
            handleDel(ix);
        }
    }

    //
    return (
        <div className="LoginByPicItemMb display-flex align-items-center space-around padding-8px border-bottom-blur bg-primary">
            <div
                className="display-flex align-items-center flex-grow-1"
                onClick={onLogin}
            >
                <img
                    className="object-fit-cover"
                    src={picture}
                    alt=""
                    width={40}
                    height={40}
                />

                <div className="margin-left-12px">
                    {first_name} {last_name}
                </div>
            </div>

            <div>
                <ActionsMultiList
                    handle_API_L={handle_API_L}
                    handleAction={handleAction}
                />
            </div>
        </div>
    );
}

export default LoginByPicItemMb;

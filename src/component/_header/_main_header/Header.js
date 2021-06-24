import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//
import './HeaderCommon.scss';
//
import HeaderH from '../header_left/header_horizontal/_main/HeaderH';
import HeaderV from '../header_left/header_vertical/_main/HeaderV';
import RightHeader from '../header_right/_main/RightHeaderWs';
//
import './Header.scss';
import './HeaderRes.scss';

//
function Header() {
    //
    const { is_register } = useSelector((state) => state.location_obj);

    //
    useEffect(() => {
        localStorage.is_mobile = navigator.userAgent.includes('Mobile') ? 1 : 0;
    }, []);

    useEffect(() => {
        handleNewMember();
    }, [is_register]);

    //
    function handleNewMember() {
        if (sessionStorage.new_member) {
            alert('Welcome ' + sessionStorage.new_member);
            sessionStorage.removeItem('new_member');
        }
    }

    //
    return (
        <div
            className={`Header App_box_shadow ${
                is_register ? 'display-none' : ''
            }`}
        >
            <div className="Header_contain">
                <div className="Header_row">
                    <div className="Header_col-left">
                        <HeaderV />
                        <HeaderH />
                    </div>

                    <div className="Header_col-right">
                        <RightHeader />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

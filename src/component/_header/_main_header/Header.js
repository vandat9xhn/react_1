import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// 
import HeaderH from '../header_left/header_horizontal/HeaderH';
import HeaderV from '../header_left/header_vertical/HeaderV';
import RightHeader from '../header_right/_main/RightHeaderWs';
// 
import './Header.scss';
import './HeaderCommon.scss';
import './HeaderRes.scss';


// Class
function Header() {
    useEffect(() => {
        localStorage.is_mobile = navigator.userAgent.includes('Mobile') ? 1 : 0;

        if (sessionStorage.new_member == 1) {
            if (localStorage.is_login == 1) {
                alert('Welcome ' + localStorage.name);
                sessionStorage.removeItem('new_member');
            }
        }
    }, [])


    return (
        <div
            className={`Header App_box_shadow ${
                useLocation().pathname.search(/registration-form/) > 0
                    ? 'display-none'
                    : ''
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

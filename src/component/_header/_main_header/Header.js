import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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
    useEffect(() => {
        const is_mobile = navigator.userAgent.includes('Mobile');

        localStorage.is_mobile = is_mobile ? 1 : 0;

        is_mobile &&
            document
                .getElementsByTagName('body')[0]
                .classList.add('device-mobile');
    }, []);

    //
    return (
        <div
            className={`Header App_box_shadow h-100-per bg-primary ${
                location.pathname.search('registration-form') > 0
                    ? 'display-none'
                    : ''
            }`}
        >
            <div className="Header_contain h-100per">
                <div className="Header_row flex-between-center h-100per">
                    <div className="Header_col-left h-100per">
                        <HeaderV />
                        <HeaderH />
                    </div>

                    <div className="Header_col-right h-100per">
                        <RightHeader />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Header);

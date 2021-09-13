import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../_constant/Constant';
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
        IS_MOBILE &&
            document
                .getElementsByTagName('body')[0]
                .classList.add('device-mobile');
    }, []);

    //
    return (
        <div
            className={`Header App_box_shadow bg-primary ${
                location.pathname.search('registration-form') > 0
                    ? 'display-none'
                    : ''
            }`}
        >
            <div className="Header_contain">
                <div className="Header_row flex-between-center">
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

export default withRouter(Header);

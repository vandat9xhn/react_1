import React, { useEffect, useRef } from 'react';
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
import PLHead from '../../../pages/phone_laptop/components/head/_main/PLHead';
//
import './Header.scss';
import './HeaderRes.scss';

//
function Header() {
    //
    const ref_header = useRef(null);

    //
    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];

        if (/^\/(phone|fashion).*$/.test(location.pathname)) {
            body.dataset.headerNotFixedCount = 1;

            if (!IS_MOBILE) {
                ref_header.current.style.minWidth = '1200px';
            }
        } else {
            body.removeAttribute('data-header-not-fixed-count');

            if (!IS_MOBILE) {
                ref_header.current.style.removeProperty('min-width');
            }

        }
    }, [location.pathname]);

    //
    return (
        <div
            ref={ref_header}
            className={`Header App_box_shadow bg-primary user-select-none ${
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

            {location.pathname.search('/phone') == 0 ? (
                <div className="Header_pl">
                    <PLHead />
                </div>
            ) : null}
        </div>
    );
}

export default withRouter(Header);

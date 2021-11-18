import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
// import './HeaderCommon.scss';
//
import HeaderLeft from '../header_left/_main/HeaderLeft';
import HeaderCenter from '../center/_main/HeaderCenter';
import HeaderRight from '../header_right/_main/HeaderRight';
import HeaderMenu from '../../_header_menu/_main/HeaderMenu';
//
import PLHead from '../../../pages/phone_laptop/components/head/_main/PLHead';
//
import './Header.scss';
import './HeaderRes.scss';

//
function Header() {
    //
    useParams();

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
            className={`Header bg-primary App_box_shadow user-select-none ${
                location.pathname.search('registration-form') > 0
                    ? 'display-none'
                    : ''
            }`}
        >
            <div className="Header_contain pos-rel">
                <div className="Header_left">
                    <HeaderLeft />
                </div>

                <div className="Header_menu display-none h-100per">
                    <div className="display-flex h-100per">
                        <HeaderMenu />
                    </div>
                </div>

                <div className="Header_center h-100per">
                    <HeaderCenter />
                </div>

                <div className="Header_right pos-abs right-0 top-0 z-index-1 h-100per">
                    <HeaderRight />
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

export default Header;

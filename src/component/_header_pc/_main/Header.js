import React, { useEffect, useRef } from 'react';
//
import { useHeaderNotFixed } from '../../../_hooks/useHeaderNotFixed';
//
import HeaderLeft from '../header_left/_main/HeaderLeft';
import HeaderCenter from '../center/_main/HeaderCenter';
import HeaderRight from '../header_right/_main/HeaderRight';
import HeaderMenu from '../../_header_menu/_main/HeaderMenu';
//
import './Header.scss';
import './HeaderRes.scss';

//
function Header() {
    //
    const ref_header = useRef(null);

    //
    useHeaderNotFixed();

    //
    useEffect(() => {
        if (/^\/(phone|fashion).*$/.test(location.pathname)) {
            ref_header.current.style.minWidth = '1200px';
        } else {
            ref_header.current.style.removeProperty('min-width');
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
        </div>
    );
}

export default Header;

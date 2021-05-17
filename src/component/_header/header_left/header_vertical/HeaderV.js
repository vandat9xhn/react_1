import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import CloseDiv from '../../../some_div/close_div/CloseDiv';
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';
import ArrowAndString from '../../../some_div/arrow_div/ArrowAndString';
import IconDiv from '../../../some_div/icon_div/IconDiv';
import IconsProfile from '../../../../_icons_svg/icons_profile/IconsProfile';

import './HeaderV.scss';
//
function HeaderV() {
    const [open_menu, setOpenMenu] = useState(false);
    const [open_list_other, setOpenListOther] = useState(false);

    /* ---------------------- MENU --------------------- */

    const ToggleMenu = () => {
        setOpenMenu(!open_menu);
    };

    const closeMenu = () => {
        if (open_menu) {
            setOpenMenu(false);
        }
    };

    /* ---------------------- LIST OTHER --------------------- */
    const ToggleListOther = (event) => {
        event.stopPropagation();
        setOpenListOther(!open_list_other);
    };

    /* ---------------------- FUNC CLICK LINK --------------------- */

    const changeURL = () => {
        closeMenu();
    };

    // class for text in header vertical
    const header_text = 'HeaderV__text header_item nav-bottom nav-text';

    //
    return (
        <CloseDiv makeDivHidden={closeMenu}>
            <div className="HeaderV" onClick={changeURL}>
                {/* icon menu */}
                <div
                    className={`HeaderV_menu header_menu ${
                        open_menu ? 'nav-active' : ''
                    }`}
                    onClick={ToggleMenu}
                >
                    <div className="header_item">
                        <IconsMenu />
                    </div>
                </div>

                {/* HeaderV ul */}
                <div
                    className={`header_hidden HeaderV_hidden ${
                        open_menu ? '' : 'display-none'
                    }`}
                >
                    <div className="header_hidden-contain">
                        <ul className="list-none">
                            {/* home */}
                            <li className="HeaderV__item">
                                <NavLink
                                    className="normal-text"
                                    activeClassName="nav-active"
                                    to="/home"
                                >
                                    <div className={header_text} title="Home">
                                        <IconDiv Icon={IconsMenu} x={200}>
                                            Home
                                        </IconDiv>
                                    </div>
                                </NavLink>
                            </li>

                            {/* phone */}
                            <li className="HeaderV__item">
                                <NavLink
                                    className="normal-text"
                                    activeClassName="nav-active"
                                    to="/phone-laptop"
                                >
                                    <div className={header_text} title="Phone">
                                        <IconDiv Icon={IconsProfile} y={200}>
                                            Phone
                                        </IconDiv>
                                    </div>
                                </NavLink>
                            </li>

                            {/* fashion */}
                            <li className="HeaderV__item">
                                <NavLink
                                    className="normal-text"
                                    activeClassName="nav-active"
                                    to="/fashion"
                                >
                                    <div
                                        className={header_text}
                                        title="Shopping"
                                    >
                                        <IconDiv Icon={IconsMenu} x={400}>
                                            Shopping
                                        </IconDiv>
                                    </div>
                                </NavLink>
                            </li>

                            {/* city */}
                            <li className="HeaderV__item">
                                <NavLink
                                    className="normal-text"
                                    activeClassName="nav-active"
                                    to="/city-street"
                                >
                                    <div
                                        className={header_text}
                                        title="City and Street"
                                    >
                                        City
                                    </div>
                                </NavLink>
                            </li>

                            {/* list other */}
                            <li className="HeaderV__item HeaderV_learns">
                                <ArrowAndString
                                    open_list={open_list_other}
                                    onClick={ToggleListOther}
                                >
                                    Learn
                                </ArrowAndString>
                                <ul
                                    className={`HeaderV_learns-list list-none ${
                                        open_list_other
                                            ? 'HeaderV_learns-open'
                                            : 'HeaderV_learns-hidden'
                                    }`}
                                >
                                    {/* learn html */}
                                    <li className="HeaderV__item">
                                        <NavLink
                                            className="normal-text"
                                            activeClassName="nav-active"
                                            to="/learn-html"
                                        >
                                            <div
                                                className={`${header_text}  HeaderV_learns-item`}
                                                title="Learn HTML"
                                            >
                                                Learn HTML
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default HeaderV;
